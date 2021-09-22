import {createRouter,createWebHashHistory} from "vue-router";
import Main from "@/components/pages/Main.vue"
import VrRoom from "@/components/pages/VrRoom.vue"
import Home from "@/components/pages/tabs/Home.vue"
import Tab2 from "@/components/pages/tabs/Tab2.vue"
import Account from "@/components/pages/tabs/Account.vue"

export const router = createRouter({
    history:createWebHashHistory(), // important 强制需要配置的
    routes:[
        {
            path:"/",
            redirect:{
                path:"/main/home"
            }
        },
        {
            path:"/main",
            component:Main,
            children:[
                {
                    path:"home",
                    component:Home
                },
                {
                    path:"tab2",
                    component:Tab2
                },
                {
                    path:"account",
                    component:Account
                },
            ]
        },
        {
            path:"/vrroom",
            component:VrRoom
        }
    ]
})