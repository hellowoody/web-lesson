import { createApp } from 'vue'
import App from './App.vue'
import {router} from "./router"

const app = createApp(App)
    .use(router)
    

app.provide("logo","one image")
app.provide("user",{
    name:"zhangsan",
    role:"manage"
})

app.mount("#app")


function init(){
    localStorage.setItem("title","logo banner")
    localStorage.setItem("username","张三")
}

init()
