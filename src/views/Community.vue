<template>
    <CommunityLayout>
        <div v-loading="loading">
            <Header :on-category-change="onCategoryChange" :getCategoryStyle="getCategoryStyle" />
            <!-- 置顶文章 -->
            <TopicTop v-if="toptopicData" :data="toptopicData" :getCategoryStyle="getCategoryStyle" />
            <div v-if="toptopicData" class="m-topic-list m-topic-hot__mini">
                <TopicItem :data="toptopicData" :getCategoryStyle="getCategoryStyle" />
            </div>

            <div class="m-topic-list" v-if="topicData.data">
                <TopicItem
                    v-for="(item, index) in list"
                    :key="index"
                    :data="item"
                    :getCategoryStyle="getCategoryStyle"
                />
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
    </CommunityLayout>
</template>

<script>
import CommunityLayout from "@/layouts/CommunityLayout.vue";
import Header from "@/components/community/header.vue";
import TopicItem from "@/components/community/topic_item.vue";
import topicData from "@/assets/data/topic_list.json";
import { getTopicList } from "@/service/community";
import palugif from "@/assets/img/community/category/帕鲁.gif";
import TopicTop from "@/components/community/topic_top.vue";
export default {
    components: {
        CommunityLayout,
        Header,
        TopicItem,
        TopicTop,
    },
    data() {
        return {
            topicData: topicData,
            loading: false,
            page: 1, //当前页数
            per: 10, //每页条目
            total: 0, //总条目数
            pages: 10, //总页数
            number_queries: ["per", "page"],
            category: undefined,
            list: [],
            toptopicData: null,
        };
    },
    computed: {
        toptopic: function () {
            if (this.list.length && this.page === 1) {
                return;
            } else if (this.toptopic) {
                return this.toptopic;
            } else {
                return null;
            }
        },

        // 是否显示加载更多
        hasNextPage: function () {
            return this.pages >= 1 && this.per * this.page <= this.total;
        },
    },

    mounted() {
        this.loadData();
    },
    methods: {
        getCategoryStyle(name) {
            switch (name) {
                case "找情缘":
                case "拜师":
                case "求助":
                case "收徒":
                    return {
                        icon: `<img svg-inline src="@/assets/img/community/category/求助.svg">`,
                        hoverColor: "rgba(255, 240, 244, 1)",
                        color: "rgba(252, 96, 145, 1)",
                    };
                case "招人":
                case "找队友":
                    return {
                        icon: `<img svg-inline src="@/assets/img/community/category/招募.svg">`,
                        hoverColor: "rgba(255, 247, 230, 1)",
                        color: "rgba(247, 171, 72, 1)",
                    };
                case "同人":
                    return {
                        icon: `<img svg-inline src="@/assets/img/community/category/创作.svg">`,
                        hoverColor: "rgba(249, 240, 255, 1)",
                        color: "rgba(166, 105, 245, 1)",
                    };
                case "家园":
                case "侠客":
                case "江湖":
                case "剧情":
                    return {
                        icon: `<img svg-inline src="@/assets/img/community/category/内容.svg">`,
                        hoverColor: "rgba(237, 247, 247, 1)",
                        color: "rgba(72, 184, 176, 1)",
                    };
                case "帕鲁":
                    return {
                        icon: `<img svg-inline src="@/assets/img/community/category/帕鲁.svg">`,
                        hoverColor: "rgba(255, 247, 230, 1)",
                        color: "rgba(247, 171, 72, 1)",
                        markGif: palugif,
                    };
                case "警示":
                    return {
                        icon: `<img svg-inline src="@/assets/img/community/category/警示.svg">`,
                        hoverColor: "rgba(242, 229, 218, 1)",
                        color: "rgba(56, 56, 56, 1)",
                        activeColor: "rgba(255, 191, 0, 1)",
                        mark: `<img svg-inline src="@/assets/img/community/category/警示.svg">`,
                    };
                case "讨论":
                case "剧情":
                    return {
                        icon: `<img svg-inline src="@/assets/img/community/category/社交.svg">`,
                        hoverColor: "rgba(235, 244, 255, 1)",
                        color: "rgba(76, 151, 237, 1)",
                    };
                default:
                    return {
                        icon: `<img svg-inline src="@/assets/img/community/category/全部.svg">`,
                        hoverColor: "rgba(235, 244, 255, 1)",
                        color: "rgba(64, 128, 255, 1)",
                    };
            }
        },
        onCategoryChange: function (v) {
            this.category = v;
            this.loadData();
        },
        // 翻页加载
        changePage: function (i) {
            this.loadData();
            this.replaceRoute({ page: i });
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
                            this.toptopicData = list.shift();
                        } else {
                            this.toptopicData = null;
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
