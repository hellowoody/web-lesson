import { createRouter,createWebHashHistory } from "vue-router"
import MainComp from "@/components/MainComp.vue"
import AComp from "@/components/AComp.vue"
import BComp from "@/components/BComp.vue"
import CComp from "@/components/CComp.vue"
import DComp from "@/components/DComp.vue"

const routes = [
    {
        path:"/",
        component:MainComp,
    },
    {
        path:"/a",
        component:AComp
    },
    {
        path:"/b",
        component:BComp
    },
    {
        path:"/c/:userid/:userstatus",
        component:CComp,
        // redirect:"/b",
        redirect:{
            // path:"/b",
            name:"d"
        },
    },
    // 命名路由 params
    {
        path:"/d/:userid/:userstatus",
        component:DComp,
        name:"d"
    },
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes,
})