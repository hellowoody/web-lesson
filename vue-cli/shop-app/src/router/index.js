import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/components/pages/Main';
import Home from '@/components/pages/tabs/Home';
import Category from '@/components/pages/tabs/Category';
import Order from '@/components/pages/tabs/Order';
import Account from '@/components/pages/tabs/Account';
import Cart from '@/components/pages/Cart.vue';
import Search from '@/components/pages/Search.vue';
import SearchResult from '@/components/pages/SearchResult.vue';
import OnBoarding from '@/components/pages/OnBoarding.vue';
import Login from '@/components/pages/Login.vue';
import Register from '@/components/pages/Register.vue';
import GoodsCategory from '@/components/pages/GoodsCategory.vue';
import GoodDetail from '@/components/pages/GoodDetail.vue';

Vue.use(VueRouter) 

const routes = [
  {path:'/',redirect:{path:"/main/home"}},
  {path:'/main',component:Main,children:[
    {path:'home',component:Home},
    {path:'category',component:Category},
    {path:'order',component:Order},
    {path:'account',component:Account},
  ]},
  {path:'/onboarding',name:"onboarding",component:OnBoarding},
  {path:'/login',name:"login",component:Login},
  {path:'/register',name:"register",component:Register},
  {path:'/onboarding',name:"onboarding",component:OnBoarding},
  {path:'/cart',name:'cart',component:Cart},
  {path:'/search',name:'search',component:Search},
  {path:'/searchresult',name:'searchresult',component:SearchResult},
  {path:'/goodscategory',name:'goodscategory',component:GoodsCategory},
  {path:'/gooddetail',name:'gooddetail',component:GoodDetail},
  // {path:'/gooddetail/:id',name:'gooddetail',component:GoodDetail},
]

const router = new VueRouter({
  // mode:"history", 
  routes
})

export default router
