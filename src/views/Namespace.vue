<template>
    <div class="v-namespace">
        <!-- 搜索 -->
        <div
            class="m-archive-search m-namespace-search"
            slot="search-before"
            key="namespace-search"
        >
            <el-input placeholder="请输入搜索内容" v-model="search" class="input-with-select">
                <span slot="prepend">关键词</span>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <!-- tab切换 -->
        <el-tabs class="m-namespace-tab" v-model="type">
            <el-tab-pane label="全部" name="all"></el-tab-pane>
            <el-tab-pane
                v-for="item in types"
                :label="item.label"
                :key="item.value"
                :name="item.value"
            ></el-tab-pane>
        </el-tabs>
        <el-alert v-if="query" type="warning" show-icon class="m-namespace-warning">
            <span slot="title">
                <b>{{ query }}</b> 铭牌不存在或正在审核中
            </span>
        </el-alert>
        <!-- 过滤 -->
        <div class="m-namespace-filter">
            <div class="m-namespace-add">
                <a
                    :href="publish_link"
                    class="u-publish el-button el-button--primary el-button--small"
                >+ 注册铭牌</a>
                <a
                    href="/publish/#/bucket/namespace"
                    class="u-publish el-button el-button--primary el-button--small"
                >
                    <span class="el-icon-receiving"></span> 我的铭牌
                </a>
                <!-- <a
                    :href="buy_link"
                    class="u-publish el-button el-button--primary el-button--small"
                >
                    <span class="el-icon-shopping-cart-2"></span> 0.99元特惠活动
                </a>-->
                <div class="m-namespace-total">
                    当前共
                    <b>{{ total }}</b>个铭牌
                </div>
            </div>
            <div class="m-namespace-order">
                <orderBy class="u-item" @filter="changeOrder"></orderBy>
            </div>
        </div>

        <!-- 列表内容 -->
        <div class="m-namespace-list" v-if="list">
            <el-row :gutter="20">
                <el-col :span="12" v-for="(item, index) in list" :key="index">
                    <namespace-item :data="item" />
                </el-col>
            </el-row>
        </div>
        <!-- 无数据 -->
        <div class="m-namespace-null" v-else>
            <el-alert title="没有相关条目" type="info" show-icon></el-alert>
        </div>
        <!-- 分页 -->
        <div class="m-namespace-pages">
            <el-pagination
                background
                layout="total, prev, pager, next,jumper"
                :hide-on-single-page="true"
                :page-size="per"
                :total="total"
                :current-page.sync="page"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
import namespaceItem from "@/components/namespace_item";
import Namespace_item from "../components/namespace_item.vue";
import { getNamespaceList } from "@/service/namespace.js";
import { publishLink } from "@jx3box/jx3box-common/js/utils.js";

export default {
    name: "Namespace",
    props: [],
    data: function () {
        return {
            type: "all",
            types: [
                { label: "玩家", value: "player" },
                { label: "团队", value: "team" },
                { label: "系统", value: "system" },
                { label: "自定义", value: "custom" },
            ],
            list: "",
            per: 24,
            total: 1,
            page: 1,
            order: "update",
            search: "",
            query: "",
        };
    },
    computed: {
        params: function () {
            let _params = {
                // user_id
                key: this.search,
                source_type: this.type == "all" ? "" : this.type,
                // source_id
                page: this.page,
                limit: this.per,
            };
            if (this.order == "podate") {
                _params.sort = {
                    created: 0,
                };
            } else {
                _params.sort = {
                    updated: 1,
                };
            }
            return _params;
        },
        publish_link: function () {
            return publishLink("namespace");
        },
        buy_link: function () {
            return "/vip/namespace?from=bbs_namespace";
        },
    },
    methods: {
        loadNamespaceList: function () {
            getNamespaceList(this.params).then((res) => {
                this.list = res.data.data.data || {};
                this.total = res.data.data.total;
            });
        },
        changeOrder: function (o) {
            this.order = o.val;
        },
    },
    watch: {
        type: function () {
            this.page = 1;
        },
        params: {
            deep: true,
            immediate: true,
            handler: function (newVal) {
                this.query = "";
                this.loadNamespaceList();
            },
        },
    },
    filters: {},
    created: function () {
        this.query = this.$route.query.namespace;
    },
    components: {
        "namespace-item": namespaceItem,
    },
};
</script>

<style lang="less">
@import "../assets/css/namespace.less";
</style>
