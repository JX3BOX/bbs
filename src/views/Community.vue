<template>
    <CommunityLayout>
        <CommunityHeader :categoryList="categoryList" />
        <CommunitySearch @search="onSearch" ref="searchInput" />
        <div class="m-community-content" v-loading="loading">
            <!-- 搜索时展示的内容 -->
            <div v-if="isSearch">
                <!-- 搜索结果列表 -->
                <CommunitySearchList
                    :list="searchList"
                    @search="onSearch"
                    @close="onCloseSearch"
                    :keyword="searchParams.q"
                >
                    <!-- 分页 -->
                    <CommunityPagination
                        :total="total"
                        :per="per"
                        :current-page.sync="page"
                        @current-change="changePage"
                        :loading="loading"
                        :has-next-page="hasNextPage"
                        @append-page="appendPage"
                /></CommunitySearchList>
            </div>
            <!-- 正常展示的内容 -->
            <div v-else>
                <!-- 置顶文章 -->
                <TopicTop v-if="topTopicData" :data="topTopicData" />
                <!-- 瀑布流 -->
                <div class="m-topic-list" v-if="list.length">
                    <Waterfall
                        :col="col"
                        :autoResize="true"
                        :moveTransitionDuration="0"
                        :fillBox="true"
                        :list="list"
                        :gutter="10"
                        ref="waterfall"
                    >
                        <div slot-scope="item" :class="{ fadeIn: item.state == 'show' }">
                            <TopicItem :key="item.data.id" :data="item.data" />
                        </div>
                    </Waterfall>
                </div>
                <!-- 分页 -->
                <CommunityPagination
                    ref="paginationRef"
                    :total="total"
                    :per="per"
                    :current-page.sync="page"
                    @current-change="changePage"
                    :loading="loading"
                    :has-next-page="hasNextPage"
                    @append-page="appendPage"
                />
            </div>
        </div>
    </CommunityLayout>
</template>

<script>
import CommunityLayout from "@/layouts/CommunityLayout.vue";
import CommunityHeader from "@/components/community/header.vue";
import CommunitySearch from "@/components/community/search.vue";
import Waterfall from "vue-waterfall-rapid";
import TopicItem from "@/components/community/topic_item.vue";
import { getTopicList, globalSearch } from "@/service/community";
import TopicTop from "@/components/community/topic_top.vue";
import { getTopicBucket } from "@/service/community";
import { formatCategoryList } from "@/utils/community";
import CommunitySearchList from "@/components/community/community_search_list.vue";
import CommunityPagination from "@/components/community/community_pagination.vue";
import throttle from "lodash/throttle";
const filter_name = `community_discussion_topic,community_discussion_topic_reply`;
export default {
    components: {
        CommunityPagination,
        CommunityLayout,
        CommunityHeader,
        CommunitySearch,
        CommunitySearchList,
        Waterfall,
        TopicItem,
        TopicTop,
    },
    data() {
        return {
            searchParams: {
                q: "",
                filter_name: filter_name,
            },
            loading: false,
            col: 1,
            page: 1, //当前页数
            total: 0, //总条目数
            per: 18, //每页条目
            pages: 0, //总页数
            number_queries: ["per", "page"],
            category: undefined,
            list: [],
            searchList: [],
            isSearch: false,
            topTopicData: null,
            categoryList: [],
        };
    },
    computed: {
        // 是否显示加载更多
        hasNextPage: function () {
            return this.pages >= 1 && this.per * this.page < this.total;
        },
    },
    provide() {
        return {
            onCategoryChange: this.onCategoryChange,
            getCategoryStyle: this.getCategoryStyle,
        };
    },
    mounted() {
        window.addEventListener("resize", this.handleResize);
        window.addEventListener("scroll", this.handleScroll);
        // 初始化的时候执行一次
        this.handleResize();
        this.loadData();
        this.getCategoryList();
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.handleResize);
        window.removeEventListener("scroll", this.handleScroll);
    },
    watch: {
        // 加载路由参数
        "$route.query": {
            deep: true,
            immediate: true,
            handler: function (query) {
                if (Object.keys(query).length) {
                    for (let key in query) {
                        // for:element分页组件兼容性问题
                        if (this.number_queries.includes(key)) {
                            this[key] = ~~query[key];
                        } else {
                            this[key] = query[key];
                        }
                    }
                }
            },
        },
        list: {
            handler: function (list) {
                if (list.length && this.$refs.waterfall) {
                    // 重新渲染瀑布流高度
                    this.$refs.waterfall.repaints();
                }
            },
            deep: true,
        },
    },
    methods: {
        handleScroll() {
            const paginationRef = this.$refs.paginationRef;
            if (paginationRef && this.hasNextPage) {
                const y = paginationRef.$el.offsetTop;
                if (window.scrollY + window.innerHeight > y) {
                    this.appendPage();
                }
            }
        },
        // 关闭搜索，重置数据
        onCloseSearch() {
            this.isSearch = false;
            this.page = 1;
            this.total = 0;
            this.per = 18;
            this.pages = 0;
            this.searchParams = {
                q: "",
                filter_name: "community_discussion_topic,community_discussion_topic_reply",
            };
            if (this.$refs.searchInput) {
                this.$refs.searchInput.closeSearch();
            }
            this.loadData();
        },
        // 页面大小变动 重新计算列数
        handleResize() {
            if (window.innerWidth > 1920) {
                this.col = 3;
                return;
            }
            if (window.innerWidth > 1200) {
                this.col = 2;
                return;
            }
            this.col = 1;
        },
        // 搜索触发
        onSearch(params) {
            this.isSearch = true;
            // 初始化分页数据 s
            this.page = 1;
            this.total = 0;
            this.per = 20;
            this.pages = 0;
            // 初始化分页数据 e

            this.searchParams = {
                ...this.searchParams,
                ...params,
            };

            this.loadSearchData();
        },
        // 切换展示分类
        onCategoryChange: function (category) {
            this.category = category;
            if (this.$refs.searchInput) {
                this.$refs.searchInput.closeSearch();
            }
            this.loadData();
        },
        // 翻页加载
        changePage: function () {
            if (this.isSearch) {
                this.loadSearchData();
            } else {
                this.loadData();
            }
        },
        // 路由绑定
        replaceRoute: function (extend) {
            return this.$router.push({ name: this.$route.name, query: Object.assign({}, this.$route.query, extend) });
        },
        // 追加加载 节流
        appendPage: throttle(function () {
            if (this.isSearch) {
                this.loadSearchData(true);
            } else {
                this.loadData(true);
            }
        }, 500),
        // 构建最终请求参数
        buildQuery: function (appendMode) {
            if (appendMode) {
                this.page += 1;
            }
            let _query = {
                category: this.category,
                pageSize: this.per,
                index: this.page,
            };
            this.replaceRoute({ category: this.category, page: this.page });

            return _query;
        },
        // 加载数据
        loadData(appendMode = false) {
            this.isSearch = false;
            let query = this.buildQuery(appendMode);
            this.loading = true;
            getTopicList(query)
                .then((res) => {
                    let list = res.data.data.list;
                    if (appendMode) {
                        this.list = this.list.concat(list || []);
                    } else {
                        if (query.index === 1 && list && list.length) {
                            this.topTopicData = list.shift();
                        } else {
                            this.topTopicData = null;
                        }
                        this.list = list || [];
                        // 翻页滚动至顶部
                        this.$nextTick(() => {
                            window.scrollTo(0, 0);
                        });
                    }

                    this.total = res.data.data.page.total;
                    this.pages = res.data.data.page.pageTotal;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        // 加载搜索数据
        loadSearchData(appendMode = false) {
            if (appendMode) {
                this.page += 1;
            }
            this.loading = true;
            globalSearch({
                ...this.searchParams,
                pageIndex: this.page,
                // pageSize: this.per,
            })
                .then((res) => {
                    if (appendMode) {
                        this.searchList = this.searchList.concat(res.data.data.hits || []);
                    } else {
                        this.searchList = res.data.data.hits || [];
                    }
                    const page = res.data.data.page;
                    this.total = page.total;
                    this.pages = page.pageTotal;
                    this.page = page.pageIndex;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        // 获取分类列表
        getCategoryList() {
            getTopicBucket({ type: "community" }).then((res) => {
                this.categoryList = formatCategoryList(res.data.data);
            });
        },
        // 获取指定分类绑定样式
        getCategoryStyle: function (category) {
            let item = this.categoryList.find((item) => item.value === category);
            if (item) {
                return item;
            } else {
                return {
                    icon: `game`,
                    hoverColor: "rgba(235, 244, 255, 1)",
                    color: "rgba(64, 128, 255, 1)",
                };
            }
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/community/community.less";
</style>
