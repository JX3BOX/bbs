<template>
    <el-button v-if="allowDelete" type="text" @click="onDeleteClick()">
        <i class="el-icon-delete"></i>
        删除
    </el-button>
</template>

<script>
import { delMyComment, delCommentToMyReply, delReplyToMyTopic, deleteMyReply } from "@/service/community";
import User from "@jx3box/jx3box-common/js/user.js";
export default {
    name: "DeleteButton",
    inject: ["getTopicData", "getReplyList", "getReplyData", "getCommentList", "onSearch"],
    props: ["isMaster", "post", "type"],
    computed: {
        topicData: function () {
            return this.getTopicData();
        },
        replyData: function () {
            return this.getReplyData();
        },
        isLogin: function () {
            return User.isLogin();
        },
        // 作者
        isAuthor: function () {
            return this.post.user_id == User.getInfo().uid;
        },
        // 是我的帖子的回帖 （我是楼主）
        isReplyToMyTopic: function () {
            if (this.type === "reply" && this.topicData.user_id == User.getInfo().uid) {
                return true;
            }
            return false;
        },
        // 回复我的回帖 （我是层主）
        isCommentToMyReply: function () {
            if (this.type === "comment" && this.replyData.user_id == User.getInfo().uid) {
                return true;
            }
            return false;
        },

        // 是否允许删除
        allowDelete: function () {
            // 未登录不允许删除
            if (!this.isLogin) {
                return false;
            }
            // 主楼不允许删除
            if (this.isMaster) {
                return false;
            }
            // 我是作者 可以删除
            if (this.isAuthor) {
                return true;
            }
            if (this.isReplyToMyTopic) {
                return true;
            }
            //  这是一条评论 && 回复的是我 我可以删除
            if (this.isCommentToMyReply) {
                return true;
            }

            return false;
        },
    },
    methods: {
        onDeleteClick() {
            // 删除自己的评论与回帖
            if (this.isAuthor) {
                if (this.type === "comment") {
                    this.delMyComment();
                } else if (this.type === "reply") {
                    this.deleteMyReply();
                } else {
                    this.$message.success("未知的组件类型：" + this.type);
                }
            } else {
                // 删除回帖我的
                if (this.isReplyToMyTopic) {
                    // console.log("删除回帖我的");
                    this.delReplyToMyTopic();
                }
                // 删除回复我
                if (this.isCommentToMyReply) {
                    // console.log("删除回复我的");
                    this.delCommentToMyReply();
                }
            }
        },
        deleteMyReply: function () {
            this.$confirm("确认是否删除该评论？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            }).then(() => {
                deleteMyReply(this.post.id).then(() => {
                    this.$message.success("删除成功");
                    // 调用父组件的方法，刷新回到第一页
                    this.onSearch();
                });
            });
        },
        delMyComment: function () {
            this.$confirm("确认是否删除该评论？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            }).then(() => {
                delMyComment(this.post.id).then(() => {
                    this.$message.success("删除成功");
                    this.getCommentList({ index: 1 });
                });
            });
        },
        delReplyToMyTopic: function () {
            this.$confirm("确认是否删除该评论？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            }).then(() => {
                delReplyToMyTopic(this.topicData.id, this.post.id).then(() => {
                    this.$message.success("删除成功");
                    // 调用父组件的方法，刷新回到第一页
                    this.onSearch();
                });
            });
        },
        delCommentToMyReply: function () {
            this.$confirm("确认是否删除该评论？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            }).then(() => {
                delCommentToMyReply(this.post.topic_reply_id, this.post.id).then(() => {
                    this.$message.success("删除成功");
                    // 调用父组件的方法，刷新回到第一页
                    this.getCommentList({ index: 1 });
                });
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>
