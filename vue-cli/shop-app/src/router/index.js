import Vue from 'vue';
import VueRouter from 'vue-router';

const Main = ()=> import("@/components/pages/Main")
const Home = ()=> import("@/components/pages/tabs/Home")
const Category = ()=> import("@/components/pages/tabs/Category")
const Order = ()=> import("@/components/pages/tabs/Order")
const Account = ()=> import("@/components/pages/tabs/Account")
const Cart = ()=> import("@/components/pages/Cart")
const Search = ()=> import("@/components/pages/Search")
const SearchResult = ()=> import("@/components/pages/SearchResult")
const OnBoarding = ()=> import("@/components/pages/OnBoarding")
const Login = ()=> import("@/components/pages/Login")
const Register = ()=> import("@/components/pages/Register")
const GoodsCategory = ()=> import("@/components/pages/GoodsCategory")
const GoodDetail = ()=> import("@/components/pages/GoodDetail")
const OrderDetail = ()=> import("@/components/pages/OrderDetail")
const UploadImg = ()=> import("@/components/pages/UploadImg")

const TestScroll = ()=> import("@/components/pages/TestScroll")
const TestScrollLayout = ()=> import("@/components/pages/TestScrollLayout")

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
  // {path:'/gooddetail',name:'gooddetail',component:GoodDetail},
  {path:'/gooddetail/:id',name:'gooddetail',component:GoodDetail},
  {path:'/orderdetail',name:'orderdetail',component:OrderDetail},
  {path:'/uploadimg',name:'uploadimg',component:UploadImg},

  {path:'/testscroll',name:'testscroll',component:TestScroll},
  {path:'/testscrolllayout',name:'testscrolllayout',component:TestScrollLayout},
]

const router = new VueRouter({
  // mode:"history", 
  routes
})

export default router
