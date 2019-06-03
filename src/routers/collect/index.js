export default {
    name:'collect',
    path:'/collect',
    component: () => import("@views/collect/collect"),
    meta: {
        TabBarFlag: true
    }
}