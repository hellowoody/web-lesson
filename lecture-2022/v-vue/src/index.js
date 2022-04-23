import "ant-design-vue/dist/antd.css"; 

import {createApp} from "vue";
import {Button,Card} from "ant-design-vue";  // 按需引用
import Main from "./component/main.js"

createApp(Main)
    .use(Button)
    .use(Card)
    .mount("#app");


if (import.meta.webpackHot) {
    import.meta.webpackHot.accept(() => console.log('Accepting the updated printMe module!'));
}