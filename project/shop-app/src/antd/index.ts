// webpack (打包工具) -》 vue-cli （脚手架 scaffold）  babel.js .vue .ts .es6789 -> es5
// rollup  (打包工具) -》 vite     (脚手架 scaffold） 
import Button from "ant-design-vue/lib/button";  // 按需引用
import Input from "ant-design-vue/lib/input";
import List from "ant-design-vue/lib/list";
import Carousel from "ant-design-vue/lib/Carousel";
import Avatar from "ant-design-vue/lib/avatar";
import Spin from "ant-design-vue/lib/spin";
// import {Carousel,List} from "ant-design-vue"  // 局部引用
import message from 'ant-design-vue/lib/message';
import Skeleton from 'ant-design-vue/lib/skeleton';
import Form from 'ant-design-vue/lib/form';
import Upload from 'ant-design-vue/lib/upload';
import Popconfirm from 'ant-design-vue/lib/popconfirm';
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
    app.use(Avatar)
    app.use(Spin)
    app.use(Skeleton)
    app.use(Form)
    app.use(Upload)
    app.use(Popconfirm)
}