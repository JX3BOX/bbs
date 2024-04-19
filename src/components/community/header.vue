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
                "番剧",
                "国创",
                "综艺",
                "动画",
                "鬼畜",
                "舞蹈",
                "娱乐",
                "科技",
                "美食",
                "汽车",
                "运动",
                "电影",
                "电视剧",
                "纪录片",
                "游戏",
                "音乐",
                "影视",
                "骚话",
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
