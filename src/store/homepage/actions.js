import {
    indexGoodsList,
    swiperList,
    JYswiperList
} from "@api/homepage";

export  default {
    //首页商品列表
    async actionsIGL({commit}){
        let data = await indexGoodsList();
        commit("mutationsIGL",data.data.theirchose)
    },
    //首页轮播列表
    async actionsSL({commit}){
        let data = await swiperList();
        commit("mutationsSL",data.data)
    },
    //首页九阳滑动
    async actionsJYSL({commit}){
        let data = await JYswiperList();
        commit("mutationsJYSL",data.data.fashion_guide.list[1].product_info)
    }
}