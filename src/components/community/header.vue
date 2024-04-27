<template>
    <div class="m-community-header">
        <div class="m-community-header__hot">
            <el-button type="primary">发布</el-button>
            <!-- <a class="u-item" href="">
                <div class="icon"></div>
                <p class="title">论坛</p>
            </a>
            <a class="u-item" href="">
                <div class="icon"></div>
                <p class="title">茶馆</p>
            </a> -->
        </div>
        <ul class="m-community-header__tags">
            <li v-for="(item, index) in navs" :key="index">
                <a :href="item.href || 'javascript:;'">
                    {{ item.lable }}
                    <i v-if="index === navs.length - 1" class="el-icon-arrow-down"></i>
                </a>
            </li>
        </ul>
        <div class="m-community-header__special-box">
            <div class="m-community-header__special-list">
                <a v-for="(item, index) in channel" :key="index" :href="item.href">
                    <i class="el-icon-s-promotion"></i>
                    <span>{{ item.name }}</span>
                </a>
            </div>
            <img class="ewm" src="@/assets/img/community/ewm.jpeg" alt="" srcset="" />
        </div>
    </div>
</template>

<script>
import { getTopicBucket } from "@/service/community";
export default {
    data() {
        return {
            navs: [],
            channel: [
                {
                    name: "活动专题",
                    href: "/event",
                },
                {
                    name: "资料片专题",
                    href: "/topic",
                },
            ],
        };
    },
    mounted() {
        this.getTopicBucket();
    },
    methods: {
        getTopicBucket() {
            getTopicBucket({ type: "community" }).then((res) => {
                const data = res.data.data?.map((item) => item.name) || [];

                let navs = data.map((item) => {
                    return {
                        value: item,
                        lable: item,
                    };
                });
                this.navs = [
                    ...navs,
                    {
                        value: "骚话",
                        lable: "骚话",
                        href: "/joke",
                    },
                    {
                        value: "趣图",
                        lable: "趣图",
                        href: "/emotion",
                    },
                    {
                        value: "故事",
                        lable: "故事",
                        href: "/bbs",
                    },
                    {
                        value: "更多",
                        lable: "更多",
                    },
                ];
            });
        },
    },
};
</script>

<style lang="less">
@import "../../assets/css/community/header.less";
</style>
