import {createRouter,createWebHashHistory} from "vue-router";
import Home from "@/components/pages/tabs/Home.vue";
import Category from "@/components/pages/tabs/Category.vue";
import Order from "@/components/pages/tabs/Order.vue";
import Account from "@/components/pages/tabs/Account.vue";

import Main from "@/components/pages/Main.vue";
import Search from "@/components/pages/Search.vue";
import SearchResult from "@/components/pages/SearchResult.vue";



export const router = createRouter({
    history:createWebHashHistory(),
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
                {path:"home",component:Home},
                {path:"category",component:Category},
                {path:"order",component:Order},
                {path:"account",component:Account},
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
    ]
})