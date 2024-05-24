<template>
    <el-button v-if="allowDelete" type="text" @click="onDeleteClick()">
        <i class="el-icon-delete"></i>
        删除
    </el-button>
</template>

<script>
import { delComment, delReply } from "@/service/community";
import User from "@jx3box/jx3box-common/js/user.js";
export default {
    name: "DeleteButton",
    inject: ["getTopicData", "getReplyList", "getCommentsList"],
    props: ["isMaster", "post", "type"],
    computed: {
        topicData: function () {
            return this.getTopicData();
        },
        isLogin: function () {
            return User.isLogin();
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

            // 是我自己发的 可以删除
            if (this.post.user_id == User.getInfo().uid) {
                return true;
            }

            // 这是一条回帖  && 我是楼主
            if (this.type === "reply" && this.topicData.user_id == User.getInfo().uid) {
                return true;
            }
            //  这是一条评论 && 回复的是我 我可以删除
            if (this.type === "comment" && this.post.reply_for_user_id == User.getInfo().uid) {
                return true;
            }

            return false;
        },
    },
    methods: {
        onDeleteClick() {
            if (this.type === "comment") {
                this.deleteComment();
            } else if (this.type === "reply") {
                this.deleteReply();
            } else {
                this.$message.success("未知的组件类型：" + this.type);
            }
        },
        deleteReply: function () {
            this.$confirm("确认是否删除该评论？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            }).then(() => {
                delReply(this.post.id).then(() => {
                    this.getReplyList();
                });
            });
        },
        deleteComment: function () {
            this.$confirm("确认是否删除该评论？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            }).then(() => {
                delComment(this.post.id).then(() => {
                    this.$message.success("删除成功");
                    this.getCommentsList({ index: 1 });
                });
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>
