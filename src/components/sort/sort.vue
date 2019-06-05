<template>
    <div class="z_menu">
        <div class="z_menu_l">
            <ul>
                <li>
                    <a
                    v-for="(item,index) in sortGoodsLists"
                    class="active" href="#"
                    :key="index">{{item.cata_name}}</a>
                </li>
            </ul>

        </div>
        <div class="z_menu_r">
            <ul>
                <li><a href=""><img src="/img/xxx.webp"><span>T恤/短袖</span></a></li>
                <li><a href=""><img src="/img/xxx.webp"><span>T恤/短袖</span></a></li>
                <li><a href=""><img src="/img/xxx.webp"><span>T恤/短袖</span></a></li>
                <li><a href=""><img src="/img/xxx.webp"><span>T恤/短袖</span></a></li>
                <li><a href=""><img src="/img/xxx.webp"><span>T恤/短袖</span></a></li>
                <li><a href=""><img src="/img/xxx.webp"><span>T恤/短袖</span></a></li>
                <li><a href=""><img src="/img/xxx.webp"><span>T恤/短袖</span></a></li>
                <li><a href=""><img src="/img/xxx.webp"><span>T恤/短袖</span></a></li>
                <li><a href=""><img src="/img/xxx.webp"><span>T恤/短袖</span></a></li>
                <li><a href=""><img src="/img/xxx.webp"><span>T恤/短袖</span></a></li>
                <li><a href=""><img src="/img/xxx.webp"><span>T恤/短袖</span></a></li>
                <li><a href=""><img src="/img/xxx.webp"><span>T恤/短袖</span></a></li>
                <li><a href=""><img src="/img/xxx.webp"><span>T恤/短袖</span></a></li>
                <li><a href=""><img src="/img/xxx.webp"><span>T恤/短袖</span></a></li>
                <li><a href=""><img src="/img/xxx.webp"><span>T恤/短袖</span></a></li>
                <li><a href=""><img src="/img/xxx.webp"><span>T恤/短袖</span></a></li>
                <li><a href=""><img src="/img/xxx.webp"><span>T恤/短袖</span></a></li>
                <li><a href=""><img src="/img/xxx.webp"><span>T恤/短袖</span></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex";
import BScroll from 'better-scroll'
export default {
    name:'Sort',
    created(){
        this.actionsSort(),
        this.$nextTick(() => {
            this._initScroll(),
            this.getGoodsHeight()
        })
    },
    computed:{
        ...Vuex.mapState({
            sortGoodsLists:state=>state.sort.sortGoodsLists
        })
    },
    methods: {
        ...Vuex.mapActions({
            actionsSort:"sort/actionsSort"
        }),
        _initScroll () {
            this.menuScroll = new BScroll((this.$refs.menu), {
                click: true
                //因为betterscroll默认会阻止点击事件。这里要设置一下
            })
            this.foodScroll = new BScroll((this.$refs.good), {
                probeType: 3
                //用来获取滚动的距离
            })
            this.foodScroll.on('scroll', (pos) => {
                this.scrollY = Math.abs(Math.round(pos.y))
            })
        }
    }
}
</script>

<style>
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
