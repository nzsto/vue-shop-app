import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import homepage from "./homepage"
import cart from "./cart"
import sort from "./sort"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      cart,
      homepage,
      sort
  }
=======
Vue.use(Vuex)

export default new Vuex.Store(options:{
    modules:{
    }
>>>>>>> dev
})
