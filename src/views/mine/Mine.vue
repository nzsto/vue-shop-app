<template>
   <mine />
</template>

<script>
import mine from "@components/mine/mine";
export default {
    components:{
        mine
    }
}
</script>

<style scoped>
.header{
        width: 100%;
        height: 44vw;
        max-height: 22rem;
        background-size: 100% auto;
        overflow: hidden;
        background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
}
    .header>.cent{
        height: 44vw;
        max-height: 22rem;
        margin: 0 .4rem;
    }
    .header>.cent>.center{
        height: 1.4rem;
        margin: 14% 0;
        display: flex;
    }
    .header>.cent>.center>.img{
        width: 25%;
        min-width: .2rem;
    }
    .header>.cent>.center>.img>img{
        border-radius: 50%;
        width: 80%;
        min-width: 1.1rem;
        margin: .2rem;
        border: 0;
        box-shadow: 0 0 0 4px rgba(255,255,255,.3);
    }
    .header>.cent>.center>.info>p{
        padding-top: 60%;
        font-size: .3rem;
    }
    .header>.cent>.center>.info>p>a{
        color: #fff;
        text-decoration: none;
    }
    .header>.cent>.center>.info>p>i{
        color: #fff;
    }
    .content>ul>.crow-s{
        padding: .2rem 0;
        background: #fff;
        font-size: .1rem;
        color: #666;
        border-bottom: 1px dashed #fcfafa;
    }
    .content>ul>.crow-s>p{
        display: flex;
        margin:0 .4rem 0 .4rem;
    }
    .content>ul>.crow-s>p>i{
        padding: 0 .1rem;
    }
    img{
        vertical-align: middle;
    }
    .hr {
        background: #F5F5F5;
        height: .4rem;
    }
</style>
