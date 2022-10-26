import {createRouter,createWebHashHistory} from "vue-router";
import Login from "@/components/pages/Login.vue"
import Main from "@/components/pages/Main.vue"
import Home from "@/components/pages/menus/Home.vue"
import StoreManagment from "@/components/pages/menus/StoreManagment.vue"
import UserManagment from "@/components/pages/menus/UserManagment.vue"
import { getItem } from "@/kits/LocalStorageKit"

export const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        // 一级路由
        {path:"/",redirect:{path:"/login"}},
        {path:"/login",component:Login},
        {path:"/main",component:Main,children:[
            // 二级路由
            {path:"home",name:"home",component:Home},
            {path:"storemanagment",name:"storemanagment",component:StoreManagment},
            {path:"usermanagment",name:"usermanagment",component:UserManagment},
        ]}
    ]
})

router.beforeEach((to) => {
    if(to.path !== "/" && to.path !== "/login"){
        if(getItem("token") === "" ){
            return "/login"
        }
    }else{
        if(getItem("token") !== "" ){
            return "/main/home"
        }
    }
})