import Vue from 'vue'
import Router from 'vue-router'
import homepage from './homePage'
import sort from './sort'
import productlist from './productList'
import productdetails from './productDetails'
import shopcar from './shopCar'
import mine from './mine'
import collect from "./collect";
import footermark from "./footermark";
import feedback from "./feedback";
Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path:"/", //重定向
            redirect:"/homepage"
        },
        homepage,
        sort,
        productlist,
        productdetails,
        shopcar,
        mine,
        collect,
        footermark,
        feedback
    ]
})
