import {createRouter,createWebHashHistory} from "vue-router";
import Login from "@/components/pages/Login.vue";
import Main from "@/components/pages/Main.vue";
import Home from "@/components/pages/Home.vue";
import StorageManagment from "@/components/pages/StorageManagment.vue";

export const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        // 一级路由
        {path:"/login",component:Login}, // 登陆页面
        {path:"/main",component:Main,children:[
            // 二级路由
            {path:"home",component:Home},
            {path:"storemanagment",component:StorageManagment},
        ]}  // 业务页面
    ]
})