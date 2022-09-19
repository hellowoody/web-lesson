import { createApp } from 'vue'   // ESM
import { router } from "@/router"
import { store } from "@/vuex"
import { pinia } from "@/store"
import { useAntd } from "@/antd"
import App from '@/App.vue'


const app = createApp(App)

useAntd(app)

app.use(router)
app.use(store)
app.use(pinia)
app.mount("#app")
    




