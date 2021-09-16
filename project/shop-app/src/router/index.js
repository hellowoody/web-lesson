import {createRouter,createWebHashHistory} from "vue-router";
import Main from "@/components/Main.vue";
import Home from "@/components/pages/Home.vue"

export const router = createRouter({
    history:createWebHashHistory(), // important 强制需要配置的
    routes:[
        {
            path:"/",
            redirect:{
                path:"/home"
            }
        },
        {
            path:"/main",
            component:Main
        },
        {
            path:"/home",
            component:Home
        }
    ]
})