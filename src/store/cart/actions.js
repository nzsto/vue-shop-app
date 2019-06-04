import axios from "axios";
export default {
    handleGetGoods({commit}) {    
        axios({
            method: "get",
            url: "http://localhost:3000/goods"
        }).
        then((res) => {
           
            res.data.map((item) => {
                console.log(item)
                item.flag = true;
            })

            console.log(res)
           commit("mutationsGetGoods", res.data);

        }).catch((error)=>{
            console.log(error.messg)
        })
    },



    handleDel({dispatch}, id) {
        axios({
            method: "delete",
            url: "http://localhost:3000/goods" + id
        })
        dispatch("handleGetGoods");
        window.location.reload(true);
    }
}