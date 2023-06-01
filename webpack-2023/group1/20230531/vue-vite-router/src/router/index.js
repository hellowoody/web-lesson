import {createRouter,createWebHashHistory} from "vue-router"

import HomePage from "@/components/HomePage.vue"
import OrderPage from "@/components/OrderPage.vue"
import OrderListPage from "@/components/OrderListPage.vue"
import OrderEditPage from "@/components/OrderEditPage.vue"
import LoginPage from "@/components/LoginPage.vue"

const routes = [
    {path:"/",redirect:"/home"},
    {path:"/home",component:HomePage},
    {
        path:"/order",
        component:OrderPage,
        children:[
            { path:"list", component:OrderListPage},
            { 
                path:"edit/:orderId/:price", 
                component:OrderEditPage,
                name:"orderedit",
                meta:{
                    requireRole:"manager"
                }
            },
        ],
        meta:{
            requireAuth:true,
            a:1,
            b:2
        }
    },
    {path:"/login",component:LoginPage}
]

const options = {
    history:createWebHashHistory(),
    routes
}

export const router = createRouter(options)

// router.beforeEach((to,from) => {
//     console.log("to",to)
//     console.log("from",from)
//     if(to.meta){

//         if(to.meta.requireAuth === true){
//             if(!localStorage.getItem("userId") || localStorage.getItem("userId") === ""){
//                 router.push({path:"/login"})
//                 return false
//             } 
//         }

//         if(to.meta.requireRole){
//             // 该用户是否管理员
//             if(!localStorage.getItem("role") || localStorage.getItem("role") !== to.meta.requireRole){
            
//                 alert("no role")
//                 return false
//             }
//         }
//     }
//     return true
// })
router.beforeEach((to,from,next) => {
    console.log("to",to)
    console.log("from",from)
    if(to.meta){
        if(to.meta.requireAuth === true){
            if(!localStorage.getItem("userId") || localStorage.getItem("userId") === ""){
                next({path:"/login"})
            }else{
                next()
            }
        }else{
            next()
        }

        if(to.meta.requireRole){
            // 该用户是否管理员
            if(!localStorage.getItem("role") || localStorage.getItem("role") !== to.meta.requireRole){
                alert("no role")
            }else{
                next()
            }
        }else{
            next()
        }
    }else{
        next()
    }
})

/*

beforeEach (经常使用)
beforeResolve (处理异步)

afterEach (经常使用)
afterResolve (处理异步)

*/