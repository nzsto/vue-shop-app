import Vue from 'vue'
import App from './App.vue'
import Observer from "./Observer"
import router from "./routers"
import store from "./store"
import 'swiper/dist/css/swiper.css';
import BScroll from "@common/BScroll/BScroll"
require('./mock/mockbase')
Vue.config.productionTip = false
import VueTouch from 'vue-touch'
Vue.component("BScroll",BScroll);
Vue.use(VueTouch, {name: 'v-touch'})
new Vue({
  router,
  Observer,
  store,
  render: h => h(App),
}).$mount('#app')
