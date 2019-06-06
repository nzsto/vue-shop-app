export default {
    path: '/productdetails',
    name: 'productdetails',
    component: () => import('@views/productdetails/productDetails'),
    meta: {
        TabBarFlag: true,
        keepAlive: false
    }
}
