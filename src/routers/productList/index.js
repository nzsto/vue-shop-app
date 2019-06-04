export default {
    path: '/productlist',
    name:'productlist',
    component:()=>import('@views/productlist/productList'),
    meta: {
        TabBarFlag: true,
        keepAlive: false
    }
}