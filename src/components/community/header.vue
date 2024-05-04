<template>
    <div class="m-community-header">
        <div class="m-community-publish">
            <a class="u-publish" href="/publish/#/community" target="_blank"> </a>
        </div>
        <div class="m-community-header__tags">
            <a
                :href="item.href || 'javascript:;'"
                :class="`${selectedCategory === item.value && 'active'} u-item`"
                v-for="(item, index) in showNavs"
                :key="index"
                @click="handleChange(item)"
                :style="{
                    '--hover-bg-color': item.hoverColor,
                    '--hover-color': item.color,
                    '--active-color': item.activeColor || '#fff',
                }"
            >
                <span> {{ item.lable }}</span>
                <div class="u-icon" v-html="item.icon"></div>
                <div v-if="item.mark" class="u-mark" v-html="item.mark" :style="{ color: item.activeColor }"></div>
                <img v-if="item.markGif" class="u-mark u-markgif" :src="item.markGif" />
            </a>
            <el-dropdown trigger="click" :disabled="morenNavs.length === 0">
                <a href="javascript:;" :class="`u-item u-more ${morenNavs.length === 0 && 'is-disabled'}`">
                    <span>更多</span>
                    <i class="el-icon-arrow-down"></i>
                </a>
                <el-dropdown-menu slot="dropdown" class="m-community-dropdown">
                    <el-dropdown-item
                        v-for="(item, index) in morenNavs"
                        :key="index"
                        :style="{
                            '--hover-bg-color': item.hoverColor,
                            '--hover-color': item.color,
                            '--active-color': item.activeColor || '#fff',
                        }"
                        class="m-community-dropdown__item"
                    >
                        <a
                            :href="item.href || 'javascript:;'"
                            :class="`${selectedCategory === item.value && 'active'} u-item`"
                            @click="handleChange(item)"
                        >
                            <span> {{ item.lable }}</span>
                            <div class="u-icon" v-html="item.icon"></div>
                        </a>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="m-community-header__special-box">
            <div class="m-community-header__special-list">
                <a href="/event" target="_blank">
                    <img src="@/assets/img/community/event.svg" alt="活动专题" />
                    <span>活动专题</span>
                </a>
                <a href="/topic" target="_blank">
                    <img src="@/assets/img/community/topic.svg" alt="资料片专题" />
                    <span>资料片专题</span>
                </a>
            </div>
            <img class="u-ewm" src="@/assets/img/community/ewm.png" alt="" srcset="" />
        </div>
    </div>
</template>

<script>
import { getTopicBucket } from "@/service/community";
export default {
    props: ["onCategoryChange", "getCategoryStyle"],
    data() {
        return {
            selectedCategory: "",
            navs: [],
            showNavs: [],
            morenNavs: [],
        };
    },
    mounted() {
        this.getTopicBucket();
    },
    watch: {
        navs: function () {
            const len = 17;
            const navs = [...this.navs];
            this.showNavs = navs.slice(0, len);
            console.log(this.showNavs, navs);
            this.morenNavs = navs.slice(len);
        },
    },
    methods: {
        getTopicBucket() {
            getTopicBucket({ type: "community" }).then((res) => {
                const data = res.data.data?.map((item) => item.name) || [];
                this.navs =
                    data.map((item) => {
                        return {
                            value: item,
                            lable: item,
                            ...this.getCategoryStyle(item),
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
