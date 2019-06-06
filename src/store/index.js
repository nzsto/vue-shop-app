import Vue from 'vue'
import Vuex from 'vuex'
import homepage from "./homepage"
import cart from "./cart"
import productdetails from "./productdetails"
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cart,
        homepage,
        productdetails
    }

})
