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
                            <a href="#">登录</a>
                            <i>/</i>
                            <a href="#">注册</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <ul>
                <li class="crow-s">
                    <p>
                        <i>
                            <img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_like.svg">
                        </i>
                        我的购物车
                    </p>
                </li>
                <li class="crow-s">
                    <p>
                        <i>
                            <img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_history.svg">
                        </i>
                        浏览记录
                    </p>
                </li>
            </ul>
            <div class="hr"></div>
             <ul>
                 <li class="crow-s">
                     <p>
                         <i>
                             <img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_feedback.svg">
                         </i>
                         意见反馈
                     </p>
                 </li>
                 <li class="crow-s">
                     <p>
                         <i>
                             <img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_servicer.svg">
                         </i>
                         联系客服
                     </p>
                 </li>
                 <li class="crow-s">
                     <p>
                         <i>
                             <img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_help.svg">
                         </i>
                         领劵帮助
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
