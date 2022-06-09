import 'ant-design-vue/dist/antd.css'; 
import "@/css/common.css"

import Antd from 'ant-design-vue';
import {createApp} from "vue"
import App from "@/component/App.js"

// createApp的参数其实是组件的入口
/*
    const app = createApp(Counter);
    app.use(Antd)
    app.mount("#app")
*/
createApp(App)
    .use(Antd)
    .mount("#app")



if(import.meta.webpackHot){
    import.meta.webpackHot.accept(e => console.log("热替换的错误:",e))
}
