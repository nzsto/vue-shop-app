<template>
 <div>
  
    <header class="icon_header">
            <router-link v-html='icon.fh' class="iconfont" tag="a" to="/homePage"></router-link>
            <input type="text" class="searchBox" placeholder="输入您需要的商品名称">
            <router-link v-html='icon.zj' class="iconfont" tag="a" to="/footermark"></router-link>
        </header>
    <SearchGoods/>
 </div>
</template>

<script>
import SearchGoods from '@components/search/search'
export default {
    name:"Search",
    data(){
        return{
            icon:{
                fh:'&#xe668;',
                zj:"&#xe60c;"
            }
        }
    },
    components:{
       SearchGoods
    }
}
</script>
<style scoped>
    .icon_header{
    position: fixed;
    z-index: 160;
    width: 100%;
    vertical-align:middle;
    border-bottom: solid 1px #ddd;
    background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
    border-bottom-color: transparent;
    height: .9rem;
}
.icon_header>a{
    float: left;
    font-size:.4rem;
    color: #fff; 
    margin: 0 .4rem;
    height: 100%;
    line-height: .9rem;
}

.icon_header>.searchBox{
    float: left;
    width: 56%;
    height:.6rem;
    margin: .15rem .4rem 0;
    border-radius: .1rem;
    font-size:.3rem;
    padding-left:.1rem;
    border:none;
    border-radius:.1rem
}
</style>