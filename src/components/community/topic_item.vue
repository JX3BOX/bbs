<template>
    <div class="m-topic-box" :class="{ is_hight: data.is_hight }">
        <div class="m-topic-top">
            <div class="m-topic-top__time">
                <i :class="getTimeAgo(data.updated_at).icon"></i>
                <span>{{ getTimeAgo(data.updated_at).text }} </span>
            </div>
            <div class="m-topic-top_right">
                <div class="u-item">
                    <img svg-inline src="@/assets/img/community/talk.svg" alt="" />
                    {{ data.reply_count || 0 }}
                </div>
                <div class="u-item">
                    <img svg-inline src="@/assets/img/community/like.svg" alt="" />
                    {{ data.agree_count || 0 }}
                </div>
                <div
                    @click="onCategoryChange(data.category)"
                    :class="`m-topic-category`"
                    :style="`background-color: ${styles.hoverColor};color:${styles.color};`"
                >
                    <img
                        v-svg-inline
                        class="u-icon"
                        :src="require(`@/assets/img/community/category/${styles.icon}.svg`)"
                    />
                    <div>{{ data.category }}</div>
                </div>
            </div>
        </div>
        <div class="u-box m-topic-box__content">
            <div class="u-content-aside">
                <a class="m-topic-title" :href="getPostUrl(data.id)" target="_blank">
                    <img svg-inline v-if="isTop" src="@/assets/img/community/is_top.svg" alt="" srcset="" />
                    <img svg-inline v-if="data.is_star" src="@/assets/img/community/is_star.svg" alt="" srcset="" />
                    <span>{{ data.title }}</span>
                </a>
                <a class="u-cover" :href="getPostUrl(data.id)" target="_blank">
                    <el-image :src="getBanner(data.banner_img)" alt="banner" srcset="" />
                </a>

                <div v-if="data.tags && data.tags.length" class="m-topic-tag">
                    <span v-for="(item, index) in data.tags" :key="index">
                        {{ item }}
                    </span>
                </div>
                <div
                    class="m-topic-collection"
                    v-if="data.collection_id && data.collection.id && data.collection.title"
                >
                    <a :href="`/collection/${data.collection_id}`" target="_blank">
                        <span class="u-label">小册</span>
                        <span class="u-value">{{ data.collection.title }}</span>
                    </a>
                </div>

                <div class="m-topic-userInfo">
                    <a :href="authorLink(data.ext_user_info.id)" target="_blank">
                        <img class="m-topic-userInfo__avatar" :src="showAvatar()" alt="" srcset="" />
                        <span class="m-topic-userInfo__name">{{ data.ext_user_info.display_name }}</span>
                    </a>
                </div>
            </div>

            <a class="u-box-content" :href="getPostUrl(data.id)" target="_blank">
                <a :href="getPostUrl(data.id)" class="m-topic-content" target="_blank">
                    <span class="m-topic-title" target="_blank">
                        <img svg-inline v-if="isTop" src="@/assets/img/community/is_top.svg" alt="" srcset="" />
                        <img svg-inline v-if="data.is_star" src="@/assets/img/community/is_star.svg" alt="" srcset="" />
                        <span>{{ data.title }}</span>
                    </span>
                    <div v-html="introduction"></div>
                </a>
                <div v-if="data.extra_images && data.extra_images.length" class="m-topic-imgs">
                    <a class="u-item" v-for="(item, index) in data.extra_images" :key="index">
                        <img :src="getSquareBanner(item)" />
                    </a>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import { showAvatar, authorLink, getThumbnail } from "@jx3box/jx3box-common/js/utils";
import { __ossMirror, __imgPath, __cdn } from "@jx3box/jx3box-common/data/jx3box";
import { random } from "lodash";
import { getTimeAgo } from "@/utils/dateFormat";

export default {
    props: ["data"],
    inject: ["getCategoryStyle", "onCategoryChange"],
    data() {
        return {};
    },
    computed: {
        styles: function () {
            return this.getCategoryStyle(this.data.category || "");
        },
        introduction: function () {
            const data = this.data;
            if (data.introduction) {
                if (data.introduction.length >= 200) {
                    return data.introduction + "...";
                } else if (data.introduction.length <= 0) {
                    return "......";
                } else {
                    return data.introduction;
                }
            } else {
                return "";
            }
        },
        isTop: function () {
            return this.data.is_top || this.data.is_category_top;
        },
    },
    methods: {
        getTimeAgo,
        authorLink,
        getBanner: function (val) {
            if (val) {
                if (val.indexOf("jx3box.com") >= 0) {
                    return getThumbnail(val, [168 * 2, 88 * 2]);
                } else {
                    return val;
                }
            } else {
                // 从1-39中随机选一个
                const randomNum = random(1, 39);
                // return __imgPath + `image/banner/${appKey}${subtype}` + ".png";
                return __cdn + `design/random_cover/${randomNum}.jpg`;
            }
        },
        getSquareBanner: function (val) {
            if (val.indexOf("jx3box.com") >= 0) {
                return getThumbnail(val, 48 * 2);
            }
            return val;
        },
        showAvatar: function () {
            return showAvatar(this.data?.ext_user_info?.avatar);
        },
        getPostUrl(id) {
            return `/community/${id}`;
        },
    },
};
</script>
