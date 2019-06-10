import {http} from "@utils/http";
// //接口的管理
 
 //首页商品传到商品详情的id接口
 export const pproductdetailsID = (pdid)=>http("get","/good/goodsdetail",{id:pdid,from:'',mtoken:''})