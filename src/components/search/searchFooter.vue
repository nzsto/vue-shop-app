<template>
    <div>
            <dl>
                <dt class="search-content">热门搜索</dt>
                <dd class="search-footer">
                    <a href="#">面膜</a>
                    <a href="#">拖鞋</a>
                    <a href="#">连衣裙</a>
                    <a href="#">T恤</a>
                    <a href="#">泡泡机</a>
                    <a href="#">蚊帐</a>
                    <a href="#">抽纸</a>
                    <a href="#">瑜伽垫</a>
                    <a href="#">香水</a>
                    <a href="#">端午飘香美食</a>
                    <a href="#">端午出游必备</a>
                </dd>
            </dl>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .search-content{
        height: 1rem;
        line-height: .8rem;
        font-size: .3rem;
        margin-left: .4rem;
        width: 100%;
        color: #999;
    }
    .search-footer{
        padding: .1rem .3rem;
        font-size: .3rem;
    }
    .search-footer>a{
        text-decoration: none;
        padding: .1rem .4rem;
        background: #F6F6F6;
        display: inline-block;
        color: #666;
        border-radius: 30%;
        margin: .1rem;
    }
</style>
