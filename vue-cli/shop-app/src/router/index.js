import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/tabs/Home';
import Product from '@/components/tabs/Product';
import Order from '@/components/tabs/Order';
import Account from '@/components/tabs/Account';


Vue.use(VueRouter) 

const routes = [
  {path:'/',redirect:{path:"/home"}},
  {path:'/home',component:Home},
  {path:'/product',component:Product},
  {path:'/order',component:Order},
  {path:'/account',component:Account},
]

const router = new VueRouter({
  routes
})

export default router
