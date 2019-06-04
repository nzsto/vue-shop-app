<template>
    <div>
        <searchNav :title='title' :iconfont='icon'/>
        <Search/>
        <searchFooter/>
    </div>
</template>

<script>
import Search from "@components/search/search";
import searchNav from "@components/search/searchNav";
import searchFooter from "@components/search/searchFooter";
export default {
    components:{
        Search,
        searchNav,
        searchFooter
    },
    data(){
        return{
            title:'搜索页面',
            icon:{
                fh:'&#xe668;',
                zj:"&#xe611;"
            }
        }
    }
}
</script>

<style>

</style>
