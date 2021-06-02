import Vue from "vue";
import VueRouter from "vue-router";

import Notepad from "@/components/Notepad"
import Login from "@/components/Login"
import Counter from "@/components/Counter"
import List from "@/components/List"
import Detail from "@/components/Detail"

Vue.use(VueRouter) 

const routes = [
  // {path:"/",redirect:"/notepad"}, //重定向
  {
    path:"/",
    redirect:{path:"/notepad/list"}  //重定向
  }, 
  {
    path:"/notepad",
    component:Notepad,
    children:[
      {path:"list",component:List},
      {path:"detail",component:Detail},
    ]
  },
  {
    path:"/login",
    component:Login
  },
  {
    path:"/counter",
    component:Counter
  }
]

// 创建一个路由的实例 并把它赋给名字叫router变量
const router = new VueRouter({
  routes
})

export default router;