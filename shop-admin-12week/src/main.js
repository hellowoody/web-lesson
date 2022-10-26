import { createApp } from 'vue'
import { router } from "./router"
import { createPinia } from "pinia"
import { useAntD } from "./antd"
import App from './App.vue'

const app = createApp(App)
useAntD(app)
app
    .use(router)
    .use(createPinia())
    .mount('#app')
