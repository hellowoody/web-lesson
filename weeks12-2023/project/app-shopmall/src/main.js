import { createApp } from 'vue'
import { router } from "./router"
import { createPinia } from "pinia"
import App from './App.vue'
import { useAntdv } from "./antdv"
// createApp(App).use(router).mount('#app')

const app = createApp(App)
useAntdv(app)
app.use(createPinia())
app.use(router)
app.mount("#app")


