<template>
    <div class="m-search-wrapper">
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
    </div>
</template>

<script>
export default {
    name: "CommunitySearch",
    data() {
        return {
            searchList: [],
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
            if (this.search) {
                this.$emit("search", {
                    q: this.search,
                });
            }
        },
        onBlur() {
            if (!this.search) {
                this.isFocus = false;
            }
        },
        closeSearch() {
            this.search = "";
            this.isFocus = false;
        },
    },
};
</script>

<style lang="less" scoped>
.m-search-wrapper {
    padding: 12px 32px;
}
.m-community-search {
    width: 180px;
    height: 48px;
    position: relative;
    border-radius: 40px;
    border: 2px solid rgba(64, 128, 255, 1);
    transition: 0.4s;
    box-sizing: border-box;
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
            margin-left: 8px;
            white-space: nowrap;
            display: none;
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
        width: 120px;
        left: calc(100% - 115px);
        .el-icon-search {
            padding-left: 15px;
        }
        .u-button-text {
            display: block;
            width: 80px;
            opacity: 1;
        }
    }
    .m-search-input {
        padding-left: 0;
        .u-input {
            padding: 0 24px;
        }
    }
}
@media screen and (max-width: 720px) {
    .m-search-wrapper {
        padding: 12px 15px;
    }
    .m-community-search.is-focus {
        width: 100%;
    }
}
// ---list

@bg: #f6f8fa;
@visited: #05037b;
@pink: #f39;
@desc: #555;
@gray: #888;
@space: 20px;
@ipad: 1024px;
@ipad-y: 767px;

.m-search_all {
    .r(4px);
    .mt(20px);
    box-shadow: 0 0 5px #dcdfe6;
    background-color: #fff;
    padding: 20px;
    .m-result {
        padding: 0 20px;
        .u-item {
            .w(100%);
            .flex;
            .mb(20px);
            gap: 10px;
            justify-content: space-between;
            .u-img {
                .r(10px);
                .h(48px);
                max-width: 120px;
            }
            .u-info {
                .flex;
                flex-direction: column;
            }
        }
    }
}
// --item
.m-post {
    a {
        color: @color-link;
    }
    .u-list {
        padding: 0;
        margin: 0;
    }

    .u-item {
        margin-bottom: @space;
        list-style: none;
        *zoom: 1;
        // &:after {
        //     content: "";
        //     display: table;
        //     clear: both;
        // }
    }

    .u-link {
        .mt(5px);
        display: block;
    }

    .u-title {
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.6px;
        b {
            color: @pink;
        }
        &:hover .u-text {
            box-shadow: 0 1px 0 @color-link;
        }
    }
    .u-link {
        font-size: 12px;
        line-height: 2;
        color: @gray;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .u-date {
        background-color: @bg;
        color: @pink;
        border-radius: 2px;
        padding: 2px 5px;
        font-weight: 600;
    }

    .u-pic {
        float: left;
        margin-right: 10px;
    }

    .u-desc {
        font-size: 13px;
        line-height: 1.6;
        color: @desc;
        letter-spacing: 0.6px;
        b {
            color: @pink;
        }
    }
    .u-client {
        font-style: normal;
        font-size: 12px;
        padding: 2px 6px;
        border-radius: 3px;
        margin-right: 5px;
    }

    .u-type {
        margin-left: 10px;
    }
}
</style>
