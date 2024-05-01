<template>
    <div class="m-community-header">
        <div class="m-community-header__hot">
            <a class="u-publish" href="/publish/#/community" target="_blank">发布</a>
        </div>
        <ul class="m-community-header__tags">
            <li
                :class="selectedCategory === item.value && 'active'"
                v-for="(item, index) in navs"
                :key="index"
                @click="handleChange(item)"
            >
                <a :href="item.href || 'javascript:;'">
                    {{ item.lable }}
                    <i v-if="index === navs.length - 1" class="el-icon-arrow-down"></i>
                </a>
            </li>
        </ul>
        <div class="m-community-header__special-box">
            <div class="m-community-header__special-list">
                <a v-for="(item, index) in channel" :key="index" :href="item.href" target="_blank">
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
    props: ["onCategoryChange"],
    data() {
        return {
            selectedCategory: "",
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

                this.navs = data.map((item) => {
                    return {
                        value: item,
                        lable: item,
                    };
                }) || [];
            });
        },
        handleChange: function (item) {
            if (!item.href) {
                let selectedCategory = "";
                if (this.selectedCategory != item.value) {
                    selectedCategory = item.value;
                }
                this.selectedCategory = selectedCategory;
                this.onCategoryChange(selectedCategory);
            }
        },
    },
};
</script>

<style lang="less">
@import "../../assets/css/community/header.less";
</style>
