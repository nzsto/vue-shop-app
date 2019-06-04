<template>
  <div class="content"> 
    <div class="goods" v-for="(item,index) in goodsList" :key="index">
      <label>
        <input type="checkbox" :checked="item.flag" @change="handleGoodsToggle(index)">
      </label>
      <div class="goodsImg">
        <img
          :src="item.img"
          alt
        >
      </div>
      <div class="goodsInfo">{{item.goodsName}}</div>
      <p class="goodsPrice">{{item.price}}</p>
      <div class="num">
        <button @click="handleReduce(index)">-</button>
        <input type="text" :value="item.num">
        <button @click="handleAdd(index)">+</button>
      </div>
      <p class="Subtotal">{{item.price | count(item.num)}}</p>
      <p class="operation" @click="handleDel(item.id)">删除</p>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import axios  from "axios";
export default {
  name: "Content",
  created() {
    this.handleGetGoods();
  },
  filters: {
    count(price, n) {
      return "￥"+(price*10*n)/10;
    }
  },
  computed: {
    ...Vuex.mapState({
      goodsList: state => state.cart.goodsList
    }),
  },
  methods: {
    
    ...Vuex.mapMutations({
      handleGoodsToggle: "cart/handleGoodsToggle",
      handleReduce: "cart/handleReduce",
      handleAdd: "cart/handleAdd"
     
    }),
    ...Vuex.mapActions({
       handleDel: "cart/handleDel",
       handleGetGoods:"cart/handleGetGoods"
    })
  }
};
</script>

<style scoped>
.content {
  font-size: 0.2rem;
  height: 100%;
}
.goods {
  width: 100%;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 0.2rem 0;
  border-bottom: 1px dashed #f3f3f3;
}
.goods > .goodsImg,
.goods > .goodsImg > img {
  width: 1rem;
  height: 1rem;
  margin-left: 0.2rem;
}
.goods > label {
  width: 0.4rem;
  text-align: center;
}
.goods > .goodsInfo {
  width: 1rem;
  margin-left: 0.4rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.goods > .goodsPrice {
  width: .8rem;
  margin-left: 0.2rem;
}
.goods > .num {
  overflow: hidden;
  display: flex;
}
.goods > .num > button {
  width: 0.4rem;
  height: 0.4rem;
  background: #ccc;
  border: 2px solid #ccc;
}
.goods > .num > input {
  width: 0.4rem;
  height: 0.4rem;
  border: 1px solid #ccc;
}

.goods > .Subtotal {
  width: 1.6rem;
  text-align: center;
}

.goods > .operation {
  width: 1rem;
  margin: 0.4rem 0;
}
</style>
