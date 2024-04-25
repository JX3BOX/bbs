<template>
    <div class="m-community-header">
        <div class="m-community-header__hot">
            <a class="u-item" href="">
                <div class="icon"></div>
                <p class="title">论坛</p>
            </a>
            <a class="u-item" href="">
                <div class="icon"></div>
                <p class="title">茶馆</p>
            </a>
        </div>
        <ul class="m-community-header__tags">
            <li v-for="(item, index) in navs" :key="index">
                <a href="">
                    {{ item }}
                    <i v-if="index === navs.length - 1" class="el-icon-arrow-down"></i>
                </a>
            </li>
        </ul>
        <ul class="m-community-header__special">
            <li v-for="(item, index) in channel" :key="index">
                <i class="el-icon-s-promotion"></i>
                <a href="">{{ item }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navs: [
                "求助",
                "闲聊",
                "拜师",
                "找情缘",
                "招人",
                "截图",
                "家园",
                "节日",
                "骚话",
                "故事",

                "讨论",
                "帕鲁",
                "收徒",
                "找队友",
                "表白",
                "同人",
                "侠客",
                "活动",
                "趣图",
                "更多",
            ],
            channel: ["魔盒tivi", "资料片专题", "小册文集", "活动专题"],
        };
    },
};
</script>

<style lang="less">
@import "../../assets/css/community/header.less";
</style>
