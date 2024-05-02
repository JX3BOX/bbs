<template>
    <CommunitySingleLayout>
        <div class="m-community-single" v-loading="loading">
            <!-- 头部 -->
            <PostHeader :post="postHeader" :stat="{ likes: 0, views: 0 }">
                <slot name="single-header"></slot>
            </PostHeader>
            <el-divider content-position="left">JX3BOX</el-divider>

            <div class="m-list-box">
                <!--  楼主 -->
                <div class="m-master-box">
                    <CommentReplyList v-if="this.page === 1" :isMaster="true" :post="post" />
                </div>

                <!-- 帖子回复s -->
                <div class="m-reply-box">
                    <CommentReplyList v-for="(item, i) in replyList" :key="i" :post="item"> /> </CommentReplyList>
                </div>
            </div>
            <!-- 帖子回复e -->

            <!-- 分页 -->
            <div class="m-pagination-box">
                <el-pagination
                    background
                    layout="total, prev, pager, next, jumper"
                    :hide-on-single-page="true"
                    :page-size="per"
                    :total="total"
                    :current-page.sync="page"
                    @current-change="changePage"
                ></el-pagination>
            </div>

            <el-divider content-position="left">评论</el-divider>
            <div class="u-editor">
                <CommentEditor @submit="onReplyTopic" />
            </div>
        </div>
    </CommunitySingleLayout>
</template>

<script>
import CommentReplyList from "@/components/community/comment_reply_list.vue";

import CommunitySingleLayout from "@/layouts/CommunitySingleLayout.vue";
import PostHeader from "@jx3box/jx3box-common-ui/src/single/PostHeader.vue";
import CommentEditor from "@/components/community/comment_editor.vue";
import { getTopicDetails, getTopicReplyList, replyTopic } from "@/service/community";
import { post } from "jquery";

export default {
    components: {
        CommentEditor,
        CommunitySingleLayout,
        PostHeader,
        CommentReplyList,
    },
    data() {
        return {
            stat: "",
            page: 1, //当前页数
            per: 10, //每页条目
            total: 0, //总条目数
            post: {},
            replyList: [],
            loading: false,
        };
    },
    computed: {
        id: function () {
            return this.$route.params.id;
        },
        postHeader: function () {
            if (!this.post.id) return;
            return {
                ID: this.post.id,
                post_type: "community",
                post_title: this.post.title,
                author_info: {
                    display_name: this.post.ext_user_info.display_name || "",
                    user_avatar: this.post.ext_user_info.avatar,
                    user_avatar_frame: this.post.ext_user_info.user_avatar_frame,
                    deleted: 0,
                },
                post_date: this.post.created_at,
                post_modified: this.post.updated_at,
                star: 10,
            };
        },
    },
    mounted() {
        if (!this.id) return this.$message.error("文章id不存在");

        this.getDetails();
        this.getReplyList();
    },

    methods: {
        getDetails: function () {
            getTopicDetails(this.id).then((res) => {
                this.post = res.data.data;
            });
        },
        getReplyList: function () {
            this.loading = true;
            getTopicReplyList(this.id, {
                index: this.page,
                pageSize: this.per,
                order_created_at: 0,
            })
                .then((res) => {
                    const list = res.data.data.list;
                    const page = res.data.data.page;
                    if (list) {
                        this.replyList = list.map((item, i) => {
                            return {
                                ...item,
                                layer: (page.index - 1) * page.pageSize + i + 1,
                            };
                        });
                        this.total = page.total;
                    }
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        onReplyTopic({ attachmentList, content }) {
            if (!this.id) return this.$message.error("文章id不存在");
            replyTopic(this.id, {
                client: location.href.includes("origin") ? "origin" : "std",
                content: content,
                extra_images: attachmentList,
            }).then((res) => {
                this.getReplyList();
            });
        },
        changePage() {
            this.getReplyList();
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/community/community-single.less";
</style>
