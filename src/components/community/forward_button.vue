<template>
    <el-button type="text" v-if="allowForward" @click="onForward()">
        <i class="el-icon-copy-document"></i>
        转述
    </el-button>
</template>

<script>
import User from "@jx3box/jx3box-common/js/user.js";
export default {
    props: ["post", "isMaster"],
    inject: ["onReplyTopic"],
    computed: {
        isLogin: function () {
            return User.isLogin();
        },
        allowForward() {
            // 不是主楼 && 已经登陆
            return !this.isMaster && this.isLogin;
        },
    },
    methods: {
        onForward() {
            this.onReplyTopic({
                content: this.post.content,
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>
