import { createApp } from 'vue'
import App from './App.vue'
import {vuex_store} from "./vuex"
// import {pinia_store} from "./pinia"
import {createPinia} from "pinia"

createApp(App)
    .use(vuex_store)    
    // .use(pinia_store)    
    .use(createPinia())   // pinia 可以直接在main入口文件中use使用
    .mount('#app')
