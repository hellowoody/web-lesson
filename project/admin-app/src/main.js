import { createApp } from 'vue'
import App from './App.vue'
import {router} from "./router"
import {useAntD} from "./antd"

const app = createApp(App)  // App 组件的入口文件
app.use(router)
useAntD(app)
app.mount('#app') // #app dom selector 找的就是项目根目录中index.html中<div id="app"></div> 
