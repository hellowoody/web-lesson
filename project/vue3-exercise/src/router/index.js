import { createRouter,createWebHashHistory} from "vue-router"
import Exercise01Page from "@/components/Exercise01Page.vue";
import Exercise02Page from "@/components/Exercise02Page.vue";
import ExerciseMenuPage from "@/components/ExerciseMenuPage.vue";

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
        }
    ]
})