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
                                <el-button type="text" size="small" @click="addLike" class="">
                                    <div class="u-btn-content">
                                        <img
                                            width="12"
                                            height="14"
                                            src="@/assets/img/community/heart.svg"
                                            alt=""
                                            srcset=""
                                        />
                                        赞
                                        <span class="u-count" v-if="!!likeCountRender"> ({{ likeCountRender }})</span>
                                    </div>
                                </el-button>
                                <el-button type="text" size="small" @click="onShowReply">
                                    <i class="el-icon-chat-round"></i>
                                    <span>回复</span>
                                </el-button>
                            </div>
                            <div>
                                <DeleteButton :post="post" type="comment" />
                                <el-button type="text" size="small">
                                    <i class="el-icon-attract"></i>
                                    黑洞
                                </el-button>
                                <AddBlockButton :post="post" />
                                <ComplaintButton :post="post" />
                                <span class="u-time">{{ post.updated_at }}</span>
                            </div>
                        </div>
                        <span class="u-time u-mobile-time">{{ post.updated_at }}</span>
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
            <!-- <CommentItem v-for="item in commentsList" :key="item.id" :data="item" /> -->
        </div>
    </div>
</template>

<script>
import ReplyForReply from "./ReplyForReply.vue";
import { authorLink } from "@jx3box/jx3box-common/js/utils";
import JX3_EMOTION from "@jx3box/jx3box-emotion";
import { replyReply } from "@/service/community";
import { escapeHtml } from "@/utils/community";
import { postStat } from "@jx3box/jx3box-common/js/stat";
import AddBlockButton from "@/components/community/add_block_button.vue";
import ComplaintButton from "./complaint_button.vue";
import DeleteButton from "./delete_button.vue";

export default {
    name: "CommentItem",
    props: ["post"],
    inject: ["getTopicData", "getReplyData", "getCommentsList"],
    components: {
        ReplyForReply,
        AddBlockButton,
        ComplaintButton,
        DeleteButton,
    },
    data() {
        return {
            likeCount: 0,
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
        // 是否登录
        likeCountRender: function () {
            if (this.likeCount >= 100) {
                return "(99+)";
            } else if (this.likeCount != 0) {
                return `${this.likeCount}`;
            } else {
                return "";
            }
        },
        userInfo: function () {
            return this.post.user_info;
        },
        replyUserInfo: function () {
            return this.post.reply_for_user_info;
        },
        comments: function () {
            return this.post.comments;
        },
        content: function () {
            return this.post.content;
        },
        id: function () {
            return this.post.id;
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
            this.showReplyForReplyFrom = !this.showReplyForReplyFrom;
        },
        doReply({ content }) {
            const id = this.$route.params.id;
            const replyId = this.post.topic_reply_id;
            const userId = this.userInfo.id;
            if (id && replyId && userId) {
                replyReply(id, replyId, {
                    content: content,
                    reply_for_user_id: userId,
                })
                    .then(() => {
                        this.getCommentsList();
                    })
                    .finally(() => {
                        this.showReplyForReplyFrom = false;
                    });
            } else {
                this.$message.error("回复失败：数据不正确");
            }
            this.showReplyForReplyFrom = false;
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

<style lang="less"></style>