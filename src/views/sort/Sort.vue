<template>
    <div>
        <Header :title='title' :iconfont='icon'/>
        <Sort/>
    </div>
</template>

<script>
import Header from "@common/header/Header";
import Vuex from "vuex";
import Sort from "@components/sort/Sort";
export default {
    data(){
        return{
            title:'我的分类',
            icon:{
                fh:'&#xe668;',
                zj:"&#xe611;"
            }
        }
    },
    components:{
        Header,
        Sort
    }
}
</script>

