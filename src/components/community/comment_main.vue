<template>
    <div>
        <CommentReplyList :isMaster="true" />

        <!-- 帖子回复s -->
        <div class="m-reply-box">
            <CommentReplyList />
            <CommentReplyList />
            <CommentReplyList />
        </div>
        <!-- 帖子回复e -->
    </div>
</template>

<script>
import CommentUser from "@/components/community/comment_user.vue";
import CommentReplyItem from "@/components/community/comment_reply_item.vue";
import CommentReplyList from "@/components/community/comment_reply_list.vue";

export default {
    components: {
        CommentReplyList,
    },
    data() {
        return {
            showReplyForReplyFrom: true,
        };
    },
};
</script>

<style lang="less">
@import "~@/assets/css/community/comment_item.less";
</style>
