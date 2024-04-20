<template>
    <CommunityLayout>
        <Header />
        <div class="m-topic-hot m-topic-box">
            <div class="m-topic-top">
                <div class="m-topic-top__time">
                    <img class="u-timeload-icon" src="@/assets/img/community/timeload.svg" alt="" srcset="" />
                    <span>{{ toptopic.updated_at }}</span>
                </div>
                <div :class="`m-topic-top__category ${toptopic.category === '文章' ? 'u-article' : 'u-taolun'}`">
                    <img v-if="toptopic.category === '文章'" src="@/assets/img/community/文章.svg" alt="" srcset="" />
                    <img v-else src="@/assets/img/community/讨论.svg" alt="" srcset="" />
                    <div>{{ toptopic.category }}</div>
                </div>
            </div>
            <div class="m-topic-box__content">
                <div class="m-topic-hot__left">
                    <img class="u-cover" :src="toptopic.cover" alt="" />
                    <div class="m-topic-imgs">
                        <img
                            class="m-topic-imgs__item"
                            v-for="(item, index) in toptopic.imgs"
                            :key="index"
                            :src="item"
                            alt=""
                            srcset=""
                        />
                    </div>
                </div>
                <div class="m-topic-hot__right">
                    <h2 class="u-title">
                        <a href="/community/12">
                            {{ toptopic.title }}
                        </a>
                    </h2>
                    <div class="m-topic-tag">
                        <span v-for="(item, index) in toptopic.tag" :key="index">
                            {{ item }}
                        </span>
                    </div>
                    <div class="m-topic-collection">
                        <div>
                            <span class="u-label">小册</span>
                            <span class="u-value">剑网3攻略合集</span>
                        </div>
                    </div>
                    <div class="m-topic-userinfo">
                        <img class="m-topic-userinfo__avatar" :src="toptopic.user_info.avatar" alt="" srcset="" />
                        <span class="m-topic-userinfo__name">{{ toptopic.user_info.display_name }}</span>
                    </div>
                    <div class="m-topic-content">
                        {{ toptopic.content }}
                    </div>
                </div>
            </div>
        </div>
        <div class="m-topic-list m-topic-hot__mini">
            <TopicItem :data="toptopic" />
        </div>

        <div class="m-topic-list">
            <TopicItem v-for="(item, index) in topicData.data?.list" :key="index" :data="item" />
        </div>
        <!-- 下一页 -->
        <el-button
            class="m-topic-pages"
            v-show="hasNextPage"
            type="primary"
            @click="appendPage"
            :loading="loading"
            icon="el-icon-arrow-down"
            >加载更多</el-button
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
    </CommunityLayout>
</template>

<script>
import CommunityLayout from "@/layouts/CommunityLayout.vue";
import Header from "@/components/community/header.vue";
import TopicItem from "@/components/community/topic_item.vue";
import topicData from "@/assets/data/topic_list.json";

export default {
    components: {
        CommunityLayout,
        Header,
        TopicItem,
    },
    data() {
        return {
            topicData: topicData,
            loading: false,
            page: 1, //当前页数
            per: 10, //每页条目
            total: 100, //总条目数
            pages: 10, //总页数
            number_queries: ["per", "page"],
            toptopic: {
                cover: "https://img.js.design/assets/img/66169bbdbb057ffd43b0f3d5.jpg#25bbb55f613aabc74e724d760a201df7",
                title: "内涵青年最后的吐槽街区：知乎APP",
                content:
                    "一、分享时机，在不同的时机分析用户是否有分享的意愿，提供给他们合适的分享内容，能让分享的效果更好。下面我们会从不同维度来分析一下APP的社交分享功能设计，看看这里面有哪些值得探讨之处。二、产品特性尤其是刚上线的产品，很难通过产品的内部体系来实现快速的用户增...分享时机，在不同的时机分析用户是否有分享的意愿，提供给他们合适的分享内容，能让分享的效果更好。下面我们会从不同维度来分析一下APP的社交分享功能设计，看看这里面有哪些值得探讨之处。尤其是刚上线的产品，很难通过产品的内部体系来实现快速的用户增...分享时机，在不同的时机分析用户是否有分享的意愿，提供给他们合适的分享内容，能让分享的效果更好。下面我们会从不同维度来分析一下APP的社交分享功能设计，看看这里面有哪些值得探讨之处。三、产品联系尤其是刚上线的产品，很难通过产品的内部体系来实现快速的用户增...分享时机，在不同的时机分析用户是否有分享的意愿，提供给他们合适的分享内容，能让分享的效果更好。下面我们会从不同维度来分析一下APP的社交分享功能设计，看看这里面有哪些值得探讨之处。尤其是刚上线的产品，很难通过产品的内部体系来实现快速的用户增...",
                category: "文章",
                tag: ["萌新指南", "进阶玩法", "编辑推荐"],
                updated_at: "刚刚更新",
                user_info: {
                    avatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/XVv97dQRkCiaC1R6nMP6zSbxuAgrFVegAj7LmEY7wtm5UjrdyLAW1UDZtXWGcTnPaYUoMl0CLITPrBYko4yEbDO0N1xSrQtjcfBkoDnianRqI/132?x-oss-process=style/avatar_s",
                    display_name: "芝士饭团",
                },
                imgs: [
                    "https://img.js.design/assets/smartFill/img277164da731af0.png",
                    "https://img.js.design/assets/smartFill/img268164da72e058.jpeg",
                    "https://img.js.design/assets/smartFill/img263164da72e058.jpeg",
                    "https://img.js.design/assets/smartFill/img263164da72e058.jpeg",
                    "https://img.js.design/assets/smartFill/img263164da72e058.jpeg",
                    "https://img.js.design/assets/smartFill/img263164da72e058.jpeg",
                ],
            },
        };
    },
    computed: {
        // 是否显示加载更多
        hasNextPage: function () {
            return true;
            // return this.pages > 1 && this.page < this.total;
        },
    },
    mounted() {
        this.getList();
    },
    methods: {
        changePage() {},
        appendPage: function () {
            // this.loadData(true);
        },
        onCreateTopic() {
            createTopic({
                category: "string",
                client: "std",
                content: "string",
                sub_category: "string",
                sub_title: "string",
                tags: ["string"],
                title: "string",
            }).then((res) => {
                console.log(res);
            });
        },

        getList() {},
    },
};
</script>
<style lang="less">
@import "~@/assets/css/community/community.less";
</style>
