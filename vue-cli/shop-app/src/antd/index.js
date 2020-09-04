import Vue from 'vue'
import { 
    Input ,
    Icon,
    message,
}  from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Input)
Vue.use(Icon)
message.config({
    top: `70px`,
    duration: 2,
    maxCount: 3,
  });
Vue.prototype.$message = message;