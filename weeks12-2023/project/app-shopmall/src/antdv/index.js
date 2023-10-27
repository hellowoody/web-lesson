import { message } from 'ant-design-vue';

export const useAntdv = (app) => {

    // 通过vue的依赖注入（inject provide），将antdv中的message封装成自己的全局方法
    message.config({
        top:"120px"
    })
    app.provide("showToast",message)
}