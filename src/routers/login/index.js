export default {
    path: '/login',
    name: 'login',
    component: () => import('@views/login/login'),
    meta: {
        TabBarFlag: false
    }
}