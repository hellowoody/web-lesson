import { createApp } from 'vue'
import {Button,message} from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import App from './App.vue'

const app = createApp(App) // 传进来的是组件
app.use(Button)
app.provide("$message",message)
app.config.globalProperties.$message = message;
app.mount('#app')
