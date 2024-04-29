<template>
    <div>
        <div class="m-comment-wrapper">
            <div class="m-comment-wrapper__left">
                <CommentUser :userInfo="post?.user_info || post?.ext_user_info" />
            </div>
            <div class="m-comment-wrapper__right">
                <div class="m-comment-wrapper__right-box">
                    <div class="u-layer">{{ isMaster ? "楼主" : "X楼" }}</div>
                    <div class="u-content">
                        <Article :content="post?.content || ''" />
                    </div>
                    <div class="u-time">{{ post?.updated_at || post?.created_at }}</div>
                    <div class="u-toolbar">
                        <div></div>
                        <div>
                            <el-button type="text" size="small">黑洞</el-button>
                            <el-button type="text" size="small">删除</el-button>
                            <el-button type="text" size="small">举报</el-button>
                            <el-button type="text" size="small">拉黑</el-button>
                            <el-button type="primary" size="small" class="u-reply-btn">
                                <div class="u-btn" @click="onShowReply()">
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
                    <ReplyForReply
                        v-if="showReplyForReplyFrom"
                        username="芝士饭团"
                        :user-href="'1'"
                        :current-id="'1'"
                        @hideForm="showReplyForReplyFrom = false"
                        @doReply="doReply"
                    />
                </div>

                <div v-if="!isMaster" class="m-reply-list">
                    <CommentReplyItem />
                    <CommentReplyItem />
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
        };
    },
    methods: {
        onShowReply() {
            if (this.isMaster) {
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                this.showReplyForReplyFrom = true;
            }
        },
        doReply() {
            // (replyData.replyForUID = this.reply.userId),
            //     (replyData.replyForCommentId = this.reply.id),
            //     this.$emit("addReply", replyData);
            this.showReplyForReplyFrom = false;
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/community/comment_item.less";
</style>
