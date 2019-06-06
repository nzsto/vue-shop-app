<template>
    <div id="app">
        <keep-alive>
            <router-view v-if="$route.meta.keep_alive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keep_alive"></router-view>

        <TabBar v-if="$route.meta.TabBarFlag" />
    </div>
</template>
<script>
    import TabBar from "@common/tabBar/TabBar"

    export default {
        name: "App",
        components: {
            TabBar,

        }
    }
</script>
<style>

</style>