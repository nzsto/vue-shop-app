export default {
    name: 'search',
    path: '/search',
    component: () => import("@views/search/search"),
    meta: {
        TabBarFlag: true,
        keepAlive: true
    }
}