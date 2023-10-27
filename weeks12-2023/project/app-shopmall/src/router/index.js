import {createRouter,createWebHashHistory} from "vue-router"
import Main from "@/components/pages/Main.vue"
import Home from "@/components/pages/tabs/Home.vue"
import Category from "@/components/pages/tabs/Category.vue"
import Order from "@/components/pages/tabs/Order.vue"
import Profile from "@/components/pages/tabs/Profile.vue"

import Search from "@/components/pages/Search.vue"
import SearchResult from "@/components/pages/SearchResult.vue"
import GoodDetail from "@/components/pages/GoodDetail.vue"
import VrRoom from "@/components/pages/VrRoom.vue"
import Login from "@/components/pages/Login.vue"
import Register from "@/components/pages/Register.vue"
import Blank from "@/components/pages/Blank.vue"
import UploadAvatar from "@/components/pages/UploadAvatar.vue"
import Cart from "@/components/pages/Cart.vue"
import OrderDetail from "@/components/pages/OrderDetail.vue"
import { getItem } from "@/kits/localStore"
import { message } from 'ant-design-vue';

const checkLogin = (to,from) => {
    // 校验是否登陆
    const token = getItem("token")
    if(token){
        return 
    }else{
        message.warning("请先登陆")
        return {path:"/login"}
    }
}

const routes = [
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
            {path:"profile",component:Profile},
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
        path:"/gooddetail",
        component:GoodDetail
    },
    {
        path:"/vrroom",
        component:VrRoom
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
        component:Blank
    },
    {
        path:"/uploadavatar",
        component:UploadAvatar
    },
    {
        path:"/cart",
        component:Cart,
        beforeEnter:checkLogin
    },  
    {
        path:"/orderdetail",
        component:OrderDetail,
    },  
]



export const router = createRouter({
    history:createWebHashHistory(),
    routes
})