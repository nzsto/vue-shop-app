export default {
    name: 'footermark',
    path: '/footermark',
    component: () => import("@views/footermark/footermark"),
    meta: {
        TabBarFlag: false,
        keepAlive: false
    }
}