import { createRouter,createWebHashHistory } from "vue-router"
import MainPage from "@/components/MainPage.vue"
import HomePage from "@/components/HomePage.vue"
import LoginPage from "@/components/LoginPage.vue"


// http://localhost:5173/# /
// http://localhost:5173/# /home
// http://localhost:5173/# /login
export const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            component:MainPage
        },
        {
            path:"/home",
            component:HomePage
        },
        {
            path:"/login",
            component:LoginPage
        },
    ]
})