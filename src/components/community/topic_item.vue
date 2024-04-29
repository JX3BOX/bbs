<template>
    <div class="m-topic-box">
        <div class="m-topic-top">
            <div class="m-topic-top__time">
                <img class="u-timeload-icon" src="@/assets/img/community/timeload.svg" alt="" srcset="" />
                <span>{{ getTimeAgo(data.updated_at) }} </span>
            </div>
            <div :class="`m-topic-top__category`" :style="`background-color: ${getRandomMacaronColor()};`">
                <!-- <img v-if="data.category === '文章'" src="@/assets/img/community/文章.svg" alt="" srcset="" /> -->
                <!-- <img v-else src="@/assets/img/community/讨论.svg" alt="" srcset="" /> -->
                <div>{{ data.category }}</div>
            </div>
        </div>
        <div class="u-box m-topic-box__content">
            <div class="u-content-aside">
                <a class="u-cover" :href="getPostUrl(data.id)" target="_blank">
                    <img :src="getBanner(data.banner_img)" alt="" srcset="" />
                </a>
                <a :href="getPostUrl(data.id)" class="u-title">{{ data.title }}</a>
                <div v-if="data.tags && data.tags.length" class="m-topic-tag">
                    <span v-for="(item, index) in data.tags" :key="index">
                        {{ item }}
                    </span>
                </div>
                <a
                    v-if="data.collection_id && data.collection.id && data.collection.title"
                    class="m-topic-collection"
                    :href="`/collection/${data.collection_id}`"
                >
                    <div>
                        <span class="u-label">小册</span>
                        <span class="u-value">{{ data.collection.title }}</span>
                    </div>
                </a>
                <a class="m-topic-userinfo" :href="authorLink(data.ext_user_info.id)">
                    <img class="m-topic-userinfo__avatar" :src="showAvatar()" alt="" srcset="" />
                    <span class="m-topic-userinfo__name">{{ data.ext_user_info.display_name }}</span>
                </a>
            </div>

            <div class="u-box-content">
                <div class="m-topic-content">
                    <a :href="getPostUrl(data.id)" target="_blank">
                        {{ data.introduction }}
                    </a>
                </div>
                <div class="m-topic-imgs">
                    <a
                        :href="getPostUrl(data.id)"
                        class="m-topic-imgs__item"
                        v-for="(item, index) in data.extra_images"
                        :key="index"
                    >
                        <img :src="getBanner(item)" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { showAvatar, authorLink, showBanner } from "@jx3box/jx3box-common/js/utils";
import { __ossMirror, __imgPath, __cdn } from "@jx3box/jx3box-common/data/jx3box";
import { random } from "lodash";
import { getTimeAgo } from "@/utils/dateFormat";

const macarons = [
    "#FB6571",
    "#FFDAE1", // 柔和的粉色
    "#D1FFDA", // 浅绿色
    "#A7FED1", // 柔和的绿色
    "#D1FFDA", // 浅蓝色
    "#A7E1FD", // 柔和的蓝色
    "#E1D1FD", // 浅紫色
    "#FDD1E1", // 柔和的紫色
    "#FED1A7", // 浅黄色
    "#FED1A7", // 柔和的黄色
    "#E1D1A7", // 浅棕色
];
export default {
    props: ["data"],
    data() {
        return {};
    },
    methods: {
        getTimeAgo,
        authorLink,
        getRandomMacaronColor: function () {
            const randomIndex = Math.floor(Math.random() * macarons.length);
            return macarons[randomIndex];
        },
        getBanner: function (val) {
            if (val) {
                return showBanner(val);
            } else {
                // 从1-39中随机选一个
                const randomNum = random(1, 39);
                // return __imgPath + `image/banner/${appKey}${subtype}` + ".png";
                return __cdn + `design/random_cover/${randomNum}.jpg`;
            }
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
