import {createRouter,createWebHashHistory} from "vue-router"
import CounterPage from "@/components/CounterPage.vue"
import HomePage from "@/components/HomePage.vue"

const routes = [
    { path:"/" , redirect:"/counter" },
    { path:"/counter" ,component:CounterPage },
    { path:"/home" ,component:HomePage }
]

const options = {
    history:createWebHashHistory(),
    routes
}

export const router = createRouter(options)