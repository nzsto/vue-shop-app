import { sortGoodsList } from "@api/sort";

export default {
    //分类
    async actionsSort({commit}){
        let data = await sortGoodsList();
        commit("mutationsSort",data.data)
        console.log(data.data)
    }
}
