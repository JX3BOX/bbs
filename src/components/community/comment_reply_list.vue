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
                                <el-button v-if="allowReport" type="text">举报</el-button>
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
                                        <span>{{ linkCountRender }}</span>
                                    </div>
                                </el-button>
                            </div>
                        </div>
                    </div>
                    <ReplyForReply
                        v-if="showReplyForReplyFrom"
                        username="芝士饭团"
                        :user-href="authorLink(userId)"
                        @hideForm="showReplyForReplyFrom = false"
                        @doReply="doReply"
                    />
                </div>

                <div v-if="!isMaster && commentsList.length" class="m-reply-list">
                    <!-- 回帖的回复-->
                    <CommentReplyItem v-for="item in commentsList" :key="item.id" :post="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CommentUser from "@/components/community/comment_user.vue";
import ReplyForReply from "./ReplyForReply.vue";
import CommentReplyItem from "@/components/community/comment_reply_item.vue";
import Article from "@jx3box/jx3box-editor/src/Article.vue";
import JX3_EMOTION from "@jx3box/jx3box-emotion";
import { authorLink } from "@jx3box/jx3box-common/js/utils";
import { replyReply, getCommentsList, delReply, addBlock, feedback } from "@/service/community";
import { escapeHtml } from "@/utils/community";
import User from "@jx3box/jx3box-common/js/user.js";
import { postStat } from "@jx3box/jx3box-common/js/stat";

export default {
    props: ["isMaster", "post"],
    components: {
        CommentUser,
        ReplyForReply,
        CommentReplyItem,
        Article,
    },
    data() {
        return {
            isLike: false,
            linkCount: 0,
            showReplyForReplyFrom: false,
            renderContent: "",
            commentsList: [],
        };
    },
    computed: {
        linkCountRender: function () {
            if (this.linkCount >= 100) {
                return "99+";
            } else if (this.linkCount != 0) {
                return this.linkCount;
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
    mounted() {
        this.getList();
    },
    methods: {
        deleteReply: function () {
            this.$confirm("确认是否删除该评论？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            }).then(() => {
                // delReply(this.post.id).then(() => {
                //     this.$message.success("删除成功");
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
        getList() {
            if (this.isMaster) return;
            const id = this.$route.params.id;
            const replyId = this.post.id;
            if (id && replyId) {
                getCommentsList(id, replyId).then((res) => {
                    const list = res.data.data.list;
                    if (list) {
                        this.commentsList = list;
                    }
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
            this.linkCount++;
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
