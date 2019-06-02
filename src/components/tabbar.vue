<template>
    <div>     
        <div id="footer">
            <ul>
                <li v-for="(item,index) in navs" @click="handleTo(index)"
                    :class="activeIndex == index?'active':''"
                :key="index">
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.title}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name:"Tabbar",  
    data(){
        return {
            navs:[
                {
                    title:"首页",
                    icon:"&#xe601;"
                },
                {
                    title:"分类",
                    icon:"&#xe603;"
                },
                {
                    title:"收藏",
                    icon:"&#xe602;"
                },
                {
                    title:"我的",
                    icon:"&#xe604;"
                }
            ],
           activeIndex:0
        }
    },
    methods: {
        handleTo(index){
            this.$emit("handle",index);
            this.activeIndex = index;
        }
    }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    #footer{
        width: 100%;
        height: 4rem;
        background: #fff;
        position: fixed;
        left:0;
        bottom: 0;
        border-top: 1px solid #ccc;
    }

    #footer>ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #footer>ul>li{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size:.3rem;
    }
      #footer>ul>.active{
          color:linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
      }
     #footer>ul>li>i{
         font-size:1.5rem;
     }
</style>