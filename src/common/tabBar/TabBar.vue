<template>
<div class='z_tabbar'>
    <ul>
        <router-link v-for='(item,index) in navs' :to='item.path' tag='li' :key="index">
            <i class='icon iconfont' v-html='item.icon'></i>
            <span>{{item.title}}</span>
        </router-link>
    </ul>
</div>
</template>
<script>
export default {
    name: 'TabBar',
    data(){
        return{
            navs:[
                {
                    title:'首页',
                    icon:'&#xe606;',
                    path:'/homepage'
                },
                {
                    title:'分类',
                    icon:'&#xe60a;',
                    path:'/sort'
                },
                {
                    title:'收藏',
                    icon:'&#xe607;',
                    path:'/collect'
                },
                {
                    title:'我的',
                    icon:'&#xe60b;',
                    path:'/mine'
                }
            ]
        }
    }
}
</script>

<style scoped>
.z_tabbar{
    width:100%;
    border-top:1px solid #eee;
    background:#fff;
    position:fixed;
    left:0;
    bottom:0;
    z-index: 10;

}
.z_tabbar ul{
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding:.133333rem 0;
}
.z_tabbar li{
    flex: 1;
    text-align:center;

}
.z_tabbar li .icon{
    font-size: .346667rem
}
.z_tabbar li span{
    display:block;
    font-size: .24rem
}
.z_tabbar li.router-link-active{
    color:#fd575c
}
</style>
