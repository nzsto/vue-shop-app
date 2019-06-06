export default {
    path: '/productdetails/:goods_id',
    name:'productdetails',
    component:()=>import('@views/productdetails/productDetails'),
    meta: {
        TabBarFlag: true
    }
}