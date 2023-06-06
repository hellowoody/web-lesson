import { createRouter , createWebHashHistory} from "vue-router"

import LoginPage from "@/components/LoginPage"
import BlogPage from "@/components/BlogPage"
import BlogList from "@/components/blog/List"
import BlogEdit from "@/components/blog/Edit"
import BlogPreview from "@/components/blog/Preview"

import {useUser} from "@/store/user"

const routes = [
    { path:"/" ,redirect:"/blog/list" }, 
    { path:"/login", component:LoginPage },
    { 
        path:"/blog", 
        component:BlogPage,
        children:[
            {path:"list", component:BlogList},
            {path:"preview", component:BlogPreview},
            {
                path:"edit", 
                component:BlogEdit,
                meta:{
                    loginAuth:true
                }
            },
        ]
    },
]

const options = {
    history:createWebHashHistory(),
    routes
}

export const router = createRouter(options)

router.beforeEach((to) => {

    if(to.meta && to.meta.loginAuth === true){
        // 判断是否登录
        const user = useUser()
        if(!user.userId || user.userId === ""){
            alert("请登录")
            router.push({path:"/login"})
            return false
        }
    }
    return true
})