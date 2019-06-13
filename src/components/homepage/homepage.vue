<template>
    <main class="content">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
                    <img :src="getImages(item.silde_original)">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="banner2">
            <a href="#">
              <img src="/img/O1CN01V87oyh2JJhwne0cQu_!!2053469401.gif" alt="">
            </a>
        </div>
        <div class="home_nav">
            <ul class="nav_ul">
                <li>
                    <a href="#">
                       <i><img src="/img/9.9.png" alt=""></i>
                       <span>9.9包邮</span>
                    </a>
                </li>
                <li>
                  <a href="#">
                      <i><img src="/img/9.9.png" alt=""></i>
                      <span>9.9包邮</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                      <i><img src="/img/9.9.png" alt=""></i>
                      <span>9.9包邮</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                      <i><img src="/img/9.9.png" alt=""></i>
                      <span>9.9包邮</span>
                  </a>
                </li>
            </ul>
        </div>
        <div class="brand">
          <div class="brand_child">
            <img src="/img/nine.jpg" alt="">
            <a class="jiuyang" href="#"><img src="/img/xiaonine.jpg" alt=""></a>
            <div class="nr">
              <h3 class="bt" style="color: rgb(51, 51, 51)
              ">因关爱而存在-九阳</h3>
              <p class="text" style="color: rgb(51, 51, 51)
              ">更懂中国厨房</p>
            </div>
            <div class="swiper_show">
                <ul>
<<<<<<< HEAD
                 <v-touch class="swiper_slide" v-for="(item,index) in JYswiperList.slice(0,3)" :key="item.id"
                 v-on:tap="jyID(item.id)">
=======
                 <div class="swiper_slide" v-for="(item,index) in JYswiperList.slice(0,3)" :key="index">
>>>>>>> jiajia
                    <div class="swiper_cent">
                        <a href="#" class="img" data-addr="/index.php?r=p/d&amp;id=20027488&amp;source=mp">
                          <img :src="getImages(item.product_thumb)" alt="">
                        </a>
                        <p class="name">{{item.sku_title}}</p>
                        <p class="money">
                          <i>¥</i>{{item.product_price}}
                          <del>¥339</del>
                        </p>
                    </div>
                 </div>               
                </ul>
               </div>
            </div>
        </div>
        <h3 class="home_h3">
              <div class="text-left">
                领券直播
              </div>
              <div class="text-right" >
                今日已为用户省钱
                <span ui-home-number="" data-num="" data-time="2" isload="true">
                  206,075,530
                </span>
                元
              </div>
          </h3>
        <ul class="goodsList">
<<<<<<< HEAD
          <v-touch tag="li" v-for="(item,index) in goodsList" :key="item.product_id" v-on:tap="glID(item.product_id)">
=======
          <li  v-for="(item,index) in goodsList" :key="index">
>>>>>>> jiajia
            <a href="#">
              <p>
                <img :src="getImages(item.thumb)" alt="">
              </p>
            </a>
              <div class="cent">
                <h3 class="tianmao">{{item.brand_name}}</h3>
                <div class="col-aaa" style="opacity: 1;">
                  <span>天猫价 ¥{{item.product_price}}</span><span class="fr">已售{{item.product_price}}件</span>
                </div>
                <div class="money">
                  <span class="">
                    <i>¥</i>
                    {{item.super_number}}
                  </span>
                  <i class="iconfont icongouwuchekong"></i>
                </div>
              </div>
          </li>
        </ul>
      </main>
</template>

<script>
import Swiper from 'swiper';
import Vuex from "vuex";
export default {
    name:"homepage",
    created() {
        this.actionsIGL()
        this.actionsSL()
        this.actionsJYSL()
    },
    watch: {
        swiperList(){
            this.$nextTick(()=>{
                 var mySwiper=new Swiper('.swiper-container',{
                    direction:'horizontal',
                    loop:true,
                    autoplay:true,
                    pagination:{
                        el:'.swiper-pagination'
                    }
                })
            })
        }
    },
     computed: {
        ...Vuex.mapState({
            goodsList:state=>state.homepage.indexGoodsLists,
            swiperList:state=>state.homepage.indexSwiperLists,
            JYswiperList:state=>state.homepage.indexJYSwiperLists
        }),

    },
    methods: {
        getImages( _url ){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
        },

         ...Vuex.mapActions({
            actionsIGL:"homepage/actionsIGL",
            actionsSL:"homepage/actionsSL",
            actionsJYSL:"homepage/actionsJYSL"
        }),
        //商品列表id传递
        glID(id){
            this.$router.push({name:"productdetails",params:{goods_id:id}})
        },
        jyID(id){
            this.$router.push({name:"productdetails",params:{goods_id:id}})
        }
    },
}
</script>

<style scoped>
/* main */
.content{
    margin-top:.9rem;
    background-color: rgb(230, 230, 230);
    max-width:25rem

}
.swiper-container{
    width:100%;
    overflow:hidden
}
.content .swiper-wrapper{
     height: 3.4rem;
}
.content .swiper-wrapper .swiper-slide{
    height: 3.4rem;
    background: #fff;
    width:100%;
    float:left
}
.content .swiper-wrapper .swiper-slide img{
    width: 100%;
    height: 100%;
    display: inline-block
}




.banner2,.banner2>a{
    height: 2.1rem;
    background-color: #fff;
}
.banner2>a>img{
    width: 100%;
    height: 100%
}
.home_nav{
    padding: .3rem 0 0;
    text-align: center;
    background-color: #fff;
    width: 100%;
    height: 2.3rem
}
.home_nav>ul{
    padding: 0;
    margin: 0;
    list-style-type: none;
    width: 100%;
    height: 2rem;
}
.home_nav>ul>li{
    width: 25%;
    margin-bottom: 28px;
    float: left;
}
.home_nav>ul>li>a{
    line-height: .6em;
    font-size: .3rem;
}
.home_nav>ul>li>a>i{
    width: 65%;
    height: auto;
    display: block;
    margin: auto;
}




.brand{
    margin-top:.1rem;
    height: 5.8rem;
    background-color: rgb(230, 230, 230);
    width:100%
}
.brand_child{
    position: absolute;
    height: 5.8rem;
    width:100%
}
.brand_child>img{
    width:100%;
}
.brand_child>.jiuyang{
    width:1.2rem;
    height:1.2rem;
    position: relative;
    top:-4.3rem;
    left:.4rem;
    display:inline-block;
}
.brand_child>.nr{
    position: relative;
    top:-3.6rem;
    left:.9rem;
    display:inline-block
}
.brand_child .nr h3{
    height: .68rem;
    line-height: .68rem;
    font-size:18px
}
.brand_child .nr p{
    height: .68rem;
    line-height: .68rem;
    font-size:14px
}
.swiper_show{
    position: relative;
    top:-4rem;
    border-radius: .2rem;
    height: 3.8rem;
    padding: .2rem .1rem 0 .2rem;
    background-color: #fff
}
.swiper_show>ul{
    width: 100%;
}
.swiper_show>ul>.swiper_slide{
    width: 32%;
    float:left;
    border-right: 1px solid rgb(230, 230, 230)
}
.swiper_show>ul>.swiper_slide>.swiper_cent{
    margin:0 11px;

}
.swiper_cent>a>img{
    width: 100%;
    height: 100%;
}
.swiper_cent>.name{
    line-height: 50px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.swiper_cent>.money{
    color: #FC4D52;
    line-height: .5rem;
    font-size: .3rem;
    padding-bottom: .1rem;
}
.swiper_cent>.money>i{
    font-size: .2rem;
    margin-right: .03rem;
}
.swiper_cent>.money>del{
    color: #bbb;
}
/* 直播 */
.home_h3{
    padding: .3rem 0 .7rem;
    font-size: .3rem;
    font-weight: 400;
    clear: both;
    margin-top:.2rem;
    background: #fff ;
    padding-left:.4rem
}
.home_h3 .text-left {
    font-size: .3rem;
    line-height:.4rem ;
    width: 31%;
    border-left: 4px solid #FC4D52;
    padding-left: .10rem;
    float: left;
}
.home_h3 .text-right {
    color: #aaa;
    font-size: .25rem;
    line-height: .4rem;
    width: 66%;
    float: right;
}
.home_h3 .text-right span{
    font-size: .32rem;
    color: #FC4D52;
}

/* 商品liebiao */
.goodsList{
    background: #fff;
    margin-bottom:1rem
}
.goodsList>li{
    padding: .24rem 0 0 .24rem;
    border-bottom: 2px solid #F5F5F5;
}

.goodsList>li>a>p{
    float: left;
    width: 2.6rem;
    height: 2.6rem;
    background: #eee;
}
.goodsList>li>a>p>img{
    width: 100%;
    height: 100%;
}
.goodsList>li>.cent {
    height: 2.6rem;
    margin-left: 3rem;
}
.goodsList>li>.cent>.tianmao {
    text-indent: .4rem;
    background: url(/img/tianmao.svg) left 4px no-repeat;
    background-size: .36rem .36rem;
    line-height: .48rem;
    font-size: .28rem;
    font-weight: 400;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: .6rem;
    margin-right: .1rem;
    margin-bottom: .26rem;
    overflow: hidden;
    height: 1rem;
}
.goodsList>li>.cent>.col-aaa{
    padding-top: .1rem;
    font-size: .29rem;
    color: #aaa;
    line-height: .4rem;
    padding-right: .2rem;
}
.cent>.col-aaa>span:nth-child(1) {
    padding-right: .1rem;
    margin-right: .1rem;
    display: inline-block;
}
.fr {
    float: right;
}
.goodsList>li>.cent>.money {
    font-size: .24rem;
    height: .4rem;
    color: #FC4D52;
       padding-top:.1rem
}
.goodsList>li>.cent>.money>.quan {
    padding: 0;
    margin-right: .1rem;
    overflow: hidden;
    display: inline-block;
}
.goodsList>li>.cent>.money>span {
    font-size: 18px;
    margin-right:.15rem;

}
.goodsList>li>.cent>.money>span>i{
    font-size: 14px;
    font-style: normal;
}
.goodsList>li>.cent>.money>.iconfont{
    font-size: 16px;
    margin-left:2.4rem
}
</style>
