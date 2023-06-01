import {createRouter,createWebHashHistory} from "vue-router"

import DefaultPage from "@/components/DefaultPage"
import HomePage from "@/components/HomePage"
import OrderPage from "@/components/OrderPage"
import LoginPage from "@/components/LoginPage"

import ProfilePage from "@/components/ProfilePage"
import AddressEdit from "@/components/AddressEdit"
import AvatarEdit from "@/components/AvatarEdit"
import InfoEdit from "@/components/InfoEdit"


export const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        { path:"/" ,component:DefaultPage},
        { path:"/home" ,component:HomePage},
        { path:"/login" ,component:LoginPage},
        { 
            path:"/order/:orderId/:status" ,
            component:OrderPage ,
            name:"order",
            meta:{
                // ifLogin:true
                requireAuth:true,
            }
        },
        { 
            path:"/profile",
            component:ProfilePage,
            children:[
                { path:"address",component:AddressEdit },
                { path:"avatar",component:AvatarEdit },
                { path:"info",component:InfoEdit }
            ],
            meta:{
                requireAuth:true
            }
        }
    ]
})


// router.beforeEach((to,from) => {
//     // console.log("to",to)
//     // console.log("from",from)
//     if(to.meta && to.meta.requireAuth === true){
//         if(!localStorage.getItem("userId") || localStorage.getItem("userId") == ""){
//             // 跳转到登陆页面
//             router.replace({
//                 path:"/login"
//             })
//             return false
//         }
//         return true
//     }else{
//         return true
//     }
// })

router.beforeEach((to,from,next) => {
    // console.log("to",to)
    // console.log("from",from)
    if(to.meta && to.meta.requireAuth === true){
        if(!localStorage.getItem("userId") || localStorage.getItem("userId") == ""){
            // 跳转到登陆页面
            next({
                path:"/login"
            })
        }
        next()
    }else{
        next()
    }
})