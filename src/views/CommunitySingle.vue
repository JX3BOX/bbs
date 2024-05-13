<template>
    <CommunitySingleLayout :post="post">
        <div class="m-community-single" v-loading="loading">
            <!-- 头部 -->
            <div class="m-community-header">
                <PostHeader :post="postHeader" :stat="{ likes: 0, views: 0 }">
                    <template v-slot:title_before>
                        <div class="m-topic-category-box">
                            <div
                                :class="`m-topic-category`"
                                :style="`background-color: ${styles.hoverColor};color:${styles.color};`"
                            >
                                <img
                                    v-svg-inline
                                    class="u-icon"
                                    :src="require(`@/assets/img/community/category/${styles.icon}.svg`)"
                                />
                                <div>{{ post.category }}</div>
                            </div>
                        </div>
                    </template>
                </PostHeader>
                <el-divider content-position="left">JX3BOX</el-divider>
            </div>

            <div class="m-list-box">
                <!--  楼主 -->
                <div class="m-master-box">
                    <ReplyItem v-if="this.page === 1" :isMaster="true" :post="post" />
                </div>

                <!-- 帖子回复s -->
                <div class="m-reply-box">
                    <ReplyItem v-for="(item, i) in replyList" :key="i" :post="item"> /> </ReplyItem>
                </div>
            </div>
            <!-- 帖子回复e -->

            <!-- 分页 -->
            <div class="m-community-footer">
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
        </div>
    </CommunitySingleLayout>
</template>

<script>
import ReplyItem from "@/components/community/reply_item.vue";

import CommunitySingleLayout from "@/layouts/CommunitySingleLayout.vue";
import PostHeader from "@/components/community/post_header.vue";
import CommentEditor from "@/components/community/comment_editor.vue";
import { getTopicDetails, getTopicReplyList, replyTopic } from "@/service/community";
import { post } from "jquery";
import { getTopicBucket } from "@/service/community";
import { formatCategoryList } from "@/utils/community";

export default {
    components: {
        CommentEditor,
        CommunitySingleLayout,
        PostHeader,
        ReplyItem,
    },
    provide() {
        return {
            getTopicData: () => this.post,
            getReplyList: this.getReplyList,
        };
    },
    data() {
        return {
            stat: "",
            page: 1, //当前页数
            per: 10, //每页条目
            total: 0, //总条目数
            post: {},
            replyList: [],
            categoryList: [],
            loading: false,
        };
    },
    computed: {
        styles: function () {
            let item = this.categoryList.find((item) => item.value === this.post.category);
            if (item) {
                return item;
            } else {
                return {
                    icon: `game`,
                    hoverColor: "rgba(235, 244, 255, 1)",
                    color: "rgba(64, 128, 255, 1)",
                };
            }
        },
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
        this.getCategoryList();
        this.getDetails();
        this.getReplyList();
    },

    methods: {
        getTopicData: function () {
            return this.post;
        },
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
                    if (list == null) {
                        this.replyList = [];
                    } else {
                        this.replyList = list.map((item, i) => {
                            return {
                                ...item,
                                layer: (page.index - 1) * page.pageSize + i + 1,
                            };
                        });
                    }
                    this.total = page.total;
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
        getCategoryList() {
            getTopicBucket({ type: "community", search: this.post.category }).then((res) => {
                this.categoryList = formatCategoryList(res.data.data);
            });
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/community/community-single.less";
</style>
