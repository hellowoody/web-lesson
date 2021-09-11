// 在vite中，叫局部导入。 
// 在webpack中，这种是按需加载，多了一个插件工具 babel-pulgins-xxx
// import {Button,message} from "ant-design-vue";       
// 按需加载
import Button from 'ant-design-vue/lib/button';
import message from 'ant-design-vue/lib/message';
import "ant-design-vue/dist/antd.css";
import { App } from 'vue';

/*
  useAntD function 的 parameter 是main.js中 createApp返回的对象
*/
export const useAntD = (app:App<Element>) => {
    app.use(Button)
    app.provide("$message",message)   // 手段1
    app.config.globalProperties.$message = message;  //手段2
}