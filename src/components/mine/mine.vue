<template>
    <div class="layout">
        <div class="header">
            <div class="cent row-s">
                <div class="center row-s">                   
                        <a href class="img">
                            <img
                                src="https://cmsstatic.dataoke.com//wap_new/user/images/user_info_tx.png?v=201905301831">
                        </a>                 
                    <div class="info">
                        <p>
                            <router-link tag="a" to="/login">登录</router-link>
                            <i>/</i>
                            <router-link tag="a" to="/regist">注册</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <ul>
                <router-link class="crow-s" to="/shopcar" tag="li">
                    <p>
                        <i>
                            <img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_like.svg">
                        </i>
                        <span>我的购物车</span>
                    </p>
                </router-link>
                <router-link class="crow-s" to="/footermark" tag="li">
                    <p>
                        <i>
                            <img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_history.svg">
                        </i>
                        <span>浏览记录</span>
                    </p>
                </router-link>
            </ul>
            <div class="hr"></div>
             <ul>
                 <router-link class="crow-s" to="/feedback" tag="li">
                     <p>
                         <i>
                             <img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_feedback.svg">
                         </i>
                         <span>意见反馈</span>
                     </p>
                 </router-link>
                 <li class="crow-s">
                     <p>
                         <i>
                             <img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_servicer.svg">
                         </i>
                         <span>联系客服</span>
                     </p>
                 </li>
                 <li class="crow-s">
                     <p>
                         <i>
                             <img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_help.svg">
                         </i>
                         <span>领劵帮助</span>
                     </p>
                 </li>
             </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    body{
        font-size: 12px;
        font-family: Arial,Helvetica,sans-serif,"Microsoft YaHei";
    }
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
            margin: 0 .2rem;
            overflow: hidden;
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
            width: 100%;
            min-width: 1.1rem;
            margin: .2rem;
            border: 0;
            box-shadow: 0 0 0 5px rgba(255,255,255,.3);
        }
        .header>.cent>.center>.info>p{
            padding-top: 60%;
            font-size: .3rem;
            margin-left: .5rem;
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
            margin:0 .1rem 0 .1rem;
        }
        .content>ul>.crow-s>p>i{
            padding: 0 .1rem;
        }
        .content>ul>.crow-s>p>span{
            margin-top: .1rem;
            margin-left: .06rem;
        }
        img{
            vertical-align: middle;
        }
        .hr {
            background: #F5F5F5;
            height: .4rem;
        }
</style>
