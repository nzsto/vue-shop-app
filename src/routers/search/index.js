export default {
    path: '/search',
    name: 'search',
    component: () => import('@views/search/search'),
    meta: {
        TabBarFlag: false,
        keepAlive: true
    }
}
