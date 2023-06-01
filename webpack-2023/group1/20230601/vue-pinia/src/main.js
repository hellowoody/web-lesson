import { createApp } from 'vue'
import App from './App.vue'
// import {pinia} from "./store"
import { createPinia } from "pinia"

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .mount('#app')
