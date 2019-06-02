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
            title:'我的首页',
            icon:{
                fh:'&#xe611;',
                zj:"&#xe60c;"
            }
        }
    },
    components:{
        Header
    }
}
</script>

<style scoped>

</style>
