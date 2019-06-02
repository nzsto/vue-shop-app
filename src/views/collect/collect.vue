<template>
    <div>
        <Header :title='title' :iconfont='icon'/>
        <collect />
    </div>
</template>

<script>
import Header from "@common/header/Header";
import collect from "@components/collect/collect";
export default {
    components:{
        Header,
        collect
    },
    data(){
        return{
            title:'我的收藏',
            icon:{
                fh:'&#xe668;',
                zj:"&#xe60f;"
            }
        }
    }
}
</script>

<style>

</style>
