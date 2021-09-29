// webpack (打包工具) -》 vue-cli （脚手架 scaffold）  babel.js .vue .ts .es6789 -> es5
// rollup  (打包工具) -》 vite     (脚手架 scaffold） 
import Button from "ant-design-vue/lib/button";  // 按需引用
import Input from "ant-design-vue/lib/input";
import List from "ant-design-vue/lib/list";
import Carousel from "ant-design-vue/lib/Carousel";
// import {Carousel,List} from "ant-design-vue"  // 局部引用
import message from 'ant-design-vue/lib/message';
import "ant-design-vue/dist/antd.css";

export const useAntd = (app) => {
    message.config({
        top:"100px"
    })
    app.provide("$message",message)
    app.use(Button)
    app.use(Input)
    app.use(List)
    app.use(Carousel)
}