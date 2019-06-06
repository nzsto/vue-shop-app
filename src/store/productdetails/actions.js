import {productdetails} from "@api/productDetails";

export  default {
    //首页商品列表
    async actionsDetails({commit}){
        let data = await productdetails();
        console.log(666)
        console.log(data.data)
        commit("mutationsDetails",data.data)
    }
}


