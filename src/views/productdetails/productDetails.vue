<template>
        <div id="luo-details">
            <p v-if="pullUpFlag" class="shuaxin">{{pullUpInfo}}</p>
            <Loading v-if="detailsNowLoading"></Loading>
            <div>
                
                 <!-- 头部 -->
            <div class="header">     <!-- isshow1 white -->
                <a href="javascript:;" class="iconfont" @click="headBack"><i>&#xe668;</i></a>
                <div>  
                    <v-touch href="#" v-on:tap="handleShop()" tag="a">商品</v-touch>
                    <v-touch href="#" v-on:tap="handleDetails()" tag="a">详情</v-touch>
                    <v-touch href="#" v-on:tap="handleRecomend()" tag="a">推荐</v-touch>
                </div>
                <a href="javascript:;" class="iconfont i1" @click="ShowTo"><i>&#xe613;</i></a>
            </div>
            <!-- 头部右边隐藏部分 -->
            <div class="side" v-show="isShow" >
                <ul>
                    <router-link to="/homepage" tag="li"><a href="#"><i class="iconfont">&#xe677;</i><span>首页</span></a></router-link>
                    <router-link to="/search" tag="li"><a href="#"><i class="iconfont">&#xe611;</i><span>搜索</span></a></router-link> 
                    <li><a href="#"><i class="iconfont">&#xe608;</i><span>客服</span></a></li>
                    <li><a href="#"><i class="iconfont">&#xe7b9;</i><span>反馈</span></a></li>
                    <router-link to="/mine" tag="li"><a href="#"><i class="iconfont">&#xe631;</i><span>我的</span></a></router-link>
                </ul>
            </div>
            <!-- 中间部分 -->
            <div ref="contentscroll">
            <div class="content contentscroll">
                <img :src="getImages(detailsList.goods_info ? detailsList.goods_info.big_thumb :'' )" alt="" class="wid">
                <div class="active">
                    <img src="../../../public/images/content1.png" />
                    <p class="color_p">近24小时，24.4万人已抢</p>
                    <div class="active1">
                        <span>No.{{detailsList.goods_info ? detailsList.goods_info.goods_type : '' }}</span>
                        <p>疯抢排名</p>
                    </div>
                </div>

                <div class="goodsInfo">
                    <h1>
                        <span>天猫</span>
                        <p><a href="#">{{detailsList.goods_info ? detailsList.goods_info.title : ''}}</a></p>
                    </h1>
                    <div class="cheapPrice">
                        <p class="price">券后价<i class="price">￥</i><span>{{detailsList.goods_info?detailsList.goods_info.good_price:''}}</span></p>
                        <p>已售<span>24.4</span>万</p>
                    </div>
                    <div class="nowprice">
                        <p>天猫价<i>￥</i><span>{{detailsList.goods_info?detailsList.goods_info.good_price:''}}</span></p>
                        <p>
                            <span><i class="iconfont">&#xe614;</i>包邮</span>
                            <span><i class="iconfont">&#xe614;</i>运费险</span>
                        </p>
                    </div>
                    
                    <a href="#" class="quan">
                        <img src="../../../public/images/content2.png" alt="">
                    </a>
                    <div class="quan_message">
                        <div class="quan_p">
                            <p class="quan_f"><span>5</span>元优惠券</p>
                            <p>使用期限2019.5.22-1019.6.01</p>
                        </div>
                        <p class="quan_p1">立即领劵</p>
                    </div>
                    <div class="news">
                        <p>{{detailsList.goods_info?detailsList.goods_info.send_store:''}}<br/>
                            {{detailsList.para_arr?detailsList.para_arr[1]:''}}
                        </p>
                    </div>
                </div>
                <!-- 分割线 -->
                <div class="fenge">
                    <hr />
                </div>
                <!-- 店铺信息 -->
                <div class="stroenews">
                    <div class="stroenews_l">
                        <p><img :src="getImages(detailsList.goods_info?detailsList.goods_info.product_img:'')" alt=""></p>
                        <h3>
                            <p>{{detailsList.goods_info?detailsList.goods_info.mbpage_title:''}}</p>
                            <i class="iconfont">&#xe7c5;</i>
                        </h3>
                    </div>

                    <p><a href="#">店铺所有优惠&nbsp;></a></p>  
                </div>
                <div class="pingjia">
                    <a href="#">宝贝描述：<span>4.8</span><i class="iconfont">&#xe8bd;</i></a>
                    <a href="#">卖家服务：<span>4.8</span><i class="iconfont">&#xe8bd;</i></a>
                    <a href="#">物流服务：<span>4.8</span><i class="iconfont">&#xe8bd;</i></a>
                </div>
                <div class="fenge">
                        <hr />
                </div>
                <!-- 相似推荐 -->
                <div class="tuijian">
                    <h3>相似推荐</h3>
                    <ul class="tuijianlist">
                        <li class="tui" v-for="item in detailsList.relation_information" >
                            <a href="#"> <img :src="getImages(item.thumb)" alt="" style="height:2.6rem"></a>
                            <p><a href="#" class="texthide">{{item.content}}</a></p>
                            <a href="#">{{item.type}}元券</a>
                            <p>券后价￥<span>{{item.id}}</span></p>
                        </li>
                    </ul>
                </div>
                <!-- 分割线 -->
                <div class="fenge">
                    <hr>
                </div>
                <!-- 宝贝详情 -->
                <div class="thingDetails" ref="details">
                    <h3>宝贝详情</h3>
                    <p class="detail" v-for="item in detailsList.para_arr">{{item}}</p>
                    <img :src="getImages(detailsList.goods_info?detailsList.goods_info.big_thumb:'')">
                    <img  v-for="item in detailsList.oversea_advice" 
                    :src="getImages(item.thumb)" alt=""
                    >

                </div>
                <div class="fenge">
                    <hr>
                </div>
                <!-- 推荐 今日热销 -->
            <div class="recommend" ref="recommend">
                <h3>今日热销</h3>
                <ul> 
                    <li  v-for="(item,index) in detailsList.relation_information" :key="index" >
                        <a href="#"><img :src="getImages(item.thumb)" alt="" style="height:2.8rem"></a>
                        <p class="recom"><i class="iconfont">&#xe799;</i><a href="#" class="texthide">{{item.content}}</a></p>
                        <p class="recom1">
                            <span>天猫价￥<em>{{item.id}}</em></span>
                            <span>已售<em>{{item.type}}万</em></span>
                        </p>
                        <p class="recom2">券后价￥<em>{{item.id}}</em><a href="#">{{item.type}}元券</a></p>
                    </li>
                   
                </ul>
            </div>
        </div>
        </div>
            
        <!-- 购买 -->
        <div class="buy">
            <a href="#">
                <i class="iconfont">&#xe656;</i><br/>
                <span>转发</span>
            </a>
            <a href="#">
                <i class="iconfont">&#xe637;</i><br>
                <span>收藏</span>
            </a>
            <a href="#">
                <span>￥<em>{{detailsList.goods_info?detailsList.goods_info.good_price:''}}</em></span><br>
                <span class="pany">不领券</span>
            </a>
            <a href="#">
                <span>￥<em>{{detailsList.goods_info?detailsList.goods_info.good_price:''}}</em></span><br>
                <span>领券购买</span>
            </a>
        </div> 
            </div>
    </div>
</template>
<script>
import Vuex from "vuex"
export default {
   name:"producDetails",
   data(){
       return{
           isShow:false,
           pullUpFlag:false,
           pullUpInfo:"正在加载"
       }
    },
    props:["goods_id"],
    created(){
        this.actionsDetails(this.goods_id)
        
    },
    // mounted(){
    //     this.$refs.contentscroll.handleScrollPullUp(()=>{
    //         this.pullUpFlag=true;
    //         this.pullUpInfo="正在加载"

    //     });
    //     this.$refs.contentscroll.handleScrollPullDown(()=>{
    //         this.pullUpInfo="加载完毕"
    //         setTimeout(()=>{
    //             this.pullUpFlag=false;
                
    //         },500)
    //     })
    // },
    methods:{
        ...Vuex.mapActions({
            actionsDetails:"productdetails/actionsDetails"
        }),
         getImages( _url ){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
        },
        headBack(){
            this.$router.back();
        },
        ShowTo(){
            this.isShow=!this.isShow
        },
        handleShop(){
           this.$refs.contentscroll.scrollTop=0 //无法滚动 待解决  滚动到指定位置
        },
        handleDetails(){
            let details=this.$refs.details
            this.$refs.contentscroll.scrollTop=details.offsetTop //无法滚动 待解决
        },
        handleRecomend(){
            let recom=this.$refs.recommend
            // console.log(recom)
            // console.log(recom.offsetTop)
            this.$refs.contentscroll.scrollTop=recom.offsetTop   //无法滚动 待解决
            // console.log(this.$refs.contentscroll.scrollTop)
        }
        
    },
    computed:{
        ...Vuex.mapState({
            detailsList:state=>state.productdetails.detailsList,
            detailsNowLoading:state=>state.productdetails.detailsNowLoading
        })
    }
}
</script>
<style scoped>

/* 详情页面 */
/* 头部 */
#luo-details{
    overflow-x: hidden;
}
#luo-details .contentscroll{
    width:100%;
    height:100%;
    /* position:absolute; */
    /* position:fixed; */
}
#luo-details .shuaxin{
    width:100%;
    text-align:center;
}
#luo-details .header{
    width:100%;
    display: flex;
    justify-content: space-around; 
    align-items: center;
    position:fixed;
    top:0;
    z-index: 3;
}

#luo-details .header .iconfont{
    display: inline-block;
    color:#ccc;
    
}

#luo-details .header .i1 i{
    font-size:.7rem;
}
#luo-details .header div a{
    justify-content: space-between; 
    align-items: center;
    display: inline-block;
    color: #666;
    font-size: .32rem;
    padding:.33rem .2rem;
    margin:0 .4rem;
}
#luo-details i{
    font-style: normal;  
}
#luo-details .header i{
    font-size: .6rem;
}
#luo-details .header .hide{
    display: none;
}
/* 顶部显示隐藏 */
#luo-details .isshow1{
    background: rgba(165, 165, 165, .2)
}
#luo-details .isshow1  .hide{
    display: block;
}
#luo-details .isshow1 a{
    color:#333;
}
#luo-details .isshow1 .iconfont{
    display: inline-block;
    color: #666;
    width: .7rem;
    height: .7rem;
    background:rgba(0, 0, 0, 0.114);
    text-align: center;
    border-radius: 50%;
}
#luo-details .isshow1 div a:hover{
    border-bottom: .06rem solid #d45f81;
}
/* 白色底部 */
#luo-details .white{
    background:#f5f5f5;
}
/* 右上角显示隐藏 */
#luo-details .side{
    /* display: none; */
    background: #414140;
    position: fixed;
    top:1rem;
    left:3.9rem;
    border-radius: .133rem;
    z-index: 3; 
}
#luo-details .side ul li{
    padding:0 .3rem;
    background: #414140;
    
}
#luo-details .side ul li a{
    display: inline-block;
    padding:.33rem .5rem;
    font-size: .36rem;
    color:#f5f5f5;
    border-bottom:1px solid #f5f5f5;
}
#luo-details .side ul li span{
    padding-left:.2rem;
    padding-right:.3rem;
}
#luo-details .side .iconfont{
    font-size: .4rem;
    color:#f5f5f5;
}
/* 中间内容区 */
/* 全民疯抢 */

#luo-details .content .wid{
    width:100%;
}
#luo-details .active{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 .266667rem;
    border-bottom:1px solid #ccc;
}
#luo-details .active img{
    width:30%;
    
}
#luo-details .active p{
    color:#999;
    font-size:.30rem;
}
#luo-details .active1 span{
    color:#e61514;
    font-size:.45rem;
    padding-bottom:.066667rem;
}
/* 内容区 goodsInfo */
#luo-details .goodsInfo h1{
    font-size: .4rem;
    font-weight: normal;
    padding: .25rem .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}

#luo-details .goodsInfo h1 span{
    border: 1px solid #FC3F78;
    color: #FC3F78;
    border-radius: 2px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    -o-border-radius: 2px;
    -ms-border-radius: 2px;
    padding: 0 5px;
    margin-right: 5px;
    font-size: .3rem;
    top: -1px;
    white-space: nowrap;
}
#luo-details .goodsInfo h1 p{
    display: inline-block;
    font-size:.35rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

}
#luo-details .goodsInfo h1 a{
    color:#000;
}
/* 价格 */
#luo-details .goodsInfo .cheapPrice,
#luo-details .goodsInfo .nowprice{
    height:.48rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0.3rem .25rem;
}
#luo-details .goodsInfo .cheapPrice p{
    font-size: 0.3rem;
}
#luo-details .goodsInfo .cheapPrice .price{
    color: #FC4D52;
      
}
#luo-details .goodsInfo .cheapPrice .price span{
    color: #e61514;
    font-size: .5rem;
    padding-left: .066667rem;
}
#luo-details .goodsInfo .cheapPrice span{
    font-size: 0.35rem;
    color:#666;
}
#luo-details .goodsInfo .nowprice p,
#luo-details .goodsInfo .nowprice span{
    font-size: 0.3rem;
    color:#666;
}
#luo-details .goodsInfo .nowprice .iconfont{
    font-size: 0.35rem;
    color:#FC4D52;
}
#luo-details .goodsInfo .nowprice p:last-child span{
    padding-left:0.2rem;
}
#luo-details .goodsInfo .quan img{
    width:100%;
    display: flex;
}
#luo-details .goodsInfo .quan{
    position: absolute;
    width:100%;
}
/* 劵 */
#luo-details .goodsInfo .quan_message{
    display: flex;
    justify-content:space-between; 
    align-items: center;
    padding:.5rem;
    position: relative;
    
}
#luo-details .goodsInfo .quan_message p{
    color: #fff;
}
#luo-details  .quan_message .quan_p{
    text-align: center; 
    padding:0 0.3rem 0 0.4rem;
    border-right: 1px dashed #fff;
}
#luo-details  .quan_message .quan_f span{
    font-size:.5rem;
}
#luo-details .quan_p p:first-child{
    font-size:0.3rem;
    font-weight: bold;
}
#luo-details .quan_p p:first-child span{
    font-size: 0.4rem;
}
#luo-details .quan_p p:last-child{
    font-size:.266667rem;
}
#luo-details  .quan_message .quan_p1{
    padding-right: 0.5rem;
    font-size: 0.3rem;
}
/* 商品信息 */
#luo-details .goodsInfo .news{
    padding:.1rem .3rem .5rem .3rem;
}
#luo-details .goodsInfo .news p{
    color:#888;
    font-size:0.3rem;
    line-height:.5rem;
}
/* 分割线 */
#luo-details .fenge hr{
    background-color:#f5f5f5;
    border:none;
    padding: .08rem;

}
/* 店铺 */
#luo-details .stroenews{
    padding:.36rem;
    border-bottom:.03rem solid #f5f5f5;
}
#luo-details .stroenews,
#luo-details .stroenews .stroenews_l{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#luo-details .stroenews img{
    width: .9rem;
    height:.9rem;
}
#luo-details .stroenews .stroenews_l h3{
    padding-left:.3rem;
}
#luo-details .stroenews .stroenews_l h3 p{
    font-weight: normal;
    color:#000;
    font-size: .36rem;
}
#luo-details .stroenews .stroenews_l .iconfont{
    font-size: .42rem;
    color: #fc3c78;;
}
#luo-details .stroenews p:last-child{
    font-size:.28rem;
    padding-right:.4rem;
}

/* 评价 */
#luo-details .pingjia{
    display: flex;
    justify-content: space-between;
    padding:.5rem 0 .5rem 0.1rem;
}
#luo-details .pingjia a{
    padding-right:.2rem;
    padding-left:.05rem;
    border-right: 1px solid #ccc;
    color:#555;
    font-size:.25rem;
}
#luo-details .pingjia a .iconfont{
    display: inline-block;
    font-size:.3rem;
    color:#f10215;
    padding-left:.05rem;
}

/* 相似推荐 */
#luo-details .tuijian,
#luo-details .thingDetails,
#luo-details .recommend{
    width:100%;
}
#luo-details .tuijian h3,
#luo-details .thingDetails h3,
#luo-details .recommend h3{
    text-align: center;
    color:#333;
    padding:.3rem 0;
}

#luo-details .tuijianlist{
    width:100%; 
    padding-left:.2rem;
    display: flex;
    justify-content: space-between;
}
#luo-details .tui{
    padding-right:.2rem;
    width:30%;
    float:left;
    flex-wrap:nowrap;
    
}
#luo-details .tui img{
    width:100%;
}
#luo-details .texthide{
    width:100%;
    font-size: .35rem;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #666;
    padding:.15rem 0;
}
#luo-details .tui a:nth-child(3){
    color:#fc4d52;
    border:1px solid #fc4d52;
    font-size:.28rem;
    padding:.067rem .133rem;
    
}
#luo-details .tui p:last-child{
    color:#fc4d52;
    font-size:.3rem;
    padding:.15rem 0;
}
#luo-details .thingDetails img{
    width:100%;
}
#luo-details .thingDetails .detail{
    padding:0.1rem 0.5rem;
    font-size: 0.2rem;
}

/* 推荐 今日热销*/
#luo-details .recommend,
#luo-details .recommend ul{
    width:100%;
}
#luo-details .recommend ul{
    display: flex;
    justify-content: flex-start;
    border-left:.1rem solid #f5f5f5;
    flex-wrap: wrap;
}
#luo-details .recommend ul li{
    width: 48%;
    border-right:.1rem solid #f5f5f5;
    border-bottom:.1rem solid #f5f5f5;
    padding-bottom:.2rem;
}
#luo-details .recommend ul li img{
    font-size: 0;
    width:100%;
}
#luo-details .recommend p{
    padding-left:.2rem;
}
#luo-details .recommend .recom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:.3rem .25rem .2rem .2rem;
}
#luo-details .recommend .recom a{
    font-size: .4rem;
    color:#333;
    white-space: nowrap;
}
#luo-details .recommend .recom .iconfont{
    color:#f10215;
    font-size:.3rem;
    padding-right: .07rem;
}
#luo-details .recommend em{
    font-style: normal;
}
#luo-details .recommend .recom1,
#luo-details .recommend .recom2{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right:.1rem;
    padding-bottom: .133rem;
     white-space: nowrap;
}
#luo-details .recommend .recom1 span{
    color: #888888;
    font-size:.3rem;
     white-space: nowrap;
}
#luo-details .recommend .recom2,
#luo-details .recommend .recom2 a{
    color:#fc4d52;
    font-size:.3rem;
}
#luo-details .recommend .recom2 a{
    border:1px solid #fc4d52;
    padding:.08rem .2rem;
    white-space: nowrap;
}
#luo-details .recommend .recom2 em{
    padding-right:.4rem;
    font-size:.35rem;
    font-weight: bold;

}
/* 购买 尾部*/
#luo-details .buy{
    width:100%;
    height:1.3rem;
    border-top:1px solid #eee;
    background:#fff;
    position:fixed;
    left:0;
    bottom:0;
    z-index: 6;
    display: flex;
    overflow-x: hidden;
    justify-content: space-around;
    align-items: center;
    padding:0 .15rem;
}
#luo-details .buy a{
    font-size:.3rem;
}
#luo-details .buy a:nth-child(3){
    color:#FE9E6B;
    font-size:.35rem;
}
#luo-details .buy .pany{
    padding-left:.1rem;
}
#luo-details .buy a:last-child{
    color:#fff;
    background:palevioletred;
    padding:.05rem .5rem;
    border-radius: .067rem;
    
}
#luo-details .buy .iconfont{
    font-size:.5rem;
    text-align: center;
    padding-left:.08rem;
}
#luo-details .buy a em{
    font-style: normal;
    font-weight: bold;
    font-size:.43rem;
}

</style>


