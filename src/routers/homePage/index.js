export default {
    path: '/homePage',
    name: 'homePage',
    component: () => import('@views/homepage/HomePage'),
    meta: {
        TabBarFlag: true,
        keepAlive: false
    }
}
