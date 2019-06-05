import {http} from "@utils/http";
//接口的管理

//商品分类
export const sortGoodsList = ()=>http("get","/good/top_catlist",{id:""})

