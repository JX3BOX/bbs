<template>
    <div id="app" class="p-community-single">
        <Header></Header>
        <Breadcrumb
            name="竹林茶馆"
            slug="bbs"
            :publishEnable="false"
            :adminEnable="true"
            :feedbackEnable="true"
            :crumbEnable="true"
            :showExtend="true"
            :subtypeMap="subtypeMap"
        >
            <publish-gate slot="op-append" />
            <template #op-prepend>
                <AdminDirectMessage
                    :user-id="user_id"
                    :sourceId="String(post.ID)"
                    :sourceType="post.post_type"
                ></AdminDirectMessage>
            </template>
            <template #title>
                <span>
                    {{ title }}
                </span>
            </template>
        </Breadcrumb>
        <div class="m-community-single__main">
            <Main :withoutRight="false">
                <slot></slot>
                <RightSidebar :show-toggle="true">
                    <Side :id="id" class="m-extend" />
                </RightSidebar>
                <Footer></Footer>
            </Main>
            <div class="m-community-single__right"></div>
        </div>
    </div>
</template>

<script>
import Side from "@/components/bbs/single_side.vue";
import publishGate from "@/components/publish_gate.vue";
import { getAppIcon, getAppID } from "@jx3box/jx3box-common/js/utils";
import AdminDirectMessage from "@jx3box/jx3box-common-ui/src/bread/AdminDirectMessage.vue";
export default {
    name: "Single",
    props: [],
    data: function () {
        return {
            id: getAppID(),

            subtypeMap: {
                1: "攻略心得",
                2: "萌新指南",
                3: "江湖故事",
                4: "煮酒论剑",
            },
        };
    },
    computed: {
        user_id: function () {
            return this.$store.state.user_id;
        },
        post: function () {
            return this.$store.state.post;
        },
        title() {
            return this.post.post_title || document.title;
        },
    },
    methods: { getAppIcon },
    components: {
        Side,
        "publish-gate": publishGate,
        AdminDirectMessage,
    },
};
</script>

<style lang="less">
.p-community-single {
    .m-community-single__main {
        display: flex;
        gap: 24px;
    }
    .c-main {
        flex: 1;
        margin-left: 0;
    }
    .m-community-single__right {
        width: 280px;
        background: rgba(250, 250, 250, 1);
    }
}
</style>
