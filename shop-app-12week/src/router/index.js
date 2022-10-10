import {createRouter,createWebHashHistory} from "vue-router";
import Home from "@/components/pages/tabs/Home.vue";
import Category from "@/components/pages/tabs/Category.vue";
import Order from "@/components/pages/tabs/Order.vue";
import Account from "@/components/pages/tabs/Account.vue";

import Splash from "@/components/pages/Splash.vue";
import Main from "@/components/pages/Main.vue";
import Search from "@/components/pages/Search.vue";
import SearchResult from "@/components/pages/SearchResult.vue";
import GoodDetail from "@/components/pages/GoodDetail.vue";
import Login from "@/components/pages/Login.vue";
import Register from "@/components/pages/Register.vue";
import BlankPage from "@/components/pages/BlankPage.vue";
import UploadAvatar from "@/components/pages/UploadAvatar.vue";
import Cart from "@/components/pages/Cart.vue";

import {getItem} from "@/kits/LocalStorageKit"

// firstOpen 为“”空字符串时，代表用户“第一次”打开或使用
const firstOpen = getItem("firstOpen")

export const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            redirect:{
                // path:"/main/home"
                // path:"/splash"
                path:firstOpen === "" ? "/splash" : "/main/home"
            }
        },
        {
            path:"/splash",
            component:Splash
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
        {
            path:"/gooddetail/:id/:type",
            name:"gooddetail",
            component:GoodDetail
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/register",
            component:Register
        },
        {
            path:"/blankpage",
            component:BlankPage
        },
        {
            path:"/uploadavatar",
            component:UploadAvatar
        },
        {
            path:"/cart",
            component:Cart
        },
    ]
})