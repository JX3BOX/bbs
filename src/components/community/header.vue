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
                @mouseenter="hover(item)"
                @mouseleave="unhover(item)"
            >
                <span>{{ item.lable }}</span>
                <img v-svg-inline class="u-icon" :src="require(`@/assets/img/community/category/${item.icon}`)" />

                <img
                    v-if="item.mark && item.mark.indexOf('.svg') >= 0"
                    v-svg-inline
                    class="u-mark"
                    :src="require(`@/assets/img/community/category/${item.mark}`)"
                />

                <img
                    v-else-if="item.mark"
                    :v-svg-inline="item.mark.indexOf('.svg') >= 0"
                    class="u-mark"
                    :src="require(`@/assets/img/community/category/${item.mark}`)"
                />
            </a>
            <el-dropdown trigger="click" size="small" :disabled="morenNavs.length === 0">
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
                            <img
                                v-svg-inline
                                class="u-icon"
                                :src="require(`@/assets/img/community/category/${item.icon}`)"
                            />
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
export default {
    props: ["onCategoryChange", "categoryList"],
    data() {
        return {
            selectedCategory: "",
            navs: [],
            showNavs: [],
            morenNavs: [],
            hoveredItem: null,
        };
    },
    mounted() {},
    watch: {
        categoryList: function () {
            const len = 19;
            const navs = [...this.categoryList];
            this.showNavs = navs.slice(0, len);
            this.morenNavs = navs.slice(len);
        },
    },
    methods: {
        hover(item) {
            item.lable = item.remark || item.name;
        },
        unhover(item) {
            item.lable = item.name;
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
