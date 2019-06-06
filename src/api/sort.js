import {
    http
} from "@utils/http";
//接口的管理

//商品一级分类
export const sortGoodsList = () => http("get", "/good/top_catlist", {
    id: ""
})
