import { createApp } from 'vue'
// import {Button,message} from "ant-design-vue";       // 局部导入
// 按需加载
import Button from 'ant-design-vue/lib/button';
import message from 'ant-design-vue/lib/message';
import "ant-design-vue/dist/antd.css";
import App from './App.vue'

const app = createApp(App) // 传进来的是组件
app.use(Button)
app.provide("$message",message)   // 手段1
app.config.globalProperties.$message = message;  //手段2
app.mount('#app')
