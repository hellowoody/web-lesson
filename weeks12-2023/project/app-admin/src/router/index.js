import { createRouter, createWebHashHistory } from 'vue-router'
import Login from "@/components/pages/Login.vue"
import Main from "@/components/pages/Main.vue"
import Home from "@/components/pages/menus/Home.vue"
import GoodManagment from "@/components/pages/menus/GoodManagment.vue"
import { getItem } from "@/kits/localStore"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/" ,redirect:"/login"},
    { path:"/login",component:Login},
    { path:"/main",component:Main,children:[
      {path:"home",name:"home",component:Home},
      {path:"goodmanagment",name:"goodmanagment",component:GoodManagment},
    ]},
  ]
})

router.beforeEach((to) => {
  if(to.path !== "/" && to.path !== "/login" ){
    if(getItem("token") === ""){
      return "/login"
    }
  }else{
    if(getItem("token") !== ""){
      return "/main/home"
    }
  }
})

export default router
