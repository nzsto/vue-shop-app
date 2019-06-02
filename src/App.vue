<template>
   <div id="app">
     <Topheader v-if="$route.meta.TopheaderFlag"/>    
        <component :is="pageCom"></component>
        <router-view></router-view>
     
     <Tabbar @handle="pageToggle"/>
   </div>
</template>
<script>
import TabBar from "@common/tabBar/TabBar"
export default {
    name:"App",
    components:{
        TabBar
    }
}
</script>