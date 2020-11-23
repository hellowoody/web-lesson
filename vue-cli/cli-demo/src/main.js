import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from '@/components/Home.vue'
import Search from '@/components/Search.vue'
import SearchResult from '@/components/SearchResult.vue'

const router = createRouter({
    history:createWebHashHistory(),  //前端渲染的设置
    routes:[
      {
        path:"/",
        redirect:{
            path:"/home"
        }
      },
      {
        path:"/home",
        component:Home
      },
      {
        path:"/search",
        component:Search
      },
      {
        path:"/searchresult",
        component:SearchResult
      }
    ]
})

const app = createApp(App)
app.use(router)
app.mount("#app")

