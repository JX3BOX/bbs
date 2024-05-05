<template>
    <div class="m-comment-wrapper">
        <div class="m-comment-wrapper__right">
            <div class="m-comment-wrapper__right-box">
                <div class="m-reply-user">
                    <img class="u-avatar" :src="userInfo.avatar" />
                    <div>
                        <a class="u-name" :href="authorLink(userInfo.id)">{{ userInfo.display_name }}</a>
                        <p class="u-reply-user">
                            回复 {{ replyUserInfo.display_name }}：
                            <!-- <a :href="authorLink(replyUserInfo.id)">{{ replyUserInfo.display_name }}</a> ： -->
                        </p>
                        <p class="u-content" v-html="renderContent"></p>
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
                                <span class="u-time">{{ data.updated_at }}</span>
                            </div>
                        </div>
                        <span class="u-time u-mobile-time">{{ data.updated_at }}</span>
                        <ReplyForReply
                            v-if="showReplyForReplyFrom"
                            :username="userInfo.display_name"
                            :user-href="authorLink(userInfo.id)"
                            @hideForm="showReplyForReplyFrom = false"
                            @doReply="doReply"
                        />
                    </div>
                </div>
            </div>
            <CommentReplyItem v-for="item in commentsList" :key="item.id" :data="item" />
        </div>
    </div>
</template>

<script>
import ReplyForReply from "./ReplyForReply.vue";
import { authorLink } from "@jx3box/jx3box-common/js/utils";
import JX3_EMOTION from "@jx3box/jx3box-emotion";
import { replyReply, getCommentsList } from "@/service/community";
import { escapeHtml } from "@/utils/common";
export default {
    name: "CommentReplyItem",
    props: ["data"],
    components: {
        ReplyForReply,
    },
    data() {
        return {
            renderContent: "",
            showReplyForReplyFrom: false,
            commentsList: [],
        };
    },
    watch: {
        content: {
            handler: function (val) {
                this.formatContent(val);
            },
            immediate: true,
        },
    },
    computed: {
        userInfo: function () {
            return this.data.user_info;
        },
        replyUserInfo: function () {
            return this.data.reply_for_user_info;
        },
        comments: function () {
            return this.data.comments;
        },
        content: function () {
            return this.data.content;
        },
        id: function () {
            return this.data.id;
        },
    },
    mounted() {
        // this.getList();
    },
    methods: {
        async formatContent(val) {
            const ins = new JX3_EMOTION(escapeHtml(val));
            this.renderContent = await ins._renderHTML();
        },
        authorLink,
        onShowReply() {
            this.showReplyForReplyFrom = true;
        },
        doReply({ content }) {
            const id = this.$route.params.id;
            const replyId = this.id;
            const userId = this.userInfo.id;
            if (id && replyId && userId) {
                replyReply(id, replyId, {
                    content: content,
                    reply_for_user_id: userId,
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
            this.showReplyForReplyFrom = false;
        },
        getList() {
            if (this.isMaster) return;
            const id = this.$route.params.id;
            const replyId = this.id;

            if (id && replyId) {
                getCommentsList(id, replyId)
                    .then((res) => {
                        const list = res.data.data.list;
                        if (list) {
                            console.log(list);
                            this.commentsList = list;
                        }
                    })
                    .catch((err) => {
                        console.error(replyId);
                    });
            }
        },
    },
};
</script>

<style lang="less"></style>
