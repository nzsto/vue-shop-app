<template>
    <div>
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
   <div class="content">
       <ul>
           <li>
               <div class="goods">
                   <label>
                       <input type="checkbox">
                   </label>
                   <div class="goodsImg">
                       <img src="https://img.alicdn.com/imgextra/i3/1111450609/O1CN01ATKeNq1GMxgK2w4eH_!!1111450609.jpg_310x310.jpg_.webp"
                           alt="">
                   </div>
                   <div class="goodsInfo">背包</div>
                   <p class="goodsPrice">￥120</p>
                   <div class="num">
                       <button>-</button>
                       <input type="text">
                       <button>+</button>
                   </div>
                   <p class="Subtotal">￥120</p>
                   <p class="operation">删除</p>
               </div>
           </li>
           <li>
               <div class="goods">
                   <label>
                       <input type="checkbox">
                   </label>
                   <div class="goodsImg">
                       <img src="https://img.alicdn.com/imgextra/i3/1111450609/O1CN01ATKeNq1GMxgK2w4eH_!!1111450609.jpg_310x310.jpg_.webp"
                           alt="">
                   </div>
                   <div class="goodsInfo">背包</div>
                   <p class="goodsPrice">￥120</p>
                   <div class="num">
                       <button>-</button>
                       <input type="text">
                       <button>+</button>
                   </div>
                   <p class="Subtotal">￥120</p>
                   <p class="operation">删除</p>
               </div>
           </li>
           <li>
               <div class="goods">
                   <label>
                       <input type="checkbox">
                   </label>
                   <div class="goodsImg">
                       <img src="https://img.alicdn.com/imgextra/i3/1111450609/O1CN01ATKeNq1GMxgK2w4eH_!!1111450609.jpg_310x310.jpg_.webp"
                           alt="">
                   </div>
                   <div class="goodsInfo">背包</div>
                   <p class="goodsPrice">￥120</p>
                   <div class="num">
                       <button>-</button>
                       <input type="text">
                       <button>+</button>
                   </div>
                   <p class="Subtotal">￥120</p>
                   <p class="operation">删除</p>
               </div>
           </li>
           <li>
               <div class="goods">
                   <label>
                       <input type="checkbox">
                   </label>
                   <div class="goodsImg">
                       <img src="https://img.alicdn.com/imgextra/i3/1111450609/O1CN01ATKeNq1GMxgK2w4eH_!!1111450609.jpg_310x310.jpg_.webp"
                           alt="">
                   </div>
                   <div class="goodsInfo">背包</div>
                   <p class="goodsPrice">￥120</p>
                   <div class="num">
                       <button>-</button>
                       <input type="text">
                       <button>+</button>
                   </div>
                   <p class="Subtotal">￥120</p>
                   <p class="operation">删除</p>
               </div>
           </li>
           <li>
               <div class="goods">
                   <label>
                       <input type="checkbox">
                   </label>
                   <div class="goodsImg">
                       <img src="https://img.alicdn.com/imgextra/i3/1111450609/O1CN01ATKeNq1GMxgK2w4eH_!!1111450609.jpg_310x310.jpg_.webp"
                           alt="">
                   </div>
                   <div class="goodsInfo">背包</div>
                   <p class="goodsPrice">￥120</p>
                   <div class="num">
                       <button>-</button>
                       <input type="text">
                       <button>+</button>
                   </div>
                   <p class="Subtotal">￥120</p>
                   <p class="operation">删除</p>
               </div>
           </li>
       </ul>
       <div class="footer">
           <label>
               <input type="checkbox">全选
           </label>
           <p>删除所有商品</p>
           <p class="count">已选择 <span></span>商品</p>
           <p class="total">总价: <span></span></p>
           <a href="##">结算</a>
       </div>
   </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
        * {
            padding: 0;
            margin: 0;
        }

        body {
            font-size: 12px;
            font-family: Arial, Helvetica, sans-serif, "Microsoft YaHei";
        }
    .top{
        width: 100%;
        height: .7rem;
        background: #f3f3f3;
        display: flex;
        align-items: center;
        justify-content: space-between;
        }
        .top>p{
        width: 10rem;
        text-align: center;
        }
        .top>p:nth-child(2){
        width: 16rem;
        }

        .top>label{
        width: 7.5rem;
        text-align: center;
        }
        .goods{
        width: 100%;
        display: flex;
        align-items: center;
        background: #fff;
        padding:.2rem 0;
        border-bottom: 1px dashed #f3f3f3;
        }
        .goods>.goodsImg,.goods>.goodsImg>img{
        width: 1rem;
        height: 1rem;
        margin-left: .2rem;
        }
        .goods>label{
        width: .4rem;
        text-align: center;
        }
        .goods>.goodsInfo{
        width: .8rem;
        margin-left: .4rem
        }
        .goods>.goodsPrice{
        width: 1rem;
        margin-left: .2rem;
        }
        .goods>.num{
        overflow: hidden;
        display: flex;
        }
        .goods>.num>button{
        width: .4rem;
        height: .43rem;
        background: #ccc;
        border:2px solid #ccc;
        }
        .goods>.num>input{
        width: .4rem;
        height: .4rem;
        border:1px solid #ccc;
        }

        .goods>.Subtotal{
        width: 1.6rem;
        text-align: center;
        }

        .goods>.operation{
        width: 1rem;
        margin: .4rem 0;
        }

        .footer{
            display: flex;
            height: .8rem;
            width: 100%;
            align-items: center;
            border-bottom:1px solid #f3f3f3;
            justify-content: space-between;
        }
        .footer>a{
            height: 100%;
            width: 1rem;
            color:#fff;
            text-decoration: none;
            text-align: center;
            display: block;
            background: #c33;
            line-height: .8rem;
            font-size:14px;
        }
        .footer>.total,.footer>.count{
            width: 1.4rem;
            text-align: center;
        }
</style>
