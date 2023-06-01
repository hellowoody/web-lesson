import {createRouter,createWebHashHistory} from "vue-router"
import CounterPage from "@/components/CounterPage.vue"
import HomePage from "@/components/HomePage.vue"
import StepPage from "@/components/StepPage.vue"

const routes = [
    { path:"/" , redirect:"/counter" },
    { path:"/counter" ,component:CounterPage },
    { path:"/home" ,component:HomePage },
    { path:"/step" ,component:StepPage }
]

const options = {
    history:createWebHashHistory(),
    routes
}

export const router = createRouter(options)