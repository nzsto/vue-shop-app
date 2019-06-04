<template>
    <div>
        <header class="header">
            <router-link v-html='icon.fh' class="iconfont" tag="i" to="/search"></router-link>
            <h2>{{title}}</h2>
            <router-link v-html='icon.zj' class="iconfont" tag="span" to="/footermark"></router-link>
        </header>
        <HomePage/>
    </div>
</template>
<script>
import HomePage from "@components/homepage/homepage"
export default {
    data(){
        return{
            title:'粉丝福利购',
            icon:{
                fh:'&#xe611;',
                zj:"&#xe60c;"
            }
        }
    },
    components:{
        HomePage
    }
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

        .header {
            width: 100%;
            height: .9rem;
            position:fixed;
            display: flex;
            top:0;
            z-index: 9;
            background: linear-gradient(to left, #FA4DBE 0, #FBAA58 100%);
        }

        .header>h2 {
            width: 100%;
            height: .9rem;
            text-align: center;
            line-height: .9rem;
            font-size: .4rem;
            color: #fff;
            font-weight: normal;
        }
        .header>i,.header>span{     
            padding-top: 3.5%;
            color: #fff;
            font-size: .4rem;
        }
        .header>i{
             padding-left: .3rem;
        }
        .header>span{
             padding-right: .3rem;
        }
</style>
