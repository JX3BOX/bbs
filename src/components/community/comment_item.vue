<template>
    <div class="m-comment-wrapper">
        <div
            class="m-comment-right"
            :style="{
                backgroundImage: `url(${skin})`,
            }"
        >
            <img class="u-avatar" :src="showAvatar(userInfo.avatar)" />
            <div class="m-comment-content">
                <div class="u-content-top">
                    <div class="u-name">
                        <a :href="authorLink(userInfo.id)" alt="用户名">{{ userInfo.display_name }}</a>
                        <span class="m-comment-time u-mobile-show">{{ post.updated_at }}</span>
                    </div>
                    <div>
                        <el-dropdown class="u-more u-mobile-show" trigger="click" placement="bottom">
                            <span class="el-dropdown-link">
                                <i class="el-icon-more"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    <DeleteButton :post="post" type="comment" />
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <AddBlockButton :post="post" />
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <ComplaintButton :post="post" />
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
                <p class="u-answer-user">回复 {{ replyUserInfo.display_name }}：</p>
                <p class="u-content" v-html="renderContent"></p>
                <div class="u-comment-toolbar">
                    <div>
                        <el-button type="text" size="small" @click="addLike" class="">
                            <div class="u-btn-content">
                                <i :class="`u-like-icon ${isLike && 'is-like'}`">{{ isLike ? "♥" : "♡" }}</i>
                                {{ isLike ? "已赞" : "赞" }}
                                <span class="u-count" v-if="likeCount"> ({{ likeCountRender }})</span>
                            </div>
                        </el-button>
                        <el-button type="text" size="small" @click="onShowReply">
                            <i class="el-icon-chat-round"></i>
                            <span>回复</span>
                        </el-button>
                    </div>
                    <div class="u-mobile-hidden">
                        <DeleteButton :post="post" type="comment" />
                        <!-- <AddBlackHoleButton :post="post" type="comment" /> -->
                        <AddBlockButton :post="post" />
                        <ComplaintButton :post="post" />
                        <span class="m-comment-time u-mobile-hidden">{{ post.updated_at }}</span>
                    </div>
                </div>
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
</template>

<script>
import ReplyForReply from "./ReplyForReply.vue";
import { authorLink, showAvatar } from "@jx3box/jx3box-common/js/utils";
import JX3_EMOTION from "@jx3box/jx3box-emotion";
import { replyReply } from "@/service/community";
import { postStat } from "@jx3box/jx3box-common/js/stat";
import AddBlockButton from "@/components/community/add_block_button.vue";
// import AddBlackHoleButton from "@/components/community/add_black_hole_button.vue";
import ComplaintButton from "./complaint_button.vue";
import DeleteButton from "./delete_button.vue";
import { getDecoration, getDecorationJson } from "@/service/cms";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
const DECORATION_JSON = "decoration_json";
const DECORATION_KEY = "decoration_me";

export default {
    name: "CommentItem",
    props: ["post"],
    inject: ["getTopicData", "getReplyData", "getCommentList"],
    components: {
        ReplyForReply,
        AddBlockButton,
        // AddBlackHoleButton,
        ComplaintButton,
        DeleteButton,
    },
    data() {
        return {
            skin: "",
            isLike: false,
            likeCount: 0,
            renderContent: "",
            showReplyForReplyFrom: false,
            commentList: [],
        };
    },
    watch: {
        content: {
            handler: function (val) {
                this.formatContent(val);
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
    computed: {
        uid() {
            return this.post.user_info.id;
        },
        // 是否登录
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
        this.getDecoration();
    },
    methods: {
        setDecoration(decoration) {
            this.skin = __imgPath + `decoration/images/${decoration.name}/comment.png`;
        },
        getDecoration() {
            let decoration_local = sessionStorage.getItem(DECORATION_KEY + this.uid);
            if (decoration_local) {
                //解析本地缓存
                let decoration_parse = JSON.parse(decoration_local);
                if (!decoration_parse.status) return;

                if (decoration_parse) {
                    this.setDecoration(decoration_parse);
                    return;
                }
            }
            getDecoration({ using: 1, user_id: this.uid, type: "comment" }).then((res) => {
                let decorationList = res.data.data;
                //筛选个人装扮
                let decoration = decorationList.find((item) => item.type == "comment");
                if (!decoration) {
                    //空 则为无主题，不再加载接口，Me界面设No
                    sessionStorage.setItem(DECORATION_KEY + this.uid, JSON.stringify({ status: false }));
                    return;
                }
                let decorationJson = sessionStorage.getItem(DECORATION_JSON);
                if (!decorationJson) {
                    //加载远程json，用于颜色配置及主题存在部位判断
                    getDecorationJson().then((json) => {
                        let decoration_json = json.data;
                        let theme = JSON.parse(JSON.stringify(decoration_json[decoration.val]));
                        theme.status = true;
                        sessionStorage.setItem(DECORATION_KEY + this.uid, JSON.stringify(theme));
                        this.setDecoration(theme);
                        //缓存远程JSON文件
                        sessionStorage.setItem(DECORATION_JSON, JSON.stringify(decoration_json));
                    });
                } else {
                    let theme = JSON.parse(decorationJson)[decoration.val];
                    theme.status = true;
                    sessionStorage.setItem(DECORATION_KEY + this.uid, JSON.stringify(theme));
                    this.setDecoration(theme);
                }
            });
        },
        authorLink,
        async formatContent(val) {
            const urlPattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])(?![^<>]*>)/gi;
            val = val.replace(urlPattern, (match, url) => {
                // 如果匹配的是 img 标签的 src 属性，不进行替换
                if (/src="[^"]*"/i.test(match)) {
                    return match;
                }
                console.log(match);
                return `<a href="${url}" target="_blank">${url}</a>`;
            });
            const ins = new JX3_EMOTION(val);
            this.renderContent = await ins._renderHTML();
        },
        onShowReply() {
            this.showReplyForReplyFrom = !this.showReplyForReplyFrom;
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
                        this.getCommentList();
                    })
                    .finally(() => {
                        this.showReplyForReplyFrom = false;
                    });
            } else {
                this.$message.error("回复失败：数据不正确");
            }
            this.showReplyForReplyFrom = false;
        },
        // 点赞
        addLike: function () {
            if (this.isLike) return;
            this.likeCount++;
            if (!this.isLike) {
                postStat("community_comment", this.post.id, "likes");
            }
            this.isLike = true;
        },
        showAvatar,
    },
};
</script>

<style lang="less">
@import "~@/assets/css/community/comment_item.less";
</style>
