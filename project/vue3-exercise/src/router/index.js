import { createRouter,createWebHashHistory} from "vue-router"
import Exercise01Page from "@/components/Exercise01Page.vue";
import Exercise02Page from "@/components/Exercise02Page.vue";
import ExerciseMenuPage from "@/components/ExerciseMenuPage.vue";
import ExerciseStorePage from "@/components/ExerciseStorePage.vue";
import ExerciseSlotPage from "@/components/ExerciseSlotPage.vue";
import StoreCount02 from "@/components/exercise/StoreCount02.vue";
import StoreCount03 from "@/components/exercise/StoreCount03.vue";

export const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            redirect:{
                path:"/em"
            }
        },
        {
            path:"/em",
            component:ExerciseMenuPage
        },
        {
            path:"/e01",
            component:Exercise01Page
        },
        {   
            path:"/e02",
            component:Exercise02Page
        },
        {   
            path:"/e03",
            component:ExerciseStorePage,
            children:[
                {
                    path:"c02",
                    component:StoreCount02
                },
                {
                    path:"c03",
                    component:StoreCount03
                },
            ]
        },
        {
            path:"/eslot",
            component:ExerciseSlotPage
        }
    ]
})