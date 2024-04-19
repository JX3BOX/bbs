<template>
    <div class="m-topic-box">
        <div class="m-topic-top">
            <div class="m-topic-top__time">
                <img class="u-timeload-icon" src="@/assets/img/community/timeload.svg" alt="" srcset="" />
                <span>{{ data.updated_at }}</span>
            </div>
            <div :class="`m-topic-top__category ${data.category === '文章' ? 'u-article' : 'u-taolun'}`">
                <img v-if="data.category === '文章'" src="@/assets/img/community/文章.svg" alt="" srcset="" />
                <img v-else src="@/assets/img/community/讨论.svg" alt="" srcset="" />
                <div>{{ data.category }}</div>
            </div>
        </div>
        <div class="u-box m-topic-box__content">
            <div class="u-content-aside">
                <div class="u-cover" :style="`background-image: url(${data.cover});`"></div>
                <h2 class="u-title">{{ data.title }}</h2>
                <div class="m-topic-tag">
                    <span v-for="(item, index) in data.tag" :key="index">
                        {{ item }}
                    </span>
                </div>
                <div class="m-topic-collection">
                    <div>
                        <span class="u-label">小册</span>
                        <span class="u-value">剑网3攻略合集</span>
                    </div>
                </div>
                <div class="m-topic-userinfo">
                    <img class="m-topic-userinfo__avatar" :src="data.user_info.avatar" alt="" srcset="" />
                    <span class="m-topic-userinfo__name">{{ data.user_info.display_name }}</span>
                </div>
            </div>

            <div class="u-box-content">
                <div class="m-topic-content">
                    {{ data.content }}
                </div>
                <div class="m-topic-imgs">
                    <img class="m-topic-imgs__item" v-for="(item, index) in data.imgs" :key="index" :src="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["data"],
};
</script>
