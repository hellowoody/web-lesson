import 'ant-design-vue/dist/antd.css';
import "@/css/common.css";
import {createApp} from "vue"
import Antd from "ant-design-vue";
import App from "@/component/App.js"

createApp(App)
    .use(Antd)
    .mount("#app")

// 让js文件开启hmr热替换
if(import.meta.webpackHot) {
    // 只传一个参数，这个参数就是处理错误的回调
    // 只传一个参数，是将当前页面，以及当前页面引用的文件都开启
    import.meta.webpackHot.accept();
    
}
