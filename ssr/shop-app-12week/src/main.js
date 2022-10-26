import { createSSRApp } from 'vue'   // ESM
import { router } from "@/router"
import { createPinia } from "pinia"
import { useAntd } from "@/antd"
import App from '@/App.vue'

    

export const createApp = () => {
    const app = createSSRApp(App)
    useAntd(app)
    app.use(router)
    app.use(createPinia())
    return { app,router }
}





