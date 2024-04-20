<template>
    <CommunitySingleLayout>
        <div class="m-community-single">
            <!-- 头部 -->
            <PostHeader :post="post" :stat="stat">
                <slot name="single-header"></slot>
            </PostHeader>
            <el-divider content-position="left">JX3BOX</el-divider>

            <div>
                <CommentItem />
            </div>

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

            <div>
                <CommentEditor />
            </div>
        </div>
    </CommunitySingleLayout>
</template>

<script>
import CommunitySingleLayout from "@/layouts/CommunitySingleLayout.vue";
import PostHeader from "@jx3box/jx3box-common-ui/src/single/PostHeader.vue";
import CommentItem from "@/components/community/comment_item.vue";
import CommentEditor from "@/components/community/comment_editor.vue";
import { getStat } from "@jx3box/jx3box-common/js/stat";
import { appKey } from "@/../setting.json";

export default {
    components: {
        CommentEditor,
        CommunitySingleLayout,
        PostHeader,
        CommentItem,
    },
    data() {
        return {
            stat: "",
            page: 1, //当前页数
            per: 10, //每页条目
            total: 100, //总条目数
            post: {
                ID: 74835,
                post_author: 14476,
                author: "少侠089024",
                post_title: "萌新视角：杂七杂八笔记 & 一个人做点什么",
                post_type: "bbs",
                post_subtype: "2",
                post_mode: "tinymce",
                post_content: "",
                post_meta: {},
                post_excerpt: "",
                post_banner: "",
                post_status: "publish",
                original: 1,
                client: "std",
                lang: "cn",
                zlp: "",
                tags: null,
                comment: 0,
                comment_visible: 0,
                visible: "0",
                post_collection: "0",
                collection_collapse: 0,
                pz: null,
                allow_gift: 1,
                include_video: 0,
                prev_post: 0,
                next_post: 0,
                mix_subtype: null,
                post_date: "2024-02-06T12:49:49.000Z",
                post_modified: "2024-04-19T11:44:08.000Z",
                sticky: null,
                color: null,
                mark: null,
                star: 0,
                author_info: {
                    display_name: "少侠089024",
                    user_avatar: "https://cdn.jx3box.com/upload/avatar/2024/2/7/14476_8021093.jpg",
                    user_avatar_frame: "flower_2",
                    deleted: 0,
                },
                topics: [
                    {
                        topic: "纯新指南",
                    },
                    {
                        topic: "回归指南",
                    },
                ],
            },
        };
    },
    mounted() {
        getStat(appKey, this.id).then((res) => {
            this.stat = this.$store.state.stat = res.data;
        });
    },
    methods: {
        changePage() {},
    },
};
</script>

<style lang="less">
@import "~@/assets/css/community/community-single.less";
</style>
