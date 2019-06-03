<template>
 <div>
    <header class="icon_header">
        <a href="" class="iconfont iconfanhui"></a>
        <input type="text" class="searchBox" placeholder="输入您需要的商品名称">
        <a href="" class="iconfont iconiconfontzhizuobiaozhun22"></a>
    </header>
    <Search/>
 </div>
</template>

<script>
import Search from '@components/search/search'
export default {
    name:"Search",
    components:{
       Search
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
    height: 90px;
}
.icon_header>a{
    float: left;
    font-size:.4rem;
    color: #fff; 
    margin: 0 .5rem;
    height: 100%;
    line-height: 90px;
}

.icon_header>.searchBox{
    float: left;
    width: 52%;
    height:.6rem;
    margin: 15px .4rem 0;
    border-radius: .1rem;
    font-size:.3rem;
    padding-left:10px
}
</style>