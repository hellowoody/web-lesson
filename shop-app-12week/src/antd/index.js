import Input from 'ant-design-vue/lib/input';
import List from 'ant-design-vue/lib/list';
import Spin from 'ant-design-vue/lib/spin';
import Button from 'ant-design-vue/lib/button';
import message from "ant-design-vue/lib/message"
import 'ant-design-vue/dist/antd.css';

export const useAntd = (app) => {
    message.config({
        top:"120px"
    })
    app.provide("$message",message)
    app.use(Input)
    app.use(List)
    app.use(Spin)
    app.use(Button)
}