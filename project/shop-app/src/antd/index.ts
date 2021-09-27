import Button from "ant-design-vue/lib/button";
import Input from "ant-design-vue/lib/input";
import List from "ant-design-vue/lib/list";
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
}