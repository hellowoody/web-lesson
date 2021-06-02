import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@/components/Login";
import Counter from "@/components/Counter";
import Notepad from "@/components/Notepad"
import List from "@/components/List";
import Detail from "@/components/Detail";
/*
    1.<router-link>
    2.<router-view>
    3.this.$router 
    4.this.$route 
*/
Vue.use(VueRouter) 

//路由第一步:配置规则
const routes = [
    // {path:"/",redirect:"/notepad"}, // 重定向
    {path:"/",redirect:{
        path:"/notepad/list"
    }}, // 重定向
    {
        path:"/notepad",
        component:Notepad,
        children:[
            {path:"list",component:List},
            {path:"detail",component:Detail},
        ]
    },
    {path:"/login",component:Login},
    {path:"/counter",component:Counter},
]

//路由第二步:创建（new）一个路由实例
const router = new VueRouter({
    routes
})

export default router;