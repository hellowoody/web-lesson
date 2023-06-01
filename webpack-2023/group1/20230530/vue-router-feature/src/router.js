import { createRouter,createWebHashHistory } from "vue-router"

import RootPage from "@/components/RootPage"
import HomePage from "@/components/HomePage"
import OrderPage from "@/components/OrderPage"
import ProfilePage from "@/components/ProfilePage"

const options = {
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            // component:RootPage,
            // redirect:"/home"
            redirect:{
                path:"/home"
            }
        },
        {path:"/home",component:HomePage},
        {
                path:"/order",
                component:OrderPage,
        },
        {
            path:"/profile/:userid/:pwd",
            component:ProfilePage,
            name:"profile"
        },
        {
            path:"/abc/:userid/:pwd",
            name:"abc",
            redirect:{
                name:"profile"
            }
        }
    ]
}

export const router = createRouter(options)
