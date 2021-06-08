import 'ant-design-vue/dist/antd.css';
import Vue from "vue";
import {
    Button,
    Layout,
    Input,
    List,
    FormModel,
    Icon,
    message,
    notification,
  } from 'ant-design-vue'; //部分加载

/*
  use -> 装载你的组件的
  prototype -> 注册你的方法
*/ 
Vue.use(Button)
Vue.use(Layout)
Vue.use(Input)
Vue.use(List)
Vue.use(FormModel)
Vue.use(Icon)
Vue.prototype.$message = message;
Vue.prototype.$notification = notification;