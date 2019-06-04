export default {
    path: '/homepage',
    name:'homePage',
    component:()=>import('@views/homepage/HomePage'),
    meta: {
        TabBarFlag: true,
        keepAlive: false
    }
}