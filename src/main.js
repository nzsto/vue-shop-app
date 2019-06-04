import Vue from 'vue'
import App from './App.vue'
import Observer from "./Observer"
import router from "./routers";
import store from "./store";
import axios from "axios";
Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  store,
  router,
  Observer,
  render: h => h(App),
}).$mount('#app')
