<template>
    <div>
        <div class="m-topic-hot m-topic-box">
            <div class="m-topic-top">
                <div class="m-topic-top__time">
                    <i :class="getTimeAgo(data.updated_at).icon"></i>
                    <span>{{ getTimeAgo(data.updated_at).text }} </span>
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
            <div class="m-topic-box__content">
                <div class="m-topic-hot__left">
                    <a class="u-cover" :href="getPostUrl(data.id)">
                        <img :src="getBanner(data.banner_img)" alt="" srcset="" />
                    </a>
                    <div class="m-topic-imgs">
                        <a
                            :href="getPostUrl(data.id)"
                            class="m-topic-imgs__item"
                            v-for="(item, index) in data.extra_images"
                            :key="index"
                        >
                            <img :src="getSquareBanner(item)" />
                        </a>
                    </div>
                </div>
                <div class="m-topic-hot__right">
                    <h2 class="u-title">
                        <div v-if="data.is_star || data.is_top" class="u-status">
                            <img
                                v-svg-inline
                                v-if="data.is_top"
                                src="@/assets/img/community/is_top.svg"
                                alt=""
                                srcset=""
                            />
                            <img
                                v-svg-inline
                                v-if="data.is_star"
                                src="@/assets/img/community/is_star.svg"
                                alt=""
                                srcset=""
                            />
                        </div>
                        <a :href="getPostUrl(data.id)"> {{ data.title }} </a>
                    </h2>
                    <div v-if="data.tags && data.tags.length" class="m-topic-tag">
                        <span v-for="(item, index) in data.tags" :key="index">
                            {{ item }}
                        </span>
                    </div>
                    <div
                        class="m-topic-collection"
                        v-if="data.collection_id && data.collection.id && data.collection.title"
                    >
                        <a :href="`/collection/${data.collection_id}`">
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
                    <a :href="getPostUrl(data.id)" class="m-topic-content" target="_blank">
                        <div v-html="introduction"></div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getTimeAgo } from "@/utils/dateFormat";
import { random } from "lodash";
import { __ossMirror, __imgPath, __cdn } from "@jx3box/jx3box-common/data/jx3box";
import { showAvatar, authorLink, getThumbnail } from "@jx3box/jx3box-common/js/utils";
export default {
    props: ["data"],
    inject: ["getCategoryStyle", "onCategoryChange"],
    computed: {
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
        styles: function () {
            return this.getCategoryStyle(this.data.category || "");
        },
    },
    methods: {
        getTimeAgo,
        authorLink,
        showAvatar: function () {
            return showAvatar(this.data?.ext_user_info?.avatar);
        },
        getBanner: function (val) {
            if (val) {
                return getThumbnail(val, [336 * 2, 176 * 2]);
            } else {
                // 从1-39中随机选一个
                const randomNum = random(1, 39);
                // return __imgPath + `image/banner/${appKey}${subtype}` + ".png";
                return __cdn + `design/random_cover/${randomNum}.jpg`;
            }
        },
        getPostUrl(id) {
            return `/community/${id}`;
        },
        getSquareBanner: function (val) {
            return getThumbnail(val, 48 * 2);
        },
    },
};
</script>

<style lang="less" scoped>
.m-topic-hot {
    margin-bottom: 24px;
    .m-topic-hot__left {
        min-width: 336px;
        width: 336px;
        padding-right: 24px;
        margin-right: 24px;
        border-right: 1px solid rgba(229, 229, 229, 1);
        display: flex;
        flex-direction: column;
        gap: 8px;
        .u-cover {
            cursor: pointer;
            width: 100%;
            height: 176px;
            overflow: hidden;
            border-radius: 8px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    .m-topic-hot__right {
        width: 100%;
        display: flex;
        flex-direction: column;
        .u-status{
            .flex;
            align-items: center;
        }
        .u-title {
            margin: 0;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
        }
        .u-title > a {
            font-size: 20px;
            cursor: pointer;
            line-height: 32px;
            margin-bottom: 14px;
            // color: #4080ff;
            color:@color-link;
            margin: 0;
            &:hover {
                //color: rgba(255, 64, 128, 1);
                 text-decoration: underline;
            }
        }
        .m-topic-tag {
            margin-bottom: 12px;
        }
        .m-topic-collection {
            margin-bottom: 12px;
        }
        .m-topic-userInfo {
            margin-bottom: 28px;
            .m-topic-userInfo__avatar {
                width: 20px;
                height: 20px;
            }
            .m-topic-userInfo__name {
                font-size: 14px;
            }
        }

        .m-topic-content {
            display: -webkit-box;
            -webkit-line-clamp: 4; /* 控制显示的行数 */
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            flex: 1;
        }
    }
}
</style>
