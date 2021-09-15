import {createRouter,createWebHashHistory} from "vue-router";
import Main from "@/components/Main.vue";

export const router = createRouter({
    history:createWebHashHistory(), // important 强制需要配置的
    routes:[
        {
            path:"/",
            redirect:{
                path:"/main"
            }
        },
        {
            path:"/main",
            component:Main
        }
    ]
})