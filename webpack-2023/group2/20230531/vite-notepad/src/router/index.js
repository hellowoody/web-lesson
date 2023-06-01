import { createRouter,createWebHashHistory} from "vue-router"

import NotepadPage from "@/components/NotepadPage.vue"
import BlogListPage from "@/components/blog/BlogListPage.vue"
import BlogEditPage from "@/components/blog/BlogEditPage.vue"
import BlogPreviewPage from "@/components/blog/BlogPreviewPage.vue"
import LoginPage from "@/components/LoginPage.vue"

import {useUser} from "@/store/user"

const routes = [
    {path:"/",redirect:"/notepad/list"},
    {
        path:"/notepad",
        component:NotepadPage,
        children:[
            {path:"list",component:BlogListPage},
            {path:"edit",component:BlogEditPage,meta:{auth:true}},
            {path:"preview",component:BlogPreviewPage}
        ]
    },
    {path:"/login",component:LoginPage}
]


const options = {
    history:createWebHashHistory(),
    routes
}


export const router = createRouter(options)

router.beforeEach((to) => {
    if(to.meta.auth && to.meta.auth === true){
        const user = useUser()
        console.log("user",user)
        if(!user.userId || user.userId === ""){
            alert("请登录")
            router.push({path:"/login"})
            return false
        }
    }
    return true
})