<template>
    <div class="m-comment-wrapper" :id="`layer-${post.layer}`">
        <div class="m-comment-wrapper__left">
            <CommentUser :uid="userInfo.id" />
        </div>
        <div class="m-comment-wrapper__right">
            <div class="m-comment-wrapper__right-box">
                <div>
                    <div class="u-layer">
                        {{ isMaster ? "楼主" : post.layer + "楼" }}

                        <div class="u-layer-toolbar">
                            <el-button
                                class="u-layer-btn"
                                @click="onEditClick"
                                v-if="isPostOwner"
                                type="warning"
                                icon="el-icon-edit"
                                >编辑</el-button
                            >
                            <el-button
                                v-if="isMaster"
                                :class="`u-layer-btn u-only-btn ${onlyAuthor && 'u-unset'}`"
                                type="primary"
                                @click="setOnlyAuthor(!onlyAuthor)"
                            >
                                <img
                                    v-show="!onlyAuthor"
                                    svg-inline
                                    width="14"
                                    height="14"
                                    src="@/assets/img/community/only-author.svg"
                                />
                                {{ onlyAuthor ? "取消只看楼主" : "只看楼主" }}
                            </el-button>
                        </div>
                    </div>
                    <div class="u-content">
                        <Article v-if="isMaster" :content="post.content || ''" />
                        <div v-else v-html="renderContent" />
                    </div>
                </div>
                <div>
                    <div class="u-time">{{ post.created_at || post.updated_at }}</div>
                    <div class="u-toolbar">
                        <div></div>
                        <div>
                            <el-button type="text" @click="onForward()">
                                <i class="el-icon-copy-document"></i>
                                转述
                            </el-button>
                            <DeleteButton :post="post" type="reply" :isMaster="isMaster" />
                            <AddBlackHoleButton :post="post" :isMaster="isMaster" type="reply" />
                            <AddBlockButton :post="post" />
                            <ComplaintButton :post="post" />
                            <el-button type="primary" size="small" class="u-reply-btn" @click="onShowReply()">
                                <div class="u-btn">
                                    <img src="@/assets/img/community/reply.svg" alt="" />
                                    <span>{{ isMaster ? "跟帖" : "回复" }}</span>
                                </div>
                            </el-button>
                            <el-button
                                :disabled="isLike"
                                type="primary"
                                size="small"
                                class="u-praise-btn"
                                @click="addLike"
                            >
                                <div class="u-btn">
                                    <img src="@/assets/img/community/praise.svg" alt="" />
                                    <span>赞</span>
                                    <span>{{ likeCountRender }}</span>
                                </div>
                            </el-button>
                        </div>
                    </div>
                </div>
                <ReplyForReply
                    v-if="showReplyForReplyFrom"
                    :username="userInfo.display_name"
                    :user-href="authorLink(userId)"
                    @hideForm="showReplyForReplyFrom = false"
                    @doReply="doReply"
                />
            </div>
            <div v-if="!isMaster && post.comments_count > 3" class="m-comment-collapse">
                <div v-if="isCollapse" @click="onCollapseChange">
                    <img width="14" src="@/assets/img/community/collapse_1.svg" alt="" />
                    <span>折叠评论</span>
                </div>
                <div v-else @click="onCollapseChange">
                    <img width="14" src="@/assets/img/community/collapse_2.svg" alt="" />
                    <span>展开评论</span>
                </div>
            </div>
            <!-- 评论列表 -->
            <div v-if="!isMaster && commentList.length" class="m-reply-list">
                <CommentItem v-for="item in commentList" :key="item.id" :post="item" />
            </div>

            <!-- 分页 -->
            <div v-if="isCollapse" class="m-pagination-box">
                <el-pagination
                    background
                    layout="total, prev, pager, next"
                    :hide-on-single-page="true"
                    :page-size="per"
                    :total="total"
                    :current-page.sync="page"
                    @current-change="changePage"
                ></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import CommentUser from "@/components/community/comment_user.vue";
import ReplyForReply from "./ReplyForReply.vue";
import CommentItem from "@/components/community/comment_item.vue";
import Article from "@jx3box/jx3box-editor/src/Article.vue";
import JX3_EMOTION from "@jx3box/jx3box-emotion";
import { authorLink, editLink } from "@jx3box/jx3box-common/js/utils";
import { replyReply, getCommentList, replyTopic } from "@/service/community";
import { escapeHtml } from "@/utils/community";
import User from "@jx3box/jx3box-common/js/user.js";
import { postStat } from "@jx3box/jx3box-common/js/stat";
import AddBlockButton from "@/components/community/add_block_button.vue";
import AddBlackHoleButton from "@/components/community/add_black_hole_button.vue";
import ComplaintButton from "./complaint_button.vue";
import DeleteButton from "./delete_button.vue";
import { getLikes } from "@/service/next";

export default {
    name: "ReplyItem",
    inject: ["getTopicData", "getReplyList", "setOnlyAuthor"],
    props: ["isMaster", "post"],
    components: {
        DeleteButton,
        ComplaintButton,
        AddBlockButton,
        CommentUser,
        ReplyForReply,
        CommentItem,
        Article,
        AddBlackHoleButton,
    },
    provide() {
        return {
            getReplyData: () => this.post,
            getCommentList: this.getList,
        };
    },
    data() {
        return {
            page: 1, //当前页数
            per: 5, //每页条目
            total: 0, //总条目数
            isCollapse: false,
            isLike: false,
            likeCount: 0,
            showReplyForReplyFrom: false,
            renderContent: "",
            commentList: [],
        };
    },
    computed: {
        id: function () {
            return this.$route.params.id;
        },
        onlyAuthor: function () {
            const v = this.$route.query.onlyAuthor;
            return (v == true || v == "true") && true;
        },
        likeCountRender: function () {
            if (this.likeCount >= 100) {
                return "99+";
            } else if (this.likeCount != 0) {
                return this.likeCount;
            } else {
                return "";
            }
        },
        // 是否登录
        isLogin: function () {
            return User.isLogin();
        },
        userInfo: function () {
            if (this.post && this.post.user_info) {
                return this.post.user_info;
            }
            if (this.post && this.post.ext_user_info) {
                return this.post.ext_user_info;
            }
            return {};
        },
        userId: function () {
            if (this.post && this.post.user_info) {
                return this.post.user_info.id;
            }
            if (this.post && this.post.ext_user_info) {
                return this.post.ext_user_info.id;
            }
            return "";
        },
        // 是否为层主
        isPostOwner() {
            return this.userId == User.getInfo()?.uid;
        },
    },
    watch: {
        "post.content": {
            handler: function (val) {
                if (!this.isMaster) {
                    this.formatContent(val);
                }
            },
            immediate: true,
        },
        post: {
            handler: async function () {
                this.commentList = [];
                if (this.post.comments) {
                    this.commentList = await this.getLikes(this.post.comments);
                }
            },
            immediate: true,
        },
        "post.likes": {
            handler: function (val) {
                if (val) {
                    this.likeCount = val;
                }
            },
            immediate: true,
        },
    },
    methods: {
        onForward() {
            replyTopic(this.id, {
                client: location.href.includes("origin") ? "origin" : "std",
                content: this.post.content,
                extra_images: this.post.extra_images,
            }).then(() => {
                this.getReplyList();
            });
        },
        onCollapseChange() {
            if (this.isCollapse) {
                this.commentList = this.post.comments;
            } else {
                this.page = 1;
                this.getList();
            }
            this.isCollapse = !this.isCollapse;
        },
        authorLink,
        async formatContent(val) {
            const ins = new JX3_EMOTION(escapeHtml(val));
            this.renderContent = await ins._renderHTML();
        },
        onShowReply() {
            if (this.isMaster) {
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                this.showReplyForReplyFrom = !this.showReplyForReplyFrom;
            }
        },
        doReply({ content }) {
            const id = this.$route.params.id;
            const replyId = this.post.id;
            if (id && replyId && this.userId) {
                replyReply(id, replyId, {
                    content: content,
                    reply_for_user_id: this.userId,
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
        },
        changePage() {
            this.getList();
        },
        getList(postData = {}) {
            if (this.isMaster) return;
            const id = this.id;
            const replyId = this.post.id;
            if (id && replyId) {
                getCommentList(id, replyId, {
                    index: this.page,
                    pageSize: this.per,
                    ...postData,
                }).then(async (res) => {
                    var list = res.data.data.list;

                    if (list) {
                        this.commentList = await this.getLikes(list);
                        this.isCollapse = true;
                    } else {
                        this.commentList = [];
                    }
                    this.page = res.data.data.page.index;
                    this.total = res.data.data.page.total;
                    this.current = res.data.data.page.current;
                });
            }
        },
        // 点赞
        addLike: function () {
            if (this.isLike) return;
            this.likeCount++;
            if (!this.isLike) {
                if (this.isMaster) {
                    postStat("community_topic", this.post.id, "likes");
                } else {
                    postStat("community_reply", this.post.id, "likes");
                }
            }
            this.isLike = true;
        },
        async getLikes(commentList) {
            const id = commentList.map((item) => `community_comment-${item.id}`).join(",");
            let list = [];
            const params = {
                post_type: "community_comment",
                post_action: "likes",
                id,
            };
            await getLikes(params).then((res) => {
                list = commentList.map((item) => {
                    item.likes = res.data.data[`community_comment-${item.id}`]?.likes || 0;
                    return item;
                });
            });
            return list;
        },
        onEditClick() {
            window.location.href = editLink("community", this.post?.id);
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/community/comment_item.less";
</style>
