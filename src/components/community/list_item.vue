<template>
    <li class="u-item u-community-item">
        <!-- Banner -->
        <a class="u-banner" :href="postLink(item.id)" :target="target">
            <img :src="getBanner(item.banner_img, item.post_subtype)" :key="item.ID"/>
        </a>
        <!-- 标题 -->
        <h2 class="u-post" :class="{ isSticky: item.sticky }">
            <!-- 图标 -->
            <img svg-inline class="u-post-icon" v-if="isTop" src="@/assets/img/community/is_top.svg" alt="" srcset="" />
            <img svg-inline class="u-post-icon" v-if="item.is_star" src="@/assets/img/community/is_star.svg" alt="" srcset="" />

            <!-- 资料片 -->
            <!-- <span class="u-label u-zlp" v-if="item.post_subtype && showSubtype(item.post_subtype)">{{ showSubtype(item.post_subtype) }}</span> -->

            <!-- 标题文字 -->
            <a class="u-title" :style="hightStyle" :href="postLink(item.id)" :target="target">
                {{ item.title || "无标题" }}
            </a>

            <!-- 角标 -->
            <!-- <span class="u-marks" v-if="item.mark && item.mark.length">
                <i v-for="mark in item.mark" class="u-mark" :key="mark">{{ mark | showMark }}</i>
            </span> -->

            <!-- <span class="u-push" v-if="hasPermission">
                <time v-if="showPushDate" class="u-push__time" :class="{'is-recent': isRecent()}">{{ pushDate }} 已推送</time>
                <el-button class="u-push__btn" size="mini" type="warning" @click="onPush" icon="el-icon-s-promotion">推送</el-button>
            </span> -->
        </h2>

        <!-- 字段 -->
        <!-- <div class="u-content u-desc">
            {{ item.post_excerpt || item.title || "这个作者很懒,什么都没有留下" }}
        </div> -->
        <!-- 字段 -->
        <div class="u-content u-desc">
            <!-- {{ item.post_excerpt || item.title || "这个作者很懒,什么都没有留下" }} -->
            <div class="u-metalist u-collection">
                <!-- <strong>小册</strong>
                <em>
                    <template v-if="~~item.collection_id">
                        <a :href="`/collection/${item.collection_id}`" target="_blank"
                            >《{{ item.collection && item.collection.title }}》</a
                        >
                    </template>
                    <template v-else>-</template>
                </em> -->
                <strong>描述</strong>
                <em>
                    <span v-html="item.introduction"></span>
                </em>
            </div>
            <div class="u-metalist u-topics">
                <strong>标签</strong>
                <span v-if="item.color_tag && item.color_tag.length" class="m-topic-tag">
                    <span v-for="(_item, index) in item.color_tag" :key="index" :style="{ backgroundColor: _item.color }">
                        {{ _item.label }}
                    </span>
                </span>
                <template v-else>-</template>
            </div>
        </div>

        <!-- 作者 -->
        <div class="u-misc">
            <img class="u-author-avatar" :src="item.ext_user_info | showAvatar" :alt="item.ext_user_info | showNickname" />
            <a class="u-author-name" :href="item.user_id | authorLink" target="_blank">{{ item.ext_user_info | showNickname }}</a>
            <span class="u-date">
                Updated on
                <time v-if="order == 'update'">{{ item.post_modified | dateFormat }}</time>
                <time v-else>{{ item.updated_at | dateFormat }}</time>
            </span>
        </div>
    </li>
</template>

<script>
import { showAvatar, authorLink, showBanner, buildTarget, postLink } from "@jx3box/jx3box-common/js/utils";
import { __ossMirror, __imgPath, __cdn } from "@jx3box/jx3box-common/data/jx3box";
import { cms as mark_map } from "@jx3box/jx3box-common/data/mark.json";
import {showDate} from '@jx3box/jx3box-common/js/moment.js'
import _bbsSubtypes from "@/assets/data/bbs_subtypes.json";
import { random} from "lodash"
import User from "@jx3box/jx3box-common/js/user";
import dayjs from "dayjs";
import bus from "@/utils/bus";
const appKey = "community";
export default {
    name: "ListItem",
    props: ['item','order'],
    components: {},
    data: function() {
        return {
            target : buildTarget(),

            start: 1,
            end: 39,
        };
    },
    computed: {
        client() {
            return this.item?.client;
        },
        hasPermission() {
            return User.hasPermission('push_banner');
        },
        pushDate({item}) {
            const date = item?.log?.push_at
            return showDate(new Date(date));
        },
        showPushDate() {
            return Boolean(this.item?.log);
        },
        isTop: function () {
            return this.item.is_top || this.item.is_category_top;
        },
        hightStyle: function () {
            if (this.item.is_hight && this.item.hight_color) {
                return {
                    color: this.item.hight_color,
                };
            } else {
                return {};
            }
        },
    },
    watch: {},
    methods: {
        getBanner: function(val, subtype) {
            if (val) {
                return showBanner(val);
            } else {
                // 从1-39中随机选一个
                const randomNum = random(this.start, this.end)
                // return __imgPath + `image/banner/${appKey}${subtype}` + ".png";
                return __cdn + `design/random_cover/${randomNum}.jpg`
            }
        },
        reporterLink: function (val) {
            const prefix = this.client === 'std' ? 'www' : 'origin'
            return`${prefix}:/${appKey}/` + val;
        },
        showSubtype: function (val){
            return _bbsSubtypes[val]?.label || ""
        },
        showDate,
        // 是否为30天内
        isRecent: function () {
            const date = this.item?.log?.push_at
            return dayjs().diff(dayjs(date), "day") < 30;
        },
        onPush() {
            bus.emit("design-task", this.item);
        },
        postLink: function(val) {
            return location.origin + `/${appKey}/` + val;
        },
    },
    filters: {
        authorLink,
        showHighlight: function(val) {
            return val ? `color:${val};font-weight:600;` : "";
        },
        showMark: function(val) {
            return mark_map[val] || val;
        },
        showAvatar: function(userinfo) {
            return showAvatar(userinfo?.avatar);
        },
        showNickname : function (userinfo){
            return userinfo?.display_name || '匿名'
        },
        dateFormat : function (gmt){
            return showDate(new Date(gmt))
        }
    },
    created: function() {},
    mounted: function() {},
};
</script>

<style lang="less">
.u-community-item {
    .u-post {
        .flex;
        .pr;
        align-items: center;
    }
    .u-post-icon {
        width: 18px;
        height: 18px;
        margin-right: 5px;
    }
    .u-topics {
        .flex !important;
        align-items: center;
    }
}
</style>
