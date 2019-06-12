import {pproductdetailsID} from "@api/productdetalis";

export  default {
    //首页商品列表
    async actionsDetails({commit},params){
        let data = await pproductdetailsID(params);
        commit("mutationsDetails",data.data)
    }
}


