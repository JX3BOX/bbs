<template>
    <div>
        <div class="m-comment-wrapper">
            <div class="m-comment-wrapper__left">
                <CommentUser />
            </div>
            <div class="m-comment-wrapper__right">
                <div class="m-comment-wrapper__right-box">
                    <div class="u-layer">X楼</div>
                    <div class="u-content">
                        所以监听用户的截图操作，提示用户进行分享，既缩短了以前分享截图的操作路径，避免了在之前长路径中的行为流失（比如截图完成后忘记分享或觉得麻烦放弃分享等等），也让用户觉得更加贴心。现在很多APP在用户截图时会自动提示用户是否要进行分享。这个时机确实抓的很棒，一般来说，用户截图大多数时候都是为了分享给他人，少部分是为了留底备份。作为用户和产品之间的桥梁，社交分享在产品的发展过程中扮演
                    </div>
                    <div class="u-time">2024-01-02 20:00:00</div>
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

export default {
    props: ["isMaster"],
    components: {
        CommentUser,
        ReplyForReply,
        CommentReplyItem,
    },
    data() {
        return {
            showReplyForReplyFrom: false,
        };
    },
    methods: {
        onShowReply() {
            if (this.isMaster) {
                var rootElement = document.documentElement;
                rootElement.scrollTop = rootElement.scrollHeight - rootElement.clientHeight;
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
