import {createRouter,createWebHashHistory} from "vue-router";
import Home from "@/components/pages/tabs/Home.vue"
import Category from "@/components/pages/tabs/Category.vue"
import Cart from "@/components/pages/tabs/Cart.vue"
import Account from "@/components/pages/tabs/Account.vue"

import Main from "@/components/pages/Main.vue"
import Search from "@/components/pages/Search.vue"
import SearchResult from "@/components/pages/SearchResult.vue"
import GoodsCategory from "@/components/pages/GoodsCategory.vue"
import GoodDetail from "@/components/pages/GoodDetail.vue"
import Login from "@/components/pages/Login.vue"
import Register from "@/components/pages/Register.vue"
import VrRoom from "@/components/pages/VrRoom.vue"
import BlankPage from "@/components/pages/BlankPage.vue"



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
                { path:"home",component:Home},
                { path:"category", component:Category},
                { path:"cart", component:Cart},
                { path:"account", component:Account},
            ]
        },
        { path:"/search", component:Search },
        { path:"/searchresult", component:SearchResult },
        { path:"/goodscategory", component:GoodsCategory },
        { path:"/gooddetail/:id/:type", component:GoodDetail },
        { path:"/login", component:Login },
        { path:"/register", component:Register },
        { path:"/vrroom", component:VrRoom },
        { path:"/blankpage", component:BlankPage }
    ]
})