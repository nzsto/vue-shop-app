<template>
    <div>
      <main class="content">
           <div class="getQuan">
              <h3>轻松三步获得优惠券</h3>
              <ul>
                <li>
                    <i class="iconfont icontaobao"></i>
                    <p>1.在淘宝复制宝贝标题</p>
                </li>
                <li>
                    <i class="iconfont iconfuzhi"></i>
                    <p>2.粘贴复制标题到搜索框</p>
                </li>
                <li>
                    <i class="iconfont iconyouhuiquan"></i>
                    <p>3.点击搜索查询优惠券</p>
                </li>
              </ul>
           </div>
           <p class="bg"></p>
           <div class="hotSearch">
              <h3>热门搜索</h3>
              <div >
                <a href="#">凉鞋</a>
                <a href="#">热字头</a>
                <a href="#">夏季消暑神奇</a>
                <a href="#">你好吗</a>
                <a href="">谁</a>
                <a href="#">凉鞋</a>
                <a href="#">热字头</a>
                <a href="#">夏季消暑神奇</a>
                <a href="#">你好吗</a>
              </div>
           </div>
           <ul class="searchList" style="display: none">
              <li>
                <div class="guanjianzi">
                   <span>大白兔</span>
                </div>
                 <i class="iconfont iconzuoshangjiao"></i>
              </li>
              <li>
                <div class="guanjianzi">
                   <span>大白兔</span>
                </div>
                 <i class="iconfont iconzuoshangjiao"></i>
              </li>
            </ul>
      </main>
    </div>
</template>

<script>
export default {
    name:"search",   
}
</script>

<style scoped>
/* content */
.getQuan{
    padding-top:.9rem; 
    line-height: .3rem;
    height:4rem;
    color: #999;
}
.getQuan>h3{
    padding: .2rem 0 0 .3rem;
    height: 110px;
}
.getQuan>ul{
    height: 2rem;
    padding-bottom: .1rem;
   
}
.getQuan>ul:before {
    content: "";
    width: 55%;
    opacity: .3;
    height: 4px;
    overflow: hidden;
    background: linear-gradient(to left,#FF83B7 0,#FFAF98 100%);
    top: 250px;
    display: block;
    position: absolute;
    left: 22%;
}
.getQuan>ul>li{
    width: 33.33%;
    float:left;

}
.getQuan>ul>li>i{
    font-size: .5rem;
    height: 90px;
    line-height: 90px;
    text-align: center;
    margin: auto auto 20px;
    color: #fff;
    border-radius: 45px;
    background: linear-gradient(to left,#FF83B7 0,#FFAF98 100%);
    display: block;
    width: 90px;
}
.getQuan>ul>li>p{
    font-size: .24rem;
    margin: 0 .3rem;
    color: #555;
    text-align: center
}

.content>.bg{
    height: 0.1rem;
    width: 100%;
    background:#F5F5F5;
}
.content>.hotSearch{
    overflow: hidden;
    margin: 0 .5rem;
}
.content>.hotSearch>h3{
    line-height: .6rem;
    font-size: 0.3rem;
    color: #999;
    margin-bottom: 15px;
}
.content>.hotSearch>div>a{
    margin: 0 1% 16px;
    display: inline-block;
    background: #F6F6F6;
    border-radius: 30px;
    font-size: .3rem;
    padding: 0 30px;
    max-width: 88%;
    color: #666;
    height: 54px;
    line-height: 54px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.content>.searchList{
    width: 100%;
    height: 90%;
    position: absolute;
    top:95px;
    background: #fff;
}
.content>.searchList>li{
    border-bottom: solid 2px #eee;
    padding: 0 20px;
    height: 100px;
    width: 100%;
 
}
.content>.searchList>li>.guanjianzi{
 width: 80%;
 float: left;
 padding: 30px 10px
}
.content>.searchList>li>.guanjianzi>span{
    font-size: .3rem
}
.content>.searchList>li>i{
    font-size: .4rem;
    margin:35px 40px;
    display: inline-block;
}
</style>