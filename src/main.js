import Vue from 'vue'
import App from './App.vue'
require('./mock/mockbase')
import Observer from "./Observer"
import router from "./routers"
import store from "./store"
import 'swiper/dist/css/swiper.css';
Vue.config.productionTip = false
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
new Vue({
  router,
  Observer,
  store,
  render: h => h(App),
}).$mount('#app')
