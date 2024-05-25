<template>
    <CommunityLayout>
        <CommunityHeader :categoryList="categoryList" />
        <CommunitySearch @search="onSearch" ref="searchInput" />
        <div class="m-community-content">
            <div v-if="isSearch">
                <CommunitySearchList :list="searchList" @search="onSearch" @close="onCloseSearch" />
            </div>
            <div v-else v-loading="loading">
                <!-- 置顶文章 -->
                <TopicTop v-if="topTopicData" :data="topTopicData" />
                <!-- 移动端兼容置顶文章 -->
                <div v-if="topTopicData" class="m-topic-list m-topic-hot__mini">
                    <TopicItem :data="topTopicData" />
                </div>

                <div class="m-topic-list" v-if="list.length">
                    <waterfall
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
                    </waterfall>
                </div>
            </div>
            <!-- 下一页 -->
            <el-button
                class="m-topic-pages"
                :style="{
                    fontSize: hasNextPage ? '14px' : '12px',
                }"
                :type="hasNextPage ? 'primary' : 'text'"
                @click="appendPage"
                :loading="loading"
                :disabled="!hasNextPage"
                :icon="hasNextPage ? 'el-icon-arrow-down' : ''"
                >{{ hasNextPage ? "加载更多" : "没有更多了" }}</el-button
            >
            <!-- 分页 -->
            <el-pagination
                class="m-community-pages"
                background
                layout="total, prev, pager, next, jumper"
                :hide-on-single-page="true"
                :page-size="per"
                :total="total"
                :current-page.sync="page"
                @current-change="changePage"
            ></el-pagination>
        </div>
    </CommunityLayout>
</template>

<script>
import CommunityLayout from "@/layouts/CommunityLayout.vue";
import CommunityHeader from "@/components/community/header.vue";
import CommunitySearch from "@/components/community/search.vue";
import waterfall from "vue-waterfall-rapid";
import TopicItem from "@/components/community/topic_item.vue";
import { getTopicList, globalSearch } from "@/service/community";
import TopicTop from "@/components/community/topic_top.vue";
import { getTopicBucket } from "@/service/community";
import { formatCategoryList } from "@/utils/community";
import CommunitySearchList from "@/components/community/community_search_list.vue";
export default {
    components: {
        CommunityLayout,
        CommunityHeader,
        CommunitySearch,
        CommunitySearchList,
        waterfall,
        TopicItem,
        TopicTop,
    },
    data() {
        return {
            searchParams: {
                q: "",
                filter_name: "community_discussion_topic,community_discussion_topic_reply",
            },
            loading: false,
            col: 1,
            page: 1, //当前页数
            total: 0, //总条目数
            per: 10, //每页条目
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
            console.log(this.page, this.per, this.total);
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
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
        this.loadData();
        this.getCategoryList();
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.handleResize);
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
        onCloseSearch() {
            this.isSearch = false;
            this.page = 1;
            this.total = 0;
            this.per = 10;
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
        onSearch(params) {
            console.log(params);
            this.isSearch = true;

            // 初始化分页数据 s
            this.page = 1;
            this.total = 0;
            this.per = 10;
            this.pages = 0;
            // 初始化分页数据 e

            this.searchParams = {
                ...this.searchParams,
                ...params,
            };

            this.loadSearchData();
        },
        onCategoryChange: function (category) {
            this.category = category;
            if (this.$refs.searchInput) {
                this.$refs.searchInput.closeSearch();
            }
            this.loadData();
        },
        // 翻页加载
        changePage: function (i) {
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
        // 追加加载
        appendPage: function () {
            if (this.isSearch) {
                this.loadSearchData(true);
            } else {
                this.loadData(true);
            }
        },
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
                    }

                    this.total = res.data.data.page.total;
                    this.pages = res.data.data.page.pageTotal;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        loadSearchData(appendMode = false) {
            if (appendMode) {
                this.page += 1;
            }
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
                .finally(() => {});
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
