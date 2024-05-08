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
            :subtypeMap="subtypeMap"
        >
            <publish-gate slot="op-append" />
            <template #op-prepend>
                <AdminDirectMessage
                    :user-id="user_id"
                    :sourceId="String(post.id)"
                    sourceType="community"
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
                        <PostTopic v-if="post.id" type="community" :id="~~post.id" />
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
import PostTopic from "@jx3box/jx3box-common-ui/src/single/PostTopic.vue";

export default {
    name: "Single",
    props: ["post"],
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
            return this.post ? this.post.user_id : ""
        },
        title() {
            return this.post ? this.post.post_title : document.title;
        },
    },
    methods: { getAppIcon },
    components: {
        "publish-gate": publishGate,
        AdminDirectMessage,
        PostTopic
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
