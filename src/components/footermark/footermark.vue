<template>
    <div class="main">
        <div>
            <ul class="goodsList">
                <li class="crow-s">
                    <div class="lable">
                        <p>
                            <img src="https://img.alicdn.com/imgextra/i3/1111450609/O1CN01ATKeNq1GMxgK2w4eH_!!1111450609.jpg_310x310.jpg_.webp">
                        </p>
                        <div class="info">
                            <h3>【卡帝乐鳄鱼】大容量高品质双肩包</h3>
                            <div class="num"> <span> 天猫价 ¥89</span><span class="fr">已售2861件</span> </div>
                            <div class="money">
                                <span class=" ">券后价<i>¥</i>29</span>
                                <span class="quan fr"><i>60元券</i></span>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="crow-s">
                    <div class="lable">
                        <p>
                            <img
                                src="https://img.alicdn.com/imgextra/i3/1111450609/O1CN01ATKeNq1GMxgK2w4eH_!!1111450609.jpg_310x310.jpg_.webp">
                        </p>
                        <div class="info">
                            <h3>【卡帝乐鳄鱼】大容量高品质双肩包</h3>
                            <div class="num"> <span> 天猫价 ¥89</span><span class="fr">已售2861件</span> </div>
                            <div class="money">
                                <span class=" ">券后价 <i>¥</i>29</span>
                                <span class="quan fr"><i>60元券</i></span>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="crow-s">
                    <div class="lable">
                        <p>
                            <img
                                src="https://img.alicdn.com/imgextra/i3/1111450609/O1CN01ATKeNq1GMxgK2w4eH_!!1111450609.jpg_310x310.jpg_.webp">
                        </p>
                        <div class="info">
                            <h3>【卡帝乐鳄鱼】大容量高品质双肩包</h3>
                            <div class="num"> <span> 天猫价 ¥89</span><span class="fr">已售2861件</span> </div>
                            <div class="money">
                               <span class=" ">券后价 <i>¥</i>29</span>
                               <span class="quan fr"><i>60元券</i></span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="lose">
            <div class="fail">
                <h3>
                    已失效宝贝
                </h3>
                <ul>
                    <li class="crow-s">
                        <div class="lable">
                            <p>
                                <img
                                    src="https://img.alicdn.com/imgextra/i3/1111450609/O1CN01ATKeNq1GMxgK2w4eH_!!1111450609.jpg_310x310.jpg_.webp">
                            </p>
                            <div class="info">
                                <h3>【卡帝乐鳄鱼】大容量高品质双肩包</h3>
                                <div class="num"> <span> 天猫价 ¥89</span><span class="fr">已售2861件</span> </div>
                                <div class="money">
                                    <span class=" ">券后价 <i>¥</i>29</span>
                                    <span class="quan fr"><i>60元券</i></span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
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
            max-width: 25rem;
            text-align: left;
            margin: auto;
            overflow: hidden;
        }
        .goodsList>li{
            /* display: flex; */
            padding: .2rem 0 0 .2rem;
            background: #fff;
            /* justify-content: center; */
            border-bottom: 1px solid #F5F5F5;
        }
        p{
            width: 1rem;
            /* height: 1rem; */
            float: left;
        }
        img{
            width: 1.3rem;
            height: 1.3rem;
            /* margin-bottom: .2rem; */
            background: #eee;
        }
        .info{
            height: 1.5rem;
            margin-left: 1.5rem;
            padding-bottom: .3rem;
        }
        .info>h3{
            font-size: .2rem;
            font-weight: 400;
            text-overflow: ellipsis;
            height: .4rem;
            margin-right: .4rem;
            margin-bottom: .1rem;
            overflow: hidden;
        }
        .info>.num{
            display: flex;
            justify-content: space-between;
            font-size: .1rem;
            color: #aaa;
            padding-top: .1rem;
            padding-right: .1rem;
        }
        .info>.money{
            display: flex;
            font-size: .1rem;
            color: #FC4D52;
            margin-top: .3rem;
            justify-content: space-between;
        }
        .info>.money>.quan{
            padding: 0;
            position: relative;
            z-index: 1;
            zoom: 1;
            top: 0;
            display: flex;
            
            margin-right: .3rem;
        }
        .info>.money>.quan>i{
            background: #fff;
            font-style: normal;
            display: block;
            font-size: .1rem;
            min-width: .2rem;
            text-align: center;
            color: #FC3F78;
            border: 1px solid #FC3F78;
            padding: .04rem .1rem;
            border-radius: 15%;
        }
        .info>.money>span{
            font-size: .1rem;
            margin-right: .2rem;
        }
        .lose{
            background: #F5F5F5;
        }
        .lose>.fail>h3{
            text-align: center;
            padding: .2rem 0;
            color: #888;
        }
        .lose>.fail>ul>li{
            padding-top:1rem;
            background: #fff;
        }
</style>
