<template>
    <div class="m-info">
        <div class="m-info-notice">
            <!-- <span class="u-item" href="/macro/#/">🌈 全新茶馆上线啦，新增若干子分类</span> -->
            <!-- <span class="u-item" href="/macro/#/">🌈 <span>即将上线</span> · 私人宏仓库</span> -->
            <!-- <span class="u-item" href="/macro/#/">✨ <span>即将上线</span> · 云端宏一键同步</span> -->
            <!-- <span class="u-item" href="/house/#/rank">⚽️ <span>即将上线</span> · 云端宏排行榜</span> -->
        </div>

        <!-- <div class="m-info-router">
            <a :class="{on : isIndex}" href="./"><i class="el-icon-receiving"></i></a>
            <a :class="{on : isActive(1)}" href="./?subtype=1"><i class="el-icon-collection"></i></a>
            <a :class="{on : isActive(2)}" href="./?subtype=2"><i class="el-icon-film"></i></a>
            <a :class="{on : isActive(3)}" href="./?subtype=3"><i class="el-icon-video-camera"></i></a>
            <a :class="{on : isActive(4)}" href="./?subtype=4"><i class="el-icon-chat-line-round"></i></a>
        </div> -->
    </div>
</template>

<script>
export default {
    name: "Info",
    props: [],
    data: function() {
        return {};
    },
    computed: {
        subtype : function (){
            return this.$store.state.subtype
        },
        isIndex : function (){
            return !this.subtype
        }
    },
    methods: {
        isActive : function (subtype){
            return this.subtype == subtype
        }
    },
    mounted: function() {}
};
</script>

<style lang="less">
@import '../assets/css/info.less';
</style>
