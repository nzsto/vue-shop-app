export  default {
    path:"/sort",
    name:"sort",
    component:()=>import("@views/sort/Sort"),
    meta: {
        TabBarFlag: true,
        keepAlive: false
    }
}