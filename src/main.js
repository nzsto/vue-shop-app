import Vue from 'vue'
import App from './App.vue'
require('./mock/mockbase')
import Observer from "./Observer"
import router from "./routers"
import store from "./store"
import MintUI from 'mint-ui'
import axios from "axios"
Vue.prototype.$http = axios
import 'swiper/dist/css/swiper.css'
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
    MintUI,
    render: h => h(App),
}).$mount('#app')
