<template>
    <div>
        <div class="m-comment-wrapper">
            <div class="m-comment-wrapper__left">
                <CommentUser :uid="userInfo.id" />
            </div>
            <div class="m-comment-wrapper__right">
                <div class="m-comment-wrapper__right-box">
                    <div>
                        <div class="u-layer">{{ isMaster ? "楼主" : post.layer + "楼" }}</div>
                        <div class="u-content">
                            <Article v-if="isMaster" :content="post.content || ''" />
                            <div v-else v-html="renderContent" />
                        </div>
                    </div>
                    <div>
                        <div class="u-time">{{ post.updated_at || post.created_at }}</div>
                        <div class="u-toolbar">
                            <div></div>
                            <div>
                                <el-button v-if="allowBlackHole" type="text">黑洞</el-button>
                                <el-button v-if="allowDelete" type="text" @click="deleteReply()">删除</el-button>
                                <el-button v-if="allowReport" type="text" @click="onMiscfeedback">举报</el-button>
                                <el-button v-if="allowBlock" type="text" @click="addBlock()">拉黑</el-button>
                                <el-button type="primary" size="small" class="u-reply-btn" @click="onShowReply()">
                                    <div class="u-btn">
                                        <img src="@/assets/img/community/reply.svg" alt="" />
                                        <span>{{ isMaster ? "跟帖" : "回复" }}</span>
                                    </div>
                                </el-button>
                                <el-button
                                    :disabled="isLike"
                                    type="primary"
                                    size="small"
                                    class="u-praise-btn"
                                    @click="addLike"
                                >
                                    <div class="u-btn">
                                        <img src="@/assets/img/community/praise.svg" alt="" />
                                        <span>赞</span>
                                        <span>{{ likeCountRender }}</span>
                                    </div>
                                </el-button>
                            </div>
                        </div>
                    </div>
                    <ReplyForReply
                        v-if="showReplyForReplyFrom"
                        :username="userInfo.display_name"
                        :user-href="authorLink(userId)"
                        @hideForm="showReplyForReplyFrom = false"
                        @doReply="doReply"
                    />
                </div>
                <div v-if="!isMaster" class="m-comment-collapse">
                    <div v-if="isCollapse" @click="onCollapseChange">
                        <img width="14" src="@/assets/img/community/collapse_1.svg" alt="" />
                        <span>折叠评论</span>
                    </div>
                    <div v-else @click="onCollapseChange">
                        <img width="14" src="@/assets/img/community/collapse_2.svg" alt="" />
                        <span>展开评论</span>
                    </div>
                </div>
                <!-- 评论列表 -->
                <div v-if="!isMaster && commentsList.length" class="m-reply-list">
                    <CommentItem v-for="item in commentsList" :key="item.id" :post="item" />
                </div>

                <!-- 分页 -->
                <div v-if="isCollapse" class="m-pagination-box">
                    <el-pagination
                        background
                        layout="total, prev, pager, next"
                        :hide-on-single-page="true"
                        :page-size="per"
                        :total="total"
                        :current-page.sync="page"
                        @current-change="changePage"
                    ></el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CommentUser from "@/components/community/comment_user.vue";
import ReplyForReply from "./ReplyForReply.vue";
import CommentItem from "@/components/community/comment_item.vue";
import Article from "@jx3box/jx3box-editor/src/Article.vue";
import JX3_EMOTION from "@jx3box/jx3box-emotion";
import { authorLink } from "@jx3box/jx3box-common/js/utils";
import { replyReply, getCommentsList, addBlock, feedback, delReply } from "@/service/community";
import { escapeHtml } from "@/utils/community";
import User from "@jx3box/jx3box-common/js/user.js";
import { postStat } from "@jx3box/jx3box-common/js/stat";

export default {
    name: "ReplyItem",
    inject: ["getTopicData", "getReplyList"],
    props: ["isMaster", "post"],
    components: {
        CommentUser,
        ReplyForReply,
        CommentItem,
        Article,
    },
    provide() {
        return {
            getReplyData: () => this.post,
            getCommentsList: this.getList,
        };
    },
    data() {
        return {
            page: 1, //当前页数
            per: 5, //每页条目
            total: 0, //总条目数
            isCollapse: false,
            isLike: false,
            likeCount: 0,
            showReplyForReplyFrom: false,
            renderContent: "",
            commentsList: [],
        };
    },
    computed: {
        likeCountRender: function () {
            if (this.likeCount >= 100) {
                return "99+";
            } else if (this.likeCount != 0) {
                return this.likeCount;
            } else {
                return "";
            }
        },
        // 是否允许黑洞
        allowBlackHole: function () {
            // 登录 && 不是楼主
            return this.isLogin && !this.isMaster;
        },
        // 是否允许举报
        allowReport: function () {
            // 登陆 && 不是自己
            return this.isLogin && this.post.user_id != User.getInfo().uid;
        },
        // 是否允许删除
        allowDelete: function () {
            // 登录 && 不是楼主 && 是自己
            return this.isLogin && !this.isMaster && this.post.user_id == User.getInfo().uid;
        },
        // 是否允许拉黑
        allowBlock: function () {
            // 登录 && 不是楼主 && 不是自己
            return this.isLogin && !this.isMaster && this.post.user_id != User.getInfo().uid;
        },
        // 是否登录
        isLogin: function () {
            return User.isLogin();
        },
        userInfo: function () {
            if (this.post && this.post.user_info) {
                return this.post.user_info;
            }
            if (this.post && this.post.ext_user_info) {
                return this.post.ext_user_info;
            }
            return {};
        },
        userId: function () {
            if (this.post && this.post.user_info) {
                return this.post.user_info.id;
            }
            if (this.post && this.post.ext_user_info) {
                return this.post.ext_user_info.id;
            }
            return "";
        },
    },
    watch: {
        "post.content": {
            handler: function (val) {
                if (!this.isMaster) {
                    this.formatContent(val);
                }
            },
            immediate: true,
        },
        "post.comments": {
            handler: function () {
                if (this.post.comments) {
                    this.commentsList = this.post.comments;
                }
            },
            immediate: true,
        },
    },
    mounted() {},
    methods: {
        onCollapseChange() {
            if (this.isCollapse) {
                this.commentsList = this.post.comments;
            } else {
                this.page = 1;
                this.getList();
            }
            this.isCollapse = !this.isCollapse;
        },
        onMiscfeedback() {
            const topicData = this.getTopicData();
            const replyData = this.post;
            const layer = this.isMaster ? "楼主" : replyData.layer + "楼";
            const user_name = this.userInfo.display_name;
            this.$prompt(`请输入要举报的内容`, "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                input: "textarea",
                inputPlaceholder: "请输入要举报的内容",
                inputValidator: (value) => {
                    if (!value) {
                        return "内容不能为空!";
                    }
                },
            }).then(({ value }) => {
                const content = `魔盒论坛《${topicData.title}》${layer}的 ${user_name} ：${value}`;
                feedback({
                    // 平台
                    client: topicData.client,
                    // 举报内容
                    content,
                    // 是否公开
                    public: 0,
                    // 类型：举报
                    subtype: "3",
                    // 来源：官网
                    type: "1",
                }).then(() => {
                    this.$message.success("举报成功");
                });
            });
        },
        deleteReply: function () {
            this.$confirm("确认是否删除该评论？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            }).then(() => {
                // delReply(this.post.id).then(() => {
                //     this.getReplyList();
                // });
            });
        },
        authorLink,
        async formatContent(val) {
            const ins = new JX3_EMOTION(escapeHtml(val));
            this.renderContent = await ins._renderHTML();
        },
        onShowReply() {
            if (this.isMaster) {
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                this.showReplyForReplyFrom = !this.showReplyForReplyFrom;
            }
        },
        doReply({ content }) {
            const id = this.$route.params.id;
            const replyId = this.post.id;
            if (id && replyId && this.userId) {
                replyReply(id, replyId, {
                    content: content,
                    reply_for_user_id: this.userId,
                })
                    .then(() => {
                        this.getList();
                    })
                    .finally(() => {
                        this.showReplyForReplyFrom = false;
                    });
            } else {
                this.$message.error("回复失败：数据不正确");
            }
        },
        changePage() {
            this.getList();
        },
        getList() {
            if (this.isMaster) return;
            const id = this.$route.params.id;
            const replyId = this.post.id;
            if (id && replyId) {
                getCommentsList(id, replyId, {
                    index: this.page,
                    pageSize: this.per,
                }).then((res) => {
                    const list = res.data.data.list;
                    if (list) {
                        this.commentsList = list;
                        this.isCollapse = true;
                    }
                    this.total = res.data.data.page.total;
                });
            }
        },
        // 拉黑
        addBlock: function () {
            this.$confirm("确定要拉黑此人？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            })
                .then(() => {
                    addBlock(this.post.user_id)
                        .then(() => {
                            this.$message.success("拉黑成功");
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
                .catch((_) => {});
        },
        // 点赞
        addLike: function () {
            if (this.isLike) return;
            this.likeCount++;
            if (!this.isLike) {
                postStat("community", this.post.id, "likes");
            }
            this.isLike = true;
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/community/comment_item.less";
</style>
