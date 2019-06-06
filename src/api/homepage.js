import {http} from "@utils/http";
// //接口的管理
 
 //商品列表
 export const indexGoodsList = ()=>http("get","/shop/theirchose",{page:1})

 //首页轮播图
 export const swiperList = ()=>http("get","/shop/slide",{mtaken:""})

 //首页九阳页面可滑动
 export const JYswiperList = ()=>http("get","/shop/home_all_info")

