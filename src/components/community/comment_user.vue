<template>
    <div class="m-comment-item__user">
        <div class="u-userinfo">
            <img class="u-avatar" :src="userInfo.avatar" alt="avatar" />
            <div class="u-info">
                <a class="u-name" :href="authorLink(userInfo.id)">{{ userInfo.display_name }}</a>
                <p class="u-other">
                    <span class="u-lv">Lv.4</span>
                    <span class="u-vip">PRO</span>
                </p>
                <p class="u-medals">
                    <el-tooltip class="item" effect="dark" content="达摩洞百强团队成员" placement="top">
                        <img
                            src="https://img.js.design/assets/img/6618ebca760483d015860819.gif#dda55e95966e0b843f6012575f3a9890"
                            alt=""
                        />
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="达摩洞百强团队成员" placement="top">
                        <img
                            src="https://img.js.design/assets/img/6618ebca760483d015860819.gif#dda55e95966e0b843f6012575f3a9890"
                            alt=""
                        />
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="达摩洞百强团队成员" placement="top">
                        <img
                            src="https://img.js.design/assets/img/6618ebca760483d015860819.gif#dda55e95966e0b843f6012575f3a9890"
                            alt=""
                        />
                    </el-tooltip>
                </p>
            </div>
        </div>

        <img
            class="u-honour"
            src="https://img.js.design/assets/img/6618ec744eb2224151864807.png#f4663c4b17ba6d2588ba059d26156ad9"
            alt=""
        />
        <p class="u-desc">寒蝉凄切，对长亭晚，骤雨初歇。</p>
        <div class="u-btns">
            <el-button size="small" type="primary" icon="el-icon-plus" class="u-follow">关注</el-button>
            <el-button size="small" icon="el-icon-message">私信</el-button>
        </div>
    </div>
</template>

<script>
import { authorLink } from "@jx3box/jx3box-common/js/utils";
export default {
    props: {
        userInfo: {
            type: Object,
            default: function () {
                return { display_name: "", avatar: "" };
            },
        },
    },
    methods: {
        authorLink,
    },
};
</script>

<style lang="less">
@import "~@/assets/css/community/comment_user.less";
</style>
