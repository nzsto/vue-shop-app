<template>
    <div class="header">
        <i v-html='iconfont.fh' class="iconfont"></i>
        <h2>{{title}}</h2>
        <span v-html='iconfont.zj' class="iconfont"></span>
    </div>
</template>

<script>
export default {
    props:['title','iconfont']
}
</script>

<style scoped>
.header {
    width: 100%;
    height: .9rem;
    position:fixed;
    display: flex;
    top:0;
    z-index: 9;
    background: linear-gradient(to left, #FA4DBE 0, #FBAA58 100%);
}

.header>h2 {
    width: 100%;
    height: .9rem;
    text-align: center;
    line-height: .9rem;
    font-size: .3rem;
    color: #fff;
    font-weight: normal;
}
.header>i,.header>span{
    padding-top: 3.5%;
    color: #fff;
    font-size: .4rem;
}
.header>i{
     padding-left: .3rem;
}
.header>span{
     padding-right: .3rem;
}
</style>
