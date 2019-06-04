import Vue from 'vue'
import App from './App.vue'
import Observer from "./Observer"
import router from "./routers"
import store from "./store"
import 'swiper/dist/css/swiper.css';
Vue.config.productionTip = false

new Vue({
  router,
  Observer,
  store,
  render: h => h(App),
}).$mount('#app')
