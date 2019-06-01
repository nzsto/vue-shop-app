<template>
   <div id="app">
     <Topheader/>
     <keep-alive :exclude="/(Homepage|Product)/">
        <component :is="pageCom"></component>
     </keep-alive>
     <Tabbar @handle="pageToggle"/>
   </div>
</template>

<script>
import Tabbar from "./components/tabbar"
import Topheader from "./components/topheader";
import Mine from "./components/mine/mine";
import Collect from "./components/collect/collect"
import Sort from "./components/sort/sort";
import Homepage from "./components/homepage/homepage";
export default {
  name: 'app',
  components: {
    Tabbar,
    Topheader,
    Collect,
    Mine,
    Sort,
    Homepage
  },
  data(){
    return{
      pageCom:"Homepage"
    }
  },
  methods: {
    pageToggle(index){
      let com = "Homepage";
      switch(index){
        case 0:
          com="Homepage";
          break;
        case 1:
            com="Sort";
          break;
        case 2:
            com="Collect";
          break;
        case 3:
            com="Mine";
          break;
      }


      this.pageCom = com;
    }
  }
}
</script>
<style>

</style>
