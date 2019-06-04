<template>
    <div class="footer">
        <p>删除所有商品</p>
        <p class="count">
          已选择
          <span>{{total.goodsNum}}</span>商品
        </p>
        <p class="total">
          总价:
          <span>{{total.goodsTotal}}</span>
        </p>
        <a href="##">盘他</a>
      </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name:"Footer",
    computed: {
        ...Vuex.mapGetters({
            total:"cart/total"
        })
    }
}
</script>

<style scoped>
.footer {
  font-size: .2rem;
  display: flex;
  height: 0.8rem;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #f3f3f3;
  justify-content: space-between;
}
.footer > a {
  height: 100%;
  width: 1rem;
  color: #fff;
  text-decoration: none;
  text-align: center;
  display: block;
  background: linear-gradient(to left, #FA4DBE 0, #FBAA58 100%);
  line-height: 0.8rem;
  font-size: 14px;
  margin-right: .05rem;
}
.footer > .total,
.footer > .count {
  width: 1.8rem;
  text-align: center;
}
</style>
