<template>
    <ListLayout>
        <Tabs></Tabs>
        <div>Community</div>
    </ListLayout>
</template>

<script>
import ListLayout from "@/layouts/ListLayout.vue";
import Tabs from "@/components/bbs/list_tabs.vue";

export default {
    components: {
        Tabs,
        ListLayout,
    },
};
</script>

<style>
</style>
