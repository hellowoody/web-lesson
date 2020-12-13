import {createRouter,createWebHashHistory} from 'vue-router';
import Main from "/@/components/pages/Main.vue";
import Home from "/@/components/pages/Home.vue";
import Login from "/@/components/pages/Login.vue";
import GoodManagment from "/@/components/pages/GoodManagment.vue";

export const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            redirect:{
                path:"/main/home"
            }
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/main",
            component:Main,
            children:[
                {
                    path:"home",
                    name:"home",
                    component:Home
                },
                {
                    path:"goodmanagment",
                    name:"goodmanagment",
                    component:GoodManagment
                }
            ]
        },
    ]
})