import {createRouter,createWebHashHistory} from "vue-router";
import Main from "@/components/pages/Main.vue"
import Search from "@/components/pages/Search.vue"
import SearchResult from "@/components/pages/SearchResult.vue"
import VrRoom from "@/components/pages/VrRoom.vue"
import Home from "@/components/pages/tabs/Home.vue"
import Category from "@/components/pages/tabs/Category.vue"
import Cart from "@/components/pages/tabs/Cart.vue"
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
                    path:"category",
                    component:Category
                },
                {
                    path:"cart",
                    component:Cart
                },
                {
                    path:"account",
                    component:Account
                },
            ]
        },
        {
            path:"/search",
            component:Search
        },
        {
            path:"/searchresult",
            component:SearchResult
        },
        {
            path:"/vrroom",
            component:VrRoom
        }
    ]
})