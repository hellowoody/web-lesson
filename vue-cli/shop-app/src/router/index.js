import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/pages/tabs/Home';
import Product from '@/components/pages/tabs/Product';
import Order from '@/components/pages/tabs/Order';
import Account from '@/components/pages/tabs/Account';
import Cart from '@/components/pages/Cart.vue';


Vue.use(VueRouter) 

const routes = [
  {path:'/',redirect:{path:"/home"}},
  {path:'/home',component:Home},
  {path:'/product',component:Product},
  {path:'/order',component:Order},
  {path:'/account',component:Account},
  {path:'/cart',component:Cart},
]

const router = new VueRouter({
  routes
})

export default router
