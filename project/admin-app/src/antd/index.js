import Button from "ant-design-vue/lib/button"
import Input from "ant-design-vue/lib/input"
import Menu from "ant-design-vue/lib/menu"
import Dropdown from "ant-design-vue/lib/dropdown"
import Form from "ant-design-vue/lib/form"
import message from "ant-design-vue/lib/message";
import "ant-design-vue/dist/antd.css"

export const useAntD = (app) => {
    app.provide("$message",message)
    app.use(Button)
    app.use(Input)
    app.use(Menu)
    app.use(Dropdown)
    app.use(Form)
}