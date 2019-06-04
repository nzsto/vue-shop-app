export default {
    total(state) {
        let goodsNum = 0,
            goodsTotal = 0;

        for (var i = 0; i < state.goodsList.length; i++) {
            if (state.goodsList[i].flag) {
                goodsNum += state.goodsList[i].num;
                goodsTotal += (state.goodsList[i].num * (state.goodsList[i].price * 10)) / 10;
            }
        }


        return {
            goodsNum,
            goodsTotal
        }
    }
}