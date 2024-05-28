<template>
    <div id="app" class="p-community-single">
        <Header></Header>
        <Breadcrumb
            v-if="post"
            name="魔盒论坛"
            slug="community"
            :publishEnable="false"
            :adminEnable="true"
            :feedbackEnable="true"
            :crumbEnable="true"
            :showExtend="true"
        >
            <TopStickyInfo :post="post" />
            <!-- <Info /> -->
            <publish-gate slot="op-append" />
            <template #op-prepend>
                <AdminDrop v-if="isTeammate" :is-community="true" :post="finalPost" :user-id="user_id" />
            </template>
            <template #title>
                <span>
                    {{ title }}
                </span>
            </template>
        </Breadcrumb>

        <div>
            <Main :withoutRight="false">
                <div class="m-community-single__main">
                    <div class="m-community-single__left">
                        <slot></slot>
                        <Footer></Footer>
                    </div>

                    <!-- <div class="m-community-single__right">
                        <PostTopic v-if="post.id" type="community" :id="~~post.id" />
                    </div> -->
                </div>
            </Main>
        </div>
    </div>
</template>

<script>
import TopStickyInfo from "@/components/community/top_sticky_info.vue";
import publishGate from "@/components/publish_gate.vue";
import { getAppIcon, getAppID } from "@jx3box/jx3box-common/js/utils";
import AdminDrop from "@jx3box/jx3box-common-ui/src/bread/AdminDrop.vue";
import User from "@jx3box/jx3box-common/js/user";
export default {
    name: "CommunitySingleLayout",
    props: ["post"],
    data: function () {
        return {
            id: getAppID(),
        };
    },
    computed: {
        isTeammate() {
            return User.isTeammate();
        },
        user_id: function () {
            return this.post ? this.post.user_id : "";
        },
        title() {
            return this.post ? this.post.title : document.title;
        },
        finalPost() {
            return {
                ...this.post,
                post_title: this.post.title,
                ID: this.post.id,
                post_type: "community",
            }
        }
    },
    mounted() {},
    methods: { getAppIcon },
    components: {
        "publish-gate": publishGate,
        AdminDrop,
        TopStickyInfo,
        // PostTopic,
        // Info,
    },
};
</script>

<style lang="less">
.p-community-single {
    .m-community-single__main {
        display: flex;
    }
    .c-main {
        flex: 1;
        margin-left: 0;
        margin-right: 0;
        .m-community-single {
            flex: 1;
        }
        .m-community-single__left {
            flex: 1;
        }
        .m-community-single__right {
            width: 280px;
            box-sizing: border-box;
            padding: 16px;
            background: rgba(250, 250, 250, 1);
            img {
                width: 100%;
                cursor: pointer;
            }
        }
    }
    @media screen and (max-width: @ipad) {
        .c-main {
            .m-community-single__right {
                display: none;
            }
        }
    }
    @media screen and (max-width: @phone) {
        .m-community-single__main {
            display: block;
        }
    }
}
</style>
