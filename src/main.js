import Vue from 'vue'
import App from './App.vue'
import Observer from "./Observer"
import router from "./routers";
import store from "./store";
import MINT from 'mint-ui';
Vue.use(MINT)
import axios from "axios";
Vue.prototype.$http = axios;
import 'swiper/dist/css/swiper.css';
import BScroll from "@common/BScroll/BScroll"
require('./mock/mockbase')
Vue.config.productionTip = false
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {
    name: 'v-touch'
})
import Loading from "@common/loading/Loading"
new Vue({
    store,
    router,
    Observer,
    store,
    Loading,
    render: h => h(App),
}).$mount('#app')
