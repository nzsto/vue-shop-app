<template>
<div class="z_menu">
    <div class="z_menu_l">
        <a class="active" href="">女装</a>
        <a href="">男装</a>
        <a href="">女装</a>
        <a href="">男装</a>
        <a href="">女装</a>
        <a href="">男装</a>
        <a href="">女装</a>
        <a href="">男装</a>
        <a href="">女装</a>
        <a href="">男装</a>
        <a href="">女装</a>
        <a href="">男装</a>
        <a href="">女装</a>
        <a href="">男装</a>
        <a href="">女装</a>
        <a href="">男装</a>
        <a href="">女装</a>
        <a href="">男装</a>
        <a href="">女装</a>
        <a href="">男装</a>
        <a href="">女装</a>
        <a href="">男装</a>
        <a href="">女装</a>
        <a href="">男装</a>
        <a href="">女装</a>
        <a href="">男装</a>
        <a href="">女装</a>
        <a href="">男装</a>
    </div>
    <div class="z_menu_r">
        <ul>
            <li><a href=""><img src="../../../public/images/xxx.webp"><span>T恤/短袖</span></a></li>
            <li><a href=""><img src="../../../public/images/xxx.webp"><span>T恤/短袖</span></a></li>
            <li><a href=""><img src="../../../public/images/xxx.webp"><span>T恤/短袖</span></a></li>
            <li><a href=""><img src="../../../public/images/xxx.webp"><span>T恤/短袖</span></a></li>
            <li><a href=""><img src="../../../public/images/xxx.webp"><span>T恤/短袖</span></a></li>
            <li><a href=""><img src="../../../public/images/xxx.webp"><span>T恤/短袖</span></a></li>
            <li><a href=""><img src="../../../public/images/xxx.webp"><span>T恤/短袖</span></a></li>
            <li><a href=""><img src="../../../public/images/xxx.webp"><span>T恤/短袖</span></a></li>
            <li><a href=""><img src="../../../public/images/xxx.webp"><span>T恤/短袖</span></a></li>
            <li><a href=""><img src="../../../public/images/xxx.webp"><span>T恤/短袖</span></a></li>
        </ul>
    </div>
</div>
</template>
<style scoped>
.z_menu{
    overflow: hidden;
    margin-top: .953rem;
    position: absolute;
    width:100%;
    display:flex;
}

.z_menu .z_menu_l{
    width:25%;
    height:100%;
    text-align:center;
    background:#f5f5f5;
    overflow-y:hidden;
}
.z_menu .z_menu_l a{
    display: block;
    width:100%;
    line-height: .88rem;
    font-size: .293333rem;
}
.z_menu .z_menu_l a.active{
    background:#fff;
    border-left:3px solid #fd575c;
    color:#fd575c
}
.z_menu .z_menu_r{
    flex:1;
    height:100%;
    padding:.4rem .133333rem;
    position: relative;
    overflow-y: auto;
}
.z_menu .z_menu_r ul{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
}
.z_menu .z_menu_r li{
    flex: 0 0 33.333333%;
    text-align:center;
    padding:0 .266667rem .333333rem;
    box-sizing: border-box;
}
.z_menu .z_menu_r li span{
    display:block;
    font-size: .266667rem;
    padding-top: .133333rem;
    color:#333;
    font-size: .266667rem
}

</style>
