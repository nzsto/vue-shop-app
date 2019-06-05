<template>
    <div>
        <FeedbackNav :title='title' :iconfont='icon'/>
        <Feedback />
    </div>
</template>

<script>
import Feedback from "@components/feedback/feedback";
import FeedbackNav from "@components/feedback/feedbackNav";
export default {
    components:{
        FeedbackNav,
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
