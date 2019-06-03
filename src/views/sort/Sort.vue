<template>
    <div>
        <Header :title='title' :iconfont='icon'/>
    </div>
</template>

<script>
import Header from "@common/header/Header";
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
        Header
    }
}
</script>

