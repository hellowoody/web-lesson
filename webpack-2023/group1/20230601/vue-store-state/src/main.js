import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.provide("stu",{
    name:"zhang",
    score:100
})

app.mount('#app')
