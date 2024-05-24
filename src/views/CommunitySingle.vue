<template>
    <CommunitySingleLayout :post="post">
        <div class="m-community-single" v-loading="loading">
            <!-- 头部 -->
            <div class="m-community-header">
                <PostHeader :post="postHeader" :stat="stat">
                    <template v-slot:title_before>
                        <div class="m-topic-category-box">
                            <div
                                :class="`m-topic-category`"
                                :style="`background-color: ${styles.hoverColor};color:${styles.color};`"
                            >
                                <img
                                    v-svg-inline
                                    class="u-icon"
                                    :src="require(`@/assets/img/community/category/${styles.icon}.svg`)"
                                />
                                <div>{{ post.category }}</div>
                            </div>
                        </div>
                    </template>
                </PostHeader>
                <el-divider content-position="left">JX3BOX</el-divider>
            </div>

            <div class="m-list-box">
                <!--  楼主 -->
                <div class="m-master-box">
                    <ReplyItem v-if="this.page === 1" :isMaster="true" :post="post" />
                </div>

                <!-- 帖子回复 -->
                <div class="m-reply-box">
                    <ReplyItem v-for="(item, i) in replyList" :key="i" :post="item" />
                </div>
            </div>
            <!-- 帖子回复e -->

            <!-- 分页 -->
            <div class="m-community-footer">
                <div class="m-pagination-box">
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
                <el-divider content-position="left">回帖</el-divider>
                <div class="u-editor">
                    <CommentEditor @submit="onReplyTopic" />
                </div>
            </div>
        </div>
    </CommunitySingleLayout>
</template>

<script>
import ReplyItem from "@/components/community/reply_item.vue";

import CommunitySingleLayout from "@/layouts/CommunitySingleLayout.vue";
import PostHeader from "@/components/community/post_header.vue";
import CommentEditor from "@/components/community/comment_editor.vue";
import { getTopicDetails, getTopicReplyList, replyTopic } from "@/service/community";
import { getTopicBucket } from "@/service/community";
import { formatCategoryList } from "@/utils/community";
import { getStat, postStat } from "@jx3box/jx3box-common/js/stat";
import { getLikes } from "@/service/next";
import User from "@jx3box/jx3box-common/js/user";

const appKey = "community_topic";

export default {
    components: {
        CommentEditor,
        CommunitySingleLayout,
        PostHeader,
        ReplyItem,
    },
    provide() {
        return {
            getTopicData: () => this.post,
            getReplyList: this.getReplyList,
            setOnlyAuthor: this.setOnlyAuthor,
            onReplyTopic: this.onReplyTopic,
            onSearch: this.onSearch,
        };
    },
    data() {
        return {
            layer: 0,
            stat: "",
            page: 1, //当前页数
            per: 10, //每页条目
            total: 0, //总条目数
            pageTotal: 0, //总页数
            post: {},
            replyList: [],
            categoryList: [],
            loading: false,
            onlyAuthor: false,
            number_queries: ["per", "page"],
        };
    },
    computed: {
        styles: function () {
            let item = this.categoryList.find((item) => item.value === this.post.category);
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
        id: function () {
            return this.$route.params.id;
        },
        postHeader: function () {
            if (!this.post.id) return;
            return {
                ID: this.post.id,
                post_type: "community",
                post_title: this.post.title,
                author_info: {
                    display_name: this.post.ext_user_info.display_name || "",
                    user_avatar: this.post.ext_user_info.avatar,
                    user_avatar_frame: this.post.ext_user_info.user_avatar_frame,
                    deleted: 0,
                },
                post_date: this.post.created_at,
                post_modified: this.post.updated_at,
                star: 10,
            };
        },
    },
    created() {
        this.getJumpLayer();
    },
    mounted() {
        if (!this.id) return this.$message.error("文章id不存在");
        this.getCategoryList();
        this.getDetails();
        this.getReplyList();
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
        /**
         * 获取url楼诚参数
         */
        getJumpLayer: function () {
            const hash = window.location.hash;
            const layer = hash.substring(1).split("?")[0];
            if (layer) {
                this.layer = layer;
                this.page = Math.ceil((this.layer - 1) / this.per);
            }
        },
        /**
         * 跳转到指定楼层
         * @param layer 楼层
         */
        jumpLayer(layer) {
            const _layer = layer || this.layer;
            this.$nextTick(() => {
                const el = document.getElementById("layer-" + _layer);
                if (el) {
                    el.scrollIntoView();
                    window.scrollBy(0, -120); // 额外滚动
                }
            });
        },
        onSearch() {
            this.page = 1;
            this.$nextTick(() => {
                this.getReplyList();
            });
        },
        /**
         * 传入 true ｜ false  只看楼主、取消只看楼主
         * @param val bool
         */
        setOnlyAuthor(v) {
            this.page = 1;
            this.onlyAuthor = v;
            this.getReplyList();
        },

        buildQuery: function (appendMode) {
            let _query = {
                index: this.page,
                pageSize: this.per,
                order_created_at: 0,
            };
            if (this.onlyAuthor && (this.onlyAuthor == true || this.onlyAuthor == "true")) {
                _query.user_id = this.post.user_id;
            }
            this.replaceRoute({ page: this.page, onlyAuthor: this.onlyAuthor });

            return _query;
        },
        getTopicData: function () {
            return this.post;
        },
        getDetails: function () {
            getTopicDetails(this.id).then((res) => {
                this.post = res.data.data;

                getStat(appKey, this.id).then((res) => {
                    this.stat = res.data;
                    this.$set(this.post, "likes", this.stat.likes || 0);
                });
                postStat(appKey, this.id);
            });
        },
        getReplyList: function () {
            this.loading = true;
            const params = this.buildQuery();
            return getTopicReplyList(this.id, params)
                .then(async (res) => {
                    var list = res.data.data.list;
                    const page = res.data.data.page;
                    if (list == null) {
                        this.replyList = [];
                    } else {
                        // 把点赞数量请求过来填充进去
                        list = await this.getLikes(list);
                        // 补充楼层字段
                        this.replyList = list.map((item, i) => {
                            return {
                                ...item,
                                layer: (page.index - 1) * page.pageSize + i + 2,
                            };
                        });
                        // 如果有楼层参数 跳转到指定楼层
                        if (this.layer) {
                            this.jumpLayer();
                        }
                    }
                    this.total = page.total;
                    this.pageTotal = page.pageTotal;
                    this.$nextTick(() => {
                        this.page = page.index;
                    });
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        async getLikes(replyList) {
            const ids = replyList.map((item) => `community_reply-${item.id}`);
            let id = ids.join(",");
            let list = [];
            await getLikes({
                post_type: "community_reply",
                post_action: "likes",
                id,
            })
                .then((res) => {
                    list = replyList.map((item) => {
                        item.likes = res.data.data[`community_reply-${item.id}`]?.likes || 0;
                        return item;
                    });
                })
                .catch(() => {
                    list = replyList;
                });
            return list;
        },
        /** 回帖 */
        onReplyTopic({ attachmentList, content }) {
            if (!this.id) return this.$message.error("文章id不存在");
            replyTopic(this.id, {
                client: location.href.includes("origin") ? "origin" : "std",
                content: content,
                extra_images: attachmentList,
            }).then((res) => {
                this.onReplyTopicSuccess(res.data.data);
            });
        },
        /**
         * 回复成功后的操作
         * 如果当前的回复不需要翻页，可以不用重新渲染列表
         * 如果当前的回复条数已经超过一页，可以直接跳转到最后一页
         */
        onReplyTopicSuccess(data) {
            if (this.replyList.length + 1 <= this.per) {
                const userInfo = User.getInfo();
                const len = this.replyList.length;
                const layer = this.replyList[len - 1].layer + 1;
                this.replyList.push({
                    ...data,
                    layer,
                    user_info: {
                        id: Number(userInfo.uid),
                        display_name: userInfo.name,
                        avatar: userInfo.avatar,
                    },
                });
                this.$nextTick(() => {
                    window.scrollTo(0, document.body.scrollHeight);
                });
            } else {
                this.total = this.total + 1;
                this.page = Math.ceil((this.total + 1) / this.per);
                this.$nextTick(() => {
                    this.getReplyList().finally(() => {
                        window.scrollTo(0, document.body.scrollHeight);
                    });
                });
            }
        },
        changePage(page) {
            this.page = page;
            this.getReplyList();
        },
        getCategoryList() {
            getTopicBucket({ type: "community", search: this.post.category }).then((res) => {
                this.categoryList = formatCategoryList(res.data.data);
            });
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
    },
};
</script>

<style lang="less">
@import "~@/assets/css/community/community-single.less";
</style>
