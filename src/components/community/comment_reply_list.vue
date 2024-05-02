<template>
    <div>
        <div class="m-comment-wrapper">
            <div class="m-comment-wrapper__left">
                <CommentUser :userInfo="userInfo" />
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
                                <el-button type="text" size="small">黑洞</el-button>
                                <el-button type="text" size="small">删除</el-button>
                                <el-button type="text" size="small">举报</el-button>
                                <el-button type="text" size="small">拉黑</el-button>
                                <el-button type="primary" size="small" class="u-reply-btn" @click="onShowReply()">
                                    <div class="u-btn">
                                        <img src="@/assets/img/community/reply.svg" alt="" />
                                        <span>{{ isMaster ? "跟帖" : "回复" }}</span>
                                    </div>
                                </el-button>
                                <el-button type="primary" size="small" class="u-praise-btn">
                                    <div class="u-btn">
                                        <img src="@/assets/img/community/praise.svg" alt="" />
                                        <span>赞</span>
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
                    <CommentReplyItem v-for="item in commentsList" :key="item.id" :data="item" />
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
import { replyReply, getCommentsList } from "@/service/community";
import { escapeHtml } from "@/utils/common";
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
            showReplyForReplyFrom: false,
            renderContent: "",
            commentsList: [],
        };
    },
    computed: {
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
    },
};
</script>

<style lang="less">
@import "~@/assets/css/community/comment_item.less";
</style>
