import { createApp } from 'vue'
import { router } from './router' 
import { store } from './store'
import App from './App.vue'
import {useAntD} from './antd'

const app = createApp(App)
app.use(router)
app.use(store)
useAntD(app)
app.mount('#app')
