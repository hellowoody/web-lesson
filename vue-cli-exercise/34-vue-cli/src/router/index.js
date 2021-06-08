import Vue from "vue";
import VueRouter from "vue-router";

import Notepad from "@/components/Notepad"
import Login from "@/components/Login"
import Counter from "@/components/Counter"
import List from "@/components/List"
import Detail from "@/components/Detail"

/*
  1.<router-link to="url">  <a href="url">
  2.<router-view> 某一级路由中组件/页面的占位符
  3.$router  相当于路由的全局对象（页面的跳转） this.$router.currentRoute
  4.$route   相当于本次路由的对象（获取参数）this.$route
*/
Vue.use(VueRouter) 

const routes = [
  // {path:"/",redirect:"/notepad"}, //重定向
  {
    path:"/", // 默认路由
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