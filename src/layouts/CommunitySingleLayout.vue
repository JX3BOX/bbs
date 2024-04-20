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
        <div>
            <Main :withoutRight="false">
                <div class="m-community-single__main">
                    <slot></slot>
                    <div class="m-community-single__right">
                        <a href="">
                            <img
                                src="https://img.js.design/assets/img/6619361efdbe3d13f2374668.png#1fce3e04d726b880da75046bfabaf6dc"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
                <Footer></Footer>
            </Main>
        </div>
    </div>
</template>

<script>
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
        margin-right: 0;
        .m-community-single {
            flex: 1;
        }
        .m-community-single__right {
            width: 280px;
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
}
</style>
