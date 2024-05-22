<template>
    <div :class="`m-community-search ${isFocus && 'is-focus'}`">
        <div class="m-search-button" @click="onSearch">
            <i class="el-icon-search"></i>
            <span class="u-button-text">搜一下</span>
        </div>
        <div class="m-search-input">
            <input
                ref="input"
                v-model="search"
                @blur="onBlur"
                @focus="isFocus = true"
                class="u-input"
                placeholder="查找帖子"
                type="text"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "CommunitySearch",
    data() {
        return {
            isFocus: false,
            search: "",
        };
    },
    methods: {
        onSearch() {
            if (!this.isFocus) {
                this.$refs.input.focus();
                return;
            }
        },
        onBlur() {
            if (!this.search) {
                this.isFocus = false;
            }
        },
    },
};
</script>

<style lang="less" scoped>
.m-community-search {
    width: 180px;
    height: 48px;
    margin: 12px 32px;
    position: relative;
    border-radius: 40px;
    border: 2px solid rgba(64, 128, 255, 1);
    transition: 0.4s;
    .m-search-button {
        position: absolute;
        transition: 0.3s;
        left: -2px;
        top: 0;
        width: 60px;
        border-radius: 40px;
        height: 100%;
        background: rgba(64, 128, 255, 1);
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        z-index: 10;
        cursor: pointer;
        &:hover {
            opacity: 0.9;
        }
        .u-button-text {
            width: 0;
            opacity: 0;
            margin-left: 4px;
            white-space: nowrap;
            visibility: hidden;
        }
    }
    .m-search-input {
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 0;
        padding-left: 60px;
        box-sizing: border-box;
        .u-input {
            width: 100%;
            height: 100%;
            border-radius: 40px;
            font-size: 18px;
            border: 0;
            box-sizing: border-box;
            padding: 0 12px;
        }
    }
}
.m-community-search.is-focus {
    width: 720px;
    .m-search-button {
        width: 136px;
        left: calc(100% - 134px);
        .u-button-text {
            width: 80px;
            opacity: 1;
            visibility: inherit;
        }
    }
    .m-search-input {
        padding-left: 0;
        .u-input {
            padding: 0 24px;
        }
    }
}
</style>
