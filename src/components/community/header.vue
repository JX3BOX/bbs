<template>
    <div class="m-community-header">
        <div class="m-lside">
            <a class="m-lside__item" href="">
                <div class="icon"></div>
                <p class="title">论坛</p>
            </a>
            <a class="m-lside__item" href="">
                <div class="icon"></div>
                <p class="title">茶馆</p>
            </a>
        </div>
        <div class="m-rside">
            <ul class="m-rside__navs">
                <li v-for="(item, index) in navs" :key="index">
                    <a href="">
                        {{ item }}
                    </a>
                </li>
            </ul>
            <ul class="m-rside__right">
                <li v-for="(item, index) in channel" :key="index">
                    <i class="el-icon-s-promotion"></i>
                    <a href="">{{ item }}</a>
                </li>
            </ul>
        </div>
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
                "知识",
                "咨询",
                "生活",
            ],
            channel: ["专栏", "活动", "直播", "课堂", "新歌热榜", "社区中心"],
        };
    },
};
</script>

<style lang="less">
@import "../../assets/css/community/header.less";
</style>
