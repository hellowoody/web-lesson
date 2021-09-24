import Button from "ant-design-vue/lib/button";
import Input from "ant-design-vue/lib/input";
import message from 'ant-design-vue/lib/message';
import "ant-design-vue/dist/antd.css";

export const useAntd = (app) => {
    message.config({
        top:"100px"
    })
    app.provide("$message",message)
    app.use(Button)
    app.use(Input)
}