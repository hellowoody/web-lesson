import Button from "ant-design-vue/lib/button";
import Input from "ant-design-vue/lib/input";
import "ant-design-vue/dist/antd.css";

export const useAntd = (app) => {
    app.use(Button)
    app.use(Input)
}