import Button from "ant-design-vue/lib/button"
import Input from "ant-design-vue/lib/input"
import Menu from "ant-design-vue/lib/menu"
import "ant-design-vue/dist/antd.css"

export const useAntD = (app) => {
    app.use(Button)
    app.use(Input)
    app.use(Menu)
}