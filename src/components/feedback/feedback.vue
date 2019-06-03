<template>
    <div class="main">
        <div class="box1">
            <h2>
                反馈类型
            </h2>
            <div class="box2">
                <ul>
                    <li>
                        <span>
                            咚咚呛
                        </span>
                    </li>
                    <li>
                        <span>
                            小说编
                        </span>
                    </li>
                    <li>
                        <span>
                            每日半价
                        </span>
                    </li>
                    <li>
                        <span>
                            综合反馈
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="center">
            <h2>
                错误描述
            </h2>
            <div class="center-box">
                <textarea name="content" id="" maxlength="400" cols="30" placeholder="请在此输入您的反馈意见" rows="10"></textarea>
            </div>
            <span class="max-text">已输入文字<b>0</b>，还可以输入<b>400</b></span>
        </div>
        <div class="footer">
            <input type="text" maxlength="50" placeholder="请在此输入您QQ号或邮箱" name="qq">
            <p>您的宝贵建议是我们前进的动力，真诚感谢您！</p>
        </div>
    </div>
</template>

<script>
export default {

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
    .main{
            padding: 0 .2rem 0;
            background: #fff;
            position: relative;
            padding-top: .9rem;
        }
        .main>.box1{
            display: block;
            width: 100%;
            padding-bottom: .3rem;
            border-bottom: #EEE 1px solid;
            margin-bottom: .2rem;
            position: relative;
        }
        .main>.box1>h2,.main>.center>h2{
            color: #666;
            font-size: 15px;
            font-weight: 400;
            margin: .3rem 0 .3rem;
        }
        .main>.box1>.box2>ul{
            overflow: hidden;
            margin-left: -3%;
            width: 103%;
        }
        .main>.box1>.box2>ul>li{
            width: 22%;
            float: left;
            margin-left: 3%;
            font-size: 14px;
            position: relative;
            margin-bottom: 3%;
            list-style: none;
        }
        .main>.box1>.box2>ul>li>span{
            display: block;
            text-align: center;
            border: 1px solid #AAA;
            border-radius: 3px;
            padding: 5px 0;
            color: #999;
        }
        .main>.center{
            padding-bottom: 30px;
            display: block;
            width: 100%;
            border-bottom: #EEE 1px solid;
            margin-bottom: .2rem;
            position: relative;
        }
        .main>.center>.center-box{
            width: 100%;
            height: 3rem;
            overflow: hidden;
            background: #FCFAFC;
            border: 1px solid #ddd;
            border-radius: 2px;
            position: relative;
        }
        .main>.center>.center-box>textarea{
            width: 100%;
            background: 0 0;
            position: relative;
            padding: .4rem .2rem 0 .4rem;
            font-size: 14px;
            box-sizing: border-box;
            outline: 0;
            border: none;
            color: #666;
            font-family: "Microsoft YaHei";
        }
        .main>.center>span{
            position: absolute;
            bottom: 7px;
            right: 8px;
            color: #999;
            font-size: 12px;
        }
        .footer{
            display: block;
            width: 100%;
            padding-bottom: 10px;
            border-bottom: #EEE 1px solid;
            position: relative;
        }
        .footer>input{
            width: 100%;
            height: .5rem;
            line-height: .5rem;
            border-radius: 2px;
            margin-bottom: .5rem;
            padding: 0 8px;
            box-sizing: border-box;
            background: #FCFAFC;
            font-size: .2rem;
            border: 1px solid #ddd;
            color: #666;
        }
        .footer>p{
            color: #999;
            font-size: 13px;
        }
</style>
