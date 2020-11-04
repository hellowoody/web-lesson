import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '/@/components/Login.vue'
import Main from '/@/components/Main.vue'
import GoodManagment from '/@/components/pages/GoodManagment.vue'
import TestMenu01 from '/@/components/pages/TestMenu01.vue'
import TestMenu02 from '/@/components/pages/TestMenu02.vue'

export const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            redirect:{
                path:"/main/goodmanagment"
            }
        },
        {
            path:"/login",
            component:Login,
        },
        {
            path:"/main",
            component:Main,
            children:[
                {
                    path:"goodmanagment",
                    name:"goodmanagment",
                    component:GoodManagment,
                },
                {
                    path:"testmenu01",
                    name:"testmenu01",
                    component:TestMenu01
                },
                {
                    path:"testmenu02",
                    name:"testmenu02",
                    component:TestMenu02
                },
            ]
        }
    ]
})