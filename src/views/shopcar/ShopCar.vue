<template>
    <div class="shopcar">
        <Topnav :title='title' :iconfont='icon'/>
        <Top/>
        <Content/>
        <Footer/>
    </div>
</template>
<script>
import Vuex from "vuex";
import Topnav from "@components/shopcar/topnav";
import Content from "@components/shopcar/content";
import Top from "@components/shopcar/top";
import Footer from "@components/shopcar/footer";
export default {
    data(){
        return{
            title:'我的购物车',
            icon:{
                fh:'&#xe611;',
                zj:"&#xe60c;"
            }
        }
    },
    components:{
        Topnav,
        Top,
        Content,
        Footer
    }
}
</script>
<style scoped>
.shopcar{
    padding-top: .9rem;
    font-size: .3rem;
}
</style>
