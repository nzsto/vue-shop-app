<template>
     <div id="luo-regist">
        <h2>
            <router-link tag="a" to="/collect"><i class="iconfont">&#xe668;</i></router-link>
            <span>登录</span>
        </h2>
        <form action="" class="con">
            <div class="haoma">
                <i class="iconfont">&#xe615;</i>
                <p>
                    <input type="text" placeholder="手机号码" required>
                    <i class="iconfont">&#xe669;</i>
                </p>
            </div>
            <p class="xian .xian-red"></p>
            <p class="p-red">请输入正确11位的手机号码！</p>
            <div class="mima">
                <i class="iconfont">&#xe604;</i>
                <p>
                    <input type="password" placeholder="密码" required>
                    <i class="iconfont">&#xe63b;</i>
                </p>
            </div>
            <p class="xian"></p>
            <p class="p-red">密码为8-16位的数字或字母！</p>
            <input type="submit" value="登录" class="sub">
        </form>
        <p class="denglu">没有账号？立即<router-link to="/regist" tag="a">注册</router-link></p>
        <p class="end"><span>验证码登录</span><span>找回密码</span></p>
    </div>
</template>
<script>
 $("input").on("click",function(){
    $(".p-red").toggle()
})
export default {
    
}
</script>
<style scoped>
    #luo-regist h2{
    color:#666;
    font-weight:normal;
    font-size:.4rem; 
    padding: .4rem 0 1.3rem .4rem;
}
#luo-regist h2 .iconfont{
    font-size:.42rem;
}
#luo-regist h2 span{
    padding-left:2.3rem;
}
#luo-regist div .iconfont{
    font-size:.4rem; 
    
}

#luo-regist p{
    width:100%;
}
#luo-regist p .iconfont{
    font-size:.35rem; 
    padding-right: .2rem;
}
#luo-regist .con{
   padding:0 .6rem;

}
#luo-regist p,
#luo-regist .con div a{
    color:#666;
}
#luo-regist .con div{
    display: flex;
    align-items: center;
}
#luo-regist .con .haoma p,
#luo-regist .con .mima p{
    display: flex;
    align-items: center;
}
#luo-regist .con .haoma input,
#luo-regist .con .mima input{
    width:100%;
}
#luo-regist .con input{
    border:none;
    font-size: .3rem;
    padding-left:.2rem;
    padding-top:.35rem;
    padding-bottom: .35rem;
    padding-left: .3rem;
    outline: none;
}

#luo-regist .yanzheng p{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#luo-regist .yanzheng p a{
    display: inline-block;
    border:1px solid #666;
    padding:.13rem .3rem;
    border-radius: .3rem;
    font-size: .28rem;white-space: nowrap;
    padding-right:.2rem;
}

#luo-regist .sub{
    width: 100%;
    padding:.28rem;
    background:#eee;
    color:#666;
    border-radius: .1rem;
    font-size:.4rem;
    margin-top:.6rem;
}
#luo-regist .agree{
    font-size:.31rem;
    padding:.4rem .6rem .9rem .6rem;
    color: #888888;
}
#luo-regist .agree a,
#luo-regist .cent a,
#luo-regist .denglu a{
    color: #1991eb;
}
#luo-regist .cent{
    text-align: center;
    font-size:.31rem;
    padding-top: .9rem;
    color: #aaaaaa;

}
#luo-regist .xian{
    border-top:1px solid #ccc;
}
/* 隐藏部分 */
#luo-regist .p-red{
    color:#FC3F78;
    font-size: .3rem;
    padding-top:.3rem;
    border-top:1px solid #FC3F78;
    display: none;
}

/* 登录 */
#luo-regist .denglu{
    font-size:.31rem;
    padding:.6rem .6rem .9rem .6rem;
    color: #333;
}

#luo-regist .end{
    text-align: center;
    color: #aaaaaa;
    font-size:.31rem;
    padding-top:.9rem;
}
#luo-regist .end span{
    font-size:.31rem;
    padding:0 .2rem;
}
</style>


