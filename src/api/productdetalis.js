import {http} from "@utils/http";
// //接口的管理
 
 //首页商品传到商品详情的id接口
 export const pproductdetailsID = (id)=>http("get","/good/goodsdetail",{id:id,from:"",mtoken:""})

//  http://localhost:8080/good/goodsdetail?id=2959200&from=&mtoken=      6439616