<template>
    <div class="m-comment-wrapper">
        <div class="m-comment-wrapper__right">
            <div class="m-comment-wrapper__right-box">
                <div class="m-reply-user">
                    <img
                        class="u-avatar"
                        src="https://thirdwx.qlogo.cn/mmopen/vi_32/XVv97dQRkCiaC1R6nMP6zSbxuAgrFVegAj7LmEY7wtm5UjrdyLAW1UDZtXWGcTnPaYUoMl0CLITPrBYko4yEbDO0N1xSrQtjcfBkoDnianRqI/132?x-oss-process=image/auto-orient,1/resize,m_fill,w_360,h_360/quality,Q_100"
                        alt=""
                        srcset=""
                    />
                    <div>
                        <p class="u-name">芝士饭团</p>
                        <p class="u-content">所以监听用户的截图操作，提示用户进行分享.</p>
                        <div class="u-toolbar">
                            <div>
                                <el-button type="text" size="small">赞（14）</el-button>
                                <el-button type="text" size="small" @click="onShowReply">回复</el-button>
                                <el-button type="text" size="small">拉黑</el-button>
                                <el-button type="text" size="small">举报</el-button>
                            </div>
                            <div>
                                <el-button type="text" size="small">删除</el-button>
                                <el-button type="text" size="small">黑洞</el-button>
                                <span class="u-time">2024-01-02 20:00:00</span>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ReplyForReply from "./ReplyForReply.vue";
export default {
    components: {
        ReplyForReply,
    },
    data() {
        return {
            showReplyForReplyFrom: false,
        };
    },
    methods: {
        onShowReply() {
            this.showReplyForReplyFrom = true;
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

<style lang="less"></style>
