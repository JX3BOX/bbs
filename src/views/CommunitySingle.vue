<template>
    <CommunitySingleLayout :post="post">
        <div class="m-community-single" v-loading="loading">
            <!-- 头部 -->
            <div class="m-community-header">
                <PostHeader :post="post" :stat="stat">
                    <template #append>
                        <el-pagination
                            layout="prev, pager, next"
                            :hide-on-single-page="true"
                            :page-size="per"
                            :total="total"
                            :current-page.sync="page"
                            @current-change="changePage"
                            size="small"
                            class="m-pageheader-pagination"
                        ></el-pagination>
                    </template>
                </PostHeader>
                <el-divider content-position="left">JX3BOX</el-divider>
            </div>

            <div class="m-list-box">
                <!--  楼主 -->
                <div class="m-master-box">
                    <ReplyItem v-if="this.page === 1" :isMaster="true" :post="post" @onReplyTopic="handleReplyTopic" />
                </div>

                <!-- 帖子回复 -->
                <div class="m-reply-box">
                    <ReplyItem
                        v-for="(item, i) in replyList"
                        :key="i"
                        :post="item"
                        :is-master="false"
                        :is-author="isAuthor"
                    />
                </div>
            </div>
            <!-- 帖子回复e -->

            <!-- 分页 -->

            <div class="m-community-footer">
                <el-button
                    class="u-more-buttom"
                    :style="{ fontSize: hasNextPage ? '14px' : '12px' }"
                    :type="hasNextPage ? 'primary' : 'text'"
                    @click="nextPage"
                    :loading="loading"
                    :disabled="!hasNextPage"
                    :icon="hasNextPage ? 'el-icon-arrow-down' : ''"
                >
                    {{ hasNextPage ? "下一页" : "没有更多了" }}
                </el-button>

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
                <el-divider content-position="left">回帖</el-divider>
                <div class="u-editor">
                    <CommentEditor @submit="onReplyTopic" />
                </div>
            </div>
        </div>

        <Homework
            v-model="showHomeWork"
            title="答谢"
            :postType="postType"
            :postId="postId"
            :client="postClient"
            :userId="postUserId"
            :article-id="~~id"
            category="community"
        ></Homework>
        <boxCoinRecords
            v-model="showBoxCoin"
            :postType="postType"
            :postId="postId"
            :client="postClient"
        ></boxCoinRecords>

        <el-dialog :visible.sync="showComment" title="快捷回复" :width="isPhone ? '95%' : ''">
            <CommentEditor @submit="onReplyTopic"></CommentEditor>
        </el-dialog>

        <go-to-top-or-bottom />
    </CommunitySingleLayout>
</template>

<script>
import ReplyItem from "@/components/community/reply_item.vue";
import GoToTopOrBottom from "@/components/community/goToTopOrBottom.vue";
import CommunitySingleLayout from "@/layouts/CommunitySingleLayout.vue";
import PostHeader from "@/components/community/post_header.vue";
import CommentEditor from "@/components/community/comment_editor.vue";
import { getTopicDetails, getTopicDetailsFromAdmin, getTopicReplyList, replyTopic } from "@/service/community";
import { getStat, postStat } from "@jx3box/jx3box-common/js/stat";
import { getLikes } from "@/service/next";
import User from "@jx3box/jx3box-common/js/user";
import Homework from "@jx3box/jx3box-common-ui/src/interact/Homework.vue";
import boxCoinRecords from "@jx3box/jx3box-comment-ui/src/components/boxcoin-records.vue";
import bus from "@/utils/bus";
import { atAuthors } from "@/service/pay";

const appKey = "community";

export default {
    components: {
        CommentEditor,
        CommunitySingleLayout,
        PostHeader,
        ReplyItem,
        Homework,
        boxCoinRecords,
        GoToTopOrBottom,
    },
    provide() {
        return {
            getTopicData: () => this.post,
            getReplyList: this.getReplyList,
            setOnlyAuthor: this.setOnlyAuthor,
            onReplyTopic: this.onReplyTopic,
            onSearch: this.onSearch,
        };
    },
    data() {
        return {
            floor: 0,
            stat: "",
            page: 1, //当前页数
            per: 10, //每页条目
            total: 0, //总条目数
            pageTotal: 0, //总页数
            post: {},
            replyList: [],
            categoryList: [],
            loading: false,
            onlyAuthor: false,
            number_queries: ["per", "page"],
            mode: null,

            // 打赏相关 start
            showHomeWork: false,
            postType: "community",
            postId: "",
            postUserId: 0,
            postClient: "std",
            showBoxCoin: false,
            // 打赏相关 end

            showComment: false,
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
        isAuthor() {
            return this.post?.user_id == User.getInfo().uid;
        },
        isPhone() {
            return window.innerWidth < 768;
        },
        // 是否显示加载更多
        hasNextPage: function () {
            return this.pageTotal >= 1 && this.per * this.page < this.total;
        },
    },
    created() {
        this.getJumpFloor();
    },
    mounted() {
        if (!this.id) return this.$message.error("文章id不存在");
        this.getDetails();
        this.getReplyList();

        // 打赏
        bus.on("onThx", (data) => {
            this.postType = data.postType;
            this.postId = data.postId;
            this.postUserId = data.postUserId;
            this.showHomeWork = true;
        });

        bus.on("boxcoin-click", (data) => {
            this.postType = data.postType;
            this.postId = data.postId;
            this.showBoxCoin = true;
        });
    },
    watch: {
        // 加载路由参数
        "$route.query": {
            deep: true,
            immediate: true,
            handler: function (query) {
                if (Object.keys(query).length) {
                    for (let key in query) {
                        // for:element分页组件兼容性问题
                        if (this.number_queries.includes(key)) {
                            this[key] = ~~query[key];
                        } else {
                            this[key] = query[key];
                        }
                    }
                }
            },
        },
    },
    methods: {
        /**
         * 获取url楼诚参数
         */
        getJumpFloor: function () {
            const hash = window.location.hash;
            const floor = hash.substring(1).split("?")[0];
            if (floor) {
                this.floor = floor;
                this.page = Math.ceil((floor - 1) / this.per);
            }
        },
        /**
         * 跳转到指定楼层
         * @param floor 楼层
         */
        jumpFloor(floor) {
            const _floor = floor || this.floor;
            this.$nextTick(() => {
                const el = document.getElementById("floor-" + _floor);
                if (el) {
                    el.scrollIntoView();
                    window.scrollBy(0, -120); // 额外滚动
                }
            });
        },
        // 翻页按钮
        nextPage: function () {
            this.getReplyList(true);
        },
        onSearch() {
            this.page = 1;
            this.$nextTick(() => {
                this.getReplyList();
            });
        },
        /**
         * 传入 true ｜ false  只看楼主、取消只看楼主
         * @param val bool
         */
        setOnlyAuthor(v) {
            this.page = 1;
            this.onlyAuthor = v;
            this.getReplyList();
        },

        buildQuery: function () {
            let _query = {
                index: this.page,
                pageSize: this.per,
                order_created_at: 0,
            };
            if (this.onlyAuthor && (this.onlyAuthor == true || this.onlyAuthor == "true")) {
                _query.user_id = this.post.user_id;
            }
            this.replaceRoute({ page: this.page, onlyAuthor: this.onlyAuthor });
            return _query;
        },
        getTopicData: function () {
            return this.post;
        },
        getDetails: function () {
            let fun = getTopicDetails;
            if (this.mode == "admin") {
                fun = getTopicDetailsFromAdmin;
            }
            fun(this.id).then((res) => {
                this.post = res.data.data;

                getStat(appKey, this.id).then((res) => {
                    this.stat = res.data;
                    this.$set(this.post, "likes", this.stat.likes || 0);
                });
                postStat(appKey, this.id);
            });
        },
        getReplyList: function (appendMode) {
            if (this.mode == "admin") return;
            this.loading = true;
            if (appendMode) {
                this.page += 1;
            }
            const params = this.buildQuery();
            return getTopicReplyList(this.id, params)
                .then(async (res) => {
                    var list = res.data.data.list;
                    const page = res.data.data.page;
                    if (list == null) {
                        this.replyList = [];
                    } else {
                        // 把点赞数量请求过来填充进去
                        list = await this.getLikes(list);
                        this.replyList = list;
                        // 如果有楼层参数 跳转到指定楼层
                        if (this.floor) {
                            this.jumpFloor();
                        }
                    }
                    this.total = page.total;
                    this.pageTotal = page.pageTotal;
                    this.$nextTick(() => {
                        this.page = page.index;
                    });
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        async getLikes(replyList) {
            const ids = replyList.map((item) => `community_reply-${item.id}`);
            let id = ids.join(",");
            let list = [];
            await getLikes({
                post_type: "community_reply",
                post_action: "likes",
                id,
            })
                .then((res) => {
                    list = replyList.map((item) => {
                        item.likes = res.data.data[`community_reply-${item.id}`]?.likes || 0;
                        return item;
                    });
                })
                .catch(() => {
                    list = replyList;
                });
            return list;
        },
        /** 回帖 */
        onReplyTopic({ attachmentList, content, atUsers }) {
            console.log(attachmentList);
            if (!this.id) return this.$message.error("文章id不存在");
            // 拼接图片列表到 content 中
            if (attachmentList && attachmentList.length) {
                const imageTags = attachmentList
                    .map((image) => `<p><img class='attachment' src="${image}" /></p>`)
                    .join("");
                content += imageTags;
            }
            replyTopic(this.id, {
                client: location.href.includes("origin") ? "origin" : "std",
                content: content,
            }).then((res) => {
                this.onReplyTopicSuccess(res.data.data);
                this.showComment = false;
                this.noticeMentionsUser(atUsers);
            });
        },
        // 通知at用户
        noticeMentionsUser(atUsers) {
            const ids = atUsers.map((item) => item.ID);
            const userInfo = User.getInfo();
            atAuthors({
                sendUserId: userInfo.uid,
                accessUserId: ids.join(","),
                postId: this.id,
                postType: "community",
            });
        },
        /**
         * 回复成功后的操作
         * 如果当前的回复不需要翻页，可以不用重新渲染列表
         * 如果当前的回复条数已经超过一页，可以直接跳转到最后一页
         */
        onReplyTopicSuccess(data) {
            if (this.replyList.length + 1 <= this.per) {
                const userInfo = User.getInfo();
                this.replyList.push({
                    ...data,
                    user_info: {
                        id: Number(userInfo.uid),
                        display_name: userInfo.name,
                        avatar: userInfo.avatar,
                    },
                });
                this.$nextTick(() => {
                    window.scrollTo(0, document.body.scrollHeight);
                });
            } else {
                this.total = this.total + 1;
                this.page = Math.ceil((this.total + 1) / this.per);
                this.$nextTick(() => {
                    this.getReplyList().finally(() => {
                        window.scrollTo(0, document.body.scrollHeight);
                    });
                });
            }
        },
        changePage(page) {
            this.page = page;
            this.getReplyList();
        },
        // 路由绑定
        replaceRoute: function (extend) {
            return this.$router
                .push({ name: this.$route.name, query: Object.assign({}, this.$route.query, extend) })
                .then(() => {
                    window.scrollTo(0, 0);
                })
                .catch((err) => {});
        },
        handleReplyTopic() {
            // 展示快捷回复弹窗
            this.showComment = true;
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/community/community-single.less";
</style>
