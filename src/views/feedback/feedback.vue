<template>
    <div>
        <Header :title='title' :iconfont='icon'/>
        <Feedback />
    </div>
</template>

<script>
import Feedback from "@components/feedback/feedback";
import Header from "@common/header/Header";
export default {
    components:{
        Header,
        Feedback
    },
    data(){
        return{
            title:'意见反馈',
            icon:{
                fh:'&#xe668;',
                zj:"&#xe60e;"
            }
        }
    }
}
</script>

<style>

</style>
