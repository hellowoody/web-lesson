import Menu from "ant-design-vue/lib/menu"
import Dropdown from "ant-design-vue/lib/dropdown"
import Form from 'ant-design-vue/lib/form';
import Input from 'ant-design-vue/lib/input';
import Button from 'ant-design-vue/lib/button';
import List from 'ant-design-vue/lib/list';
import Spin from 'ant-design-vue/lib/spin';
import Avatar from 'ant-design-vue/lib/avatar';
import Modal from "ant-design-vue/lib/modal"
import Select from "ant-design-vue/lib/select"
import Radio from "ant-design-vue/lib/radio"
import Switch from "ant-design-vue/lib/switch"
import DatePicker from "ant-design-vue/lib/date-picker"
import message from "ant-design-vue/lib/message"
import 'ant-design-vue/dist/antd.css';

export const useAntD = (app) => {
    message.config({
        top:"120px"
    })
    app.provide("$message",message)

    app.use(Menu)
    app.use(Dropdown)
    app.use(Form)
    app.use(Input)
    app.use(Button)
    app.use(List)
    app.use(Spin)
    app.use(Avatar)
    app.use(Modal)
    app.use(Select)
    app.use(Radio)
    app.use(Switch)
    app.use(DatePicker)
}