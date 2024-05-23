<template>
    <CommunityLayout>
        <div v-loading="loading">
            <CommunityHeader :categoryList="categoryList" />
            <CommunitySearch @search="onSearch" />
            <div class="m-community-content">
                <!-- 置顶文章 -->
                <TopicTop v-if="topTopicData" :data="topTopicData" />
                <!-- 移动端兼容置顶文章 -->
                <div v-if="topTopicData" class="m-topic-list m-topic-hot__mini">
                    <TopicItem :data="topTopicData" />
                </div>

                <div class="m-topic-list" v-if="list.length">
                    <TopicItem v-for="(item, index) in list" :key="index" :data="item" />
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
                    background
                    layout="total, prev, pager, next, jumper"
                    :hide-on-single-page="true"
                    :page-size="per"
                    :total="total"
                    :current-page.sync="page"
                    @current-change="changePage"
                ></el-pagination>
            </div>
        </div>
    </CommunityLayout>
</template>

<script>
import CommunityLayout from "@/layouts/CommunityLayout.vue";
import CommunityHeader from "@/components/community/header.vue";
import CommunitySearch from "@/components/community/search.vue";
import TopicItem from "@/components/community/topic_item.vue";
import { getTopicList, globalSearch } from "@/service/community";
import TopicTop from "@/components/community/topic_top.vue";
import { getTopicBucket } from "@/service/community";
import { formatCategoryList } from "@/utils/community";
export default {
    components: {
        CommunityLayout,
        CommunityHeader,
        CommunitySearch,
        TopicItem,
        TopicTop,
    },
    data() {
        return {
            loading: false,
            page: 1, //当前页数
            per: 10, //每页条目
            total: 0, //总条目数
            pages: 10, //总页数
            number_queries: ["per", "page"],
            category: undefined,
            list: [],
            topTopicData: null,
            categoryList: [],
        };
    },
    computed: {
        // 是否显示加载更多
        hasNextPage: function () {
            return this.pages >= 1 && this.per * this.page <= this.total;
        },
    },
    provide() {
        return {
            onCategoryChange: this.onCategoryChange,
            getCategoryStyle: this.getCategoryStyle,
        };
    },
    mounted() {
        this.loadData();
        this.getCategoryList();
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
    },
    methods: {
        onSearch(v) {
            globalSearch({
                q: v,
                filter_name: "community_discussion_topic,community_discussion_topic_reply",
            }).then((res) => {
                console.log(res);
            });
        },
        getCategoryList() {
            getTopicBucket({ type: "community" }).then((res) => {
                this.categoryList = formatCategoryList(res.data.data);
            });
        },
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
        onCategoryChange: function (category) {
            this.category = category;
            this.loadData();
        },
        // 翻页加载
        changePage: function (i) {
            this.loadData();
        },
        // 路由绑定
        replaceRoute: function (extend) {
            return this.$router
                .push({ name: this.$route.name, query: Object.assign({}, this.$route.query, extend) })
                .then(() => {
                    window.scrollTo(0, 0);
                })
                .catch((err) => {});
        },
        // 追加加载
        appendPage: function () {
            this.loadData(true);
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
        loadData(appendMode = false) {
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
    },
};
</script>
<style lang="less">
@import "~@/assets/css/community/community.less";
</style>
