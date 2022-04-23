import "ant-design-vue/dist/antd.css"; 
import "./css/common.css"
import {createApp} from "vue";
import Antd from "ant-design-vue"; 
import Main from "./component/main.js"

createApp(Main)
    .use(Antd)
    .mount("#app");


if (import.meta.webpackHot) {
    import.meta.webpackHot.accept(() => console.log('Accepting the updated printMe module!'));
}