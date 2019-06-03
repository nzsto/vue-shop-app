export default {
    name: 'feedback',
    path: '/feedback',
    component: () => import("@views/feedback/feedback"),
    meta:{
        TabBarFlag:false
    }
}