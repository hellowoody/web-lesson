import {createApp} from "vue"
import Counter from "./component/Counter.js"

// createApp的参数其实是组件的入口
createApp(Counter).mount("#app")


if(import.meta.webpackHot){
    import.meta.webpackHot.accept(e => console.log("热替换的错误:",e))
}
