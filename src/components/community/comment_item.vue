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
                                <el-button type="text" size="small" @click="addLike">赞{{ likeCountRender }}</el-button>
                                <el-button type="text" size="small" @click="onShowReply">回复</el-button>
                                <el-button type="text" size="small">拉黑</el-button>
                                <el-button type="text" size="small" @click="onMiscfeedback">举报</el-button>
                            </div>
                            <div>
                                <el-button type="text" size="small">删除</el-button>
                                <el-button type="text" size="small">黑洞</el-button>
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
            <CommentItem v-for="item in commentsList" :key="item.id" :data="item" />
        </div>
    </div>
</template>

<script>
import ReplyForReply from "./ReplyForReply.vue";
import { authorLink } from "@jx3box/jx3box-common/js/utils";
import JX3_EMOTION from "@jx3box/jx3box-emotion";
import { replyReply, getCommentsList, feedback } from "@/service/community";
import { escapeHtml } from "@/utils/community";
import { postStat } from "@jx3box/jx3box-common/js/stat";
export default {
    name: "CommentItem",
    props: ["post"],
    inject: ["getTopicData", "getReplyData"],
    components: {
        ReplyForReply,
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
    mounted() {
        // this.getList();
    },
    methods: {
        onMiscfeedback() {
            const topicData = this.getTopicData();
            const replyData = this.getReplyData();
            const user_name = this.post.user_info.display_name;
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
                const content = `魔盒论坛《${topicData.title}》${replyData.layer}楼的 ${user_name} ：${value}`;
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
            const replyId = this.post.topic_reply_id;
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

<style lang="less"></style>
