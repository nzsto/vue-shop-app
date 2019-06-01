<template>
    <div class="header">
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
export default {
    name:"Topheader",
    data(){
        return {
            msg:' 我的首页 '
        }
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
            height: 2rem;
            background: linear-gradient(to left, #FA4DBE 0, #FBAA58 100%);
        }

        .header>h2 {
            width: 100%;
            height: 2rem;
            text-align: center;
            line-height: 2rem;
            color: #fff;
            font-size: .8rem;
            font-weight: normal;
        }
</style>
