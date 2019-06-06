<template>
    <div class="header">
        <router-link tag='i' to='/shopcar' v-html='iconfont.fh' class="iconfont"></router-link>
        <div class="inputtext">
			<input type="text" name="kw" value="" placeholder="输入您需要的商品名称">
			<i class="iconfont" v-html='iconfont.zj'></i>
		</div>
        <input type="submit" class="sbumit" value="搜索">
    </div>
</template>

<script>
export default { 
    props:['title','iconfont']  
}
</script>

<style scoped>
        .header {
            width: 100%;
            height: .9rem;
            position:fixed;
            display: flex;
            top:0;
            z-index: 9;
            text-align: center;
            justify-content: space-between;
            background: linear-gradient(to left, #FA4DBE 0, #FBAA58 100%);
        }
        .header>i{     
            padding-top: 3.5%;
            color: #fff;
            font-size: .4rem;
        }
        .header>i{
             padding-left: .3rem;
        }
        .header>.inputtext{
            color: #666;
            background: #fff;
            border-radius: 3%;
            display: inline-block;          
            height: 80%;
            width: 60%;
            margin-top: 1%;
        }
        .header>.inputtext>input {
            border: none;
            background: 0 0;
            font-size: .3rem;
            width: 70%;
            height: 100%;
        }
        .header>.inputtext>.iconfont{
            position: absolute;
            left: 1.4rem;
            top: .35rem;
            height: .2rem;
            font-size: .4rem;
            line-height: .2rem;
            width: .3rem;
            text-align: center;
            color: #cfcfcf;
        }
        .header>.sbumit{
            width: 1.4rem;
            padding-right: 0.4rem;
            color: #fff;
            border: 0;
            background: 0 0;
            top: 0;
        }
</style>
