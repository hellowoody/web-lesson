import { createSSRApp } from 'vue'
import { createPinia } from "pinia"
import { createRouter } from "./router"
import App from './App.vue'

export const createApp = () => {
    const app = createSSRApp(App)
    const router = createRouter()
    app.use(router)
    app.use(createPinia())
    return { app,router }
}
