<template>
    <div class="content">
        <p></p>
        <div class="text">
            登录后添加至购物车
            <p class="msg">
                收藏云端同步，不错过任何优惠哦
            </p>
        </div>
        <div class="but">
            <a href="#">登录/注册</a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content>p{
    background: url(https://cmsstatic.dataoke.com//wap_new/user/images/user_sc.svg?v=2019-05-30) center bottom
    no-repeat;
    width: 100%;
    height: 35vh;
    margin-bottom: .66rem;
    }
.content>.text{
    font-size: .2rem;
    padding-bottom: .3rem;
    text-align: center;
}
.content>.text>p{
    color: #999;
    padding: .3rem;
}
.but{
    text-align: center;
}
.but>a{
    padding: .2rem .8rem;
    box-shadow: 0 2px 6px 0 rgba(255,135,135,.5);
    background: linear-gradient(to left,#FF5E90 0,#FF927C 100%);
    border-radius: .9rem;
    color: #fff;
    font-size: 14px;
    text-decoration: none;
}
</style>


