import { createRouter,createWebHashHistory } from "vue-router"
import Home from "@/components/Home.vue"
import Login from "@/components/Login.vue"

export const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            component:Home
        },
        {
            path:"/login",
            component:Login
        },
    ]
})
