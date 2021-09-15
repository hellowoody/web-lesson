import { createApp } from 'vue'
import {router} from "@/router"
import {useAntd} from "@/antd"
import App from './App.vue'

const app = createApp(App)
app.use(router)
useAntd(app)
app.mount('#app')
