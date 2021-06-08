import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@/components/Login";
import Counter from "@/components/Counter";
import Notepad from "@/components/Notepad"
import List from "@/components/List";
import Detail from "@/components/Detail";
/*
    1.<router-link to="/login"> => <a href="/login">
    2.<router-view>  某一级路由的占位符
    3.this.$router   路由的全局对象 (跳转时去使用) currentRoute 本次路由/当前激活路由 （read 只读）
    4.this.$route    currentRoute 本次路由/当前激活路由  (获取参数)
*/
Vue.use(VueRouter) 

//路由第一步:配置规则
const routes = [
    // {path:"/",redirect:"/notepad"}, // 重定向
    {path:"/",redirect:{
        path:"/notepad/list"
    }}, // 重定向
    // 二级路由
    {
        path:"/notepad", //一级路由
        // name:"notepad", // 命名路由
        component:Notepad,
        // 二级路由
        children:[
            {path:"list",component:List},
            {path:"detail",name:"detailname",component:Detail},
        ]
    },
    {
        path:"/login",
        component:Login,
        // 二级路由
        children:[
            {path:"list",component:List},
            {path:"detail",component:Detail},
        ]
    },
    {path:"/counter",component:Counter},
]

//路由第二步:创建（new）一个路由实例
const router = new VueRouter({
    routes
})

export default router;