<template>
     <div class="content">
        <dl class="search-step">
            <dt class="search-content">
                三步轻松获得优惠券
            </dt>
            <dd>
                <div class="xian">
                </div>
                <div class="xian1">
                </div>
                <div class="search-box">
                    <i v-html='icon.left' class="iconfont"></i>
                    <p>
                        1.在淘宝复制宝贝标题
                    </p>
                </div>
                <div class="search-box">
                    <i v-html='icon.center' class="iconfont"></i>
                    <p>
                        2.粘贴复制标题到搜索框
                    </p>
                </div>
                <div class="search-box">
                    <i v-html='icon.right' class="iconfont"></i>
                    <p>
                        3.点击搜索查询优惠券
                    </p>
                </div>
            </dd>
        </dl>
        <div class="hr"></div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            icon:{
                left:'&#xe617;',
                center:'&#xe616;',
                right:'&#xe610;'
            }
        }
    }
}
</script>

<style scoped>
    .iconfont{
      color:#fff;
      font-size: .6rem;  
    }
    .content{
        padding-top:.9rem;
    }
    .content>.search-step>.search-content{
        height: 1rem;
        line-height: .8rem;
        font-size: .3rem;
        margin-left: .4rem;
        width: 100%;
        color: #999;
    }
    .content>.search-step>dd{
        display: flex;
        justify-content:center;
        position: relative;
    }
    .content>.search-step>dd>.xian,.content>.search-step>dd>.xian1{
        width: 21%;
        height: .05rem;
        display: block;
        position: absolute;
        top: .7rem;       
        opacity: 0.5;
        background: linear-gradient(to left,#FF83B7 0,#FFAF98 100%);
    }
    .content>.search-step>dd>.xian{
        left: 1.7rem;
    }
    .content>.search-step>dd>.xian1{
        left: 4.24rem;
    }
    .content>.search-step>dd>.search-box>i{
        width: 1rem;
        height: 1rem;
        display: block;
        border-radius: 50%;
        text-align: center;
        background: linear-gradient(to left,#FF83B7 0,#FFAF98 100%);
        margin: auto auto .1rem;
        margin-top:.2rem;
        margin-bottom: .5rem;
    }
    .content>.search-step>dd>.search-box>p{
        margin: 0 .3rem;
        text-align: center;
        font-size: .2rem;
        color: #555;
        margin-bottom: .4rem;
    }
    .hr {
        background: #F5F5F5;
        height: .2rem;
    }

</style>
