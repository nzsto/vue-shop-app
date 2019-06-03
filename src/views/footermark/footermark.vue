<template>
    <div>
        <Header :title='title' :iconfont='icon'/>
        <Footermark />
    </div>
</template>

<script>
import Footermark from "@components/footermark/footermark";
import Header from "@common/header/Header";
export default {
    components:{
        Header,
        Footermark
    },
    data(){
        return{
            title:'我的足迹',
            icon:{
                fh:'&#xe611;',
                zj:"&#xe60d;"
            }
        }
    }
}
</script>

