<template>
    <div class="m-reply-wrapper" :id="`floor-${post.floor}`">
        <div class="m-reply-left">
            <CommentUser :uid="userInfo.id" />
            <div class="u-top-right u-mobile-show">
                <div>
                    <div class="u-floor">{{ isMaster ? "楼主" : "#" + post.floor }}</div>
                    <div class="m-reply-time">{{ showTime }}</div>
                </div>
            </div>
        </div>
        <div class="m-reply-right">
            <div class="m-reply-content">
                <div class="u-reply-floor u-mobile-hidden">
                    {{ isMaster ? "楼主" : post.floor + "楼" }}
                </div>
                <div class="u-reply-content">
                    <Article v-if="isMaster" :content="post.content || ''" />
                    <div v-else v-html="renderContent" />
                </div>
                <!-- 打赏 只有主楼有打赏-->
                <Thx
                    v-if="isMaster"
                    class="m-single-thx"
                    :postId="id"
                    postType="community_topic"
                    :postTitle="post.title"
                    :userId="post.user_id"
                    :adminBoxcoinEnable="true"
                    :userBoxcoinEnable="true"
                    :client="post.client"
                />
                <!-- 操作按钮 -->
                <div class="m-reply-time u-mobile-hidden">{{ showTime }}</div>
                <div class="u-reply-toolbar">
                    <div>
                        <el-button @click="onEdit" type="text" icon="el-icon-edit-outline" v-if="!isMaster && (isSuper || isFollower)">编辑</el-button>
                        <ForwardButton class="u-mobile-hidden" :post="post" :isMaster="isMaster" />
                        <DeleteButton class="u-mobile-hidden" :post="post" type="reply" :isMaster="isMaster" />
                        <!-- <el-button type="text" icon="el-icon-delete" v-if="canDelete" @click="onDelete">删除</el-button> -->
                        <!-- <AddBlackHoleButton :post="post" :isMaster="isMaster" type="reply" /> -->
                        <AddBlockButton class="u-mobile-hidden" :post="post" />
                        <ComplaintButton class="u-mobile-hidden" :post="post" />
                        <el-button
                            type="primary"
                            size="small"
                            class="u-reply-btn"
                            :style="styles"
                            @click="onShowReply()"
                        >
                            <div class="u-btn">
                                <img src="@/assets/img/community/reply.svg" alt="" />
                                <span>{{ isMaster ? "跟帖" : "回复" }}</span>
                            </div>
                        </el-button>
                        <el-button
                            v-if="!isMaster"
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
                    <div>
                        <el-dropdown class="u-more u-mobile-show" trigger="click" placement="bottom">
                            <span class="el-dropdown-link">
                                <i class="el-icon-more"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    <ForwardButton class="u-mobile-hidden" :post="post" :isMaster="isMaster" />
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <DeleteButton
                                        class="u-mobile-hidden"
                                        :post="post"
                                        type="reply"
                                        :isMaster="isMaster"
                                    />
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <AddBlockButton class="u-mobile-hidden" :post="post" />
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <ComplaintButton class="u-mobile-hidden" :post="post" />
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
                <!-- 回复的输入框 ，判断主楼不需要展示主楼是跟帖 -->
                <ReplyForReply
                    v-if="showReplyForReplyFrom"
                    :username="userInfo.display_name"
                    :user-href="authorLink(userId)"
                    @hideForm="showReplyForReplyFrom = false"
                    @doReply="doReply"
                />
            </div>

            <!-- 折叠评论 -->
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
            <div v-if="!isMaster && commentList.length" class="m-comment-list">
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
import { replyReply, getCommentList } from "@/service/community";
import User from "@jx3box/jx3box-common/js/user.js";
import { postStat } from "@jx3box/jx3box-common/js/stat";
import AddBlockButton from "@/components/community/add_block_button.vue";
import ForwardButton from "@/components/community/forward_button.vue";
// import AddBlackHoleButton from "@/components/community/add_black_hole_button.vue";
import ComplaintButton from "./complaint_button.vue";
import DeleteButton from "./delete_button.vue";
import { getLikes } from "@/service/next";
import Thx from "@jx3box/jx3box-common-ui/src/single/Thx.vue";
import dayjs from "dayjs";

export default {
    name: "ReplyItem",
    inject: ["getTopicData", "getReplyList", "onReplyTopic"],
    props: ["isMaster", "post", "isAuthor"],
    components: {
        DeleteButton,
        ForwardButton,
        ComplaintButton,
        AddBlockButton,
        CommentUser,
        ReplyForReply,
        CommentItem,
        Article,
        // AddBlackHoleButton,
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
        showTime: function () {
            const time = this.post.created_at || this.post.updated_at;
            return dayjs(time).format("YYYY-MM-DD HH:mm:ss");
        },
        // 主楼的跟帖按钮占位宽度 * 2
        styles: function () {
            if (this.isMaster) {
                return {
                    width: "150px",
                    height: "38px",
                };
            }
            return {};
        },
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
        isSuper() {
            return User.isSuperAdmin();
        },
        isFollower() {
            return this.post?.user_id == User.getInfo()?.uid;
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
                this.likeCount = val;
            },
            immediate: true,
        },
    },
    methods: {
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
            const urlPattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])(?![^<>]*>)/gi;
            val = val.replace(urlPattern, (match, url) => {
                // 如果匹配的是 img 标签的 src 属性，不进行替换
                if (/src="[^"]*"/i.test(match)) {
                    return match;
                }
                // 只允许站内链接 如果要去除限制 把这个判断去掉
                if (match.indexOf("jx3box.com") == -1) {
                    return match;
                }
                return `<a href="${url}" target="_blank">${url}</a>`;
            });
            const ins = new JX3_EMOTION(val);
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
            await getLikes(params)
                .then((res) => {
                    list = commentList.map((item) => {
                        item.likes = res.data.data[`community_comment-${item.id}`]?.likes || 0;
                        return item;
                    });
                })
                .catch(() => {
                    list = commentList;
                });
            return list;
        },
        onEdit() {
            const path = editLink('community', this.post.id);
            window.open(path, "_blank");
        }
    },
};
</script>

<style lang="less">
@import "~@/assets/css/community/reply_item.less";
</style>
