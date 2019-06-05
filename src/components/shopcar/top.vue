<template>
  <div class="top">
    <label>
      <input type="checkbox" :checked="allSelected" @change="handleToggle()">全选
    </label>
    <p>商品</p>
    <p>单价</p>
    <p>数量</p>
    <p>小计</p>
    <p>操作</p>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
    name:"Top",
    computed: {
        ...Vuex.mapState({
            allSelected:state=>state.cart.allSelected
        })
    },
    methods: {
        ...Vuex.mapMutations({
            handleToggle:"cart/handleToggle"
        })
    }
};
</script>

<style scoped>
.top {
  font-size: .2rem;
  width: 100%;
  height: 0.7rem;
  background: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top > p {
  width: 10rem;
  text-align: center;
}
.top > p:nth-child(2) {
  width: 16rem;
}

.top > label {
  width: 8.5rem;
  text-align: center;
}
</style>
