<template>
    <el-button type="text" :disabled="!allowBlock" @click="addBlock()">拉黑</el-button>
</template>

<script>
import { addBlock } from "@/service/community";
import User from "@jx3box/jx3box-common/js/user.js";
export default {
    name: "add-block-button",
    props: ["post", "isMaster"],
    computed: {
        isLogin: function () {
            return User.isLogin();
        },
        // 是否允许拉黑
        allowBlock: function () {
            // 登录 && 不是楼主 && 不是自己
            return this.isLogin && !this.isMaster && this.post.user_id != User.getInfo().uid;
        },
    },
    methods: {
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
    },
};
</script>

<style lang="scss" scoped></style>
