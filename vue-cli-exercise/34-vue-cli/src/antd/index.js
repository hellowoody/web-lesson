import 'ant-design-vue/dist/antd.css';

import Vue from "vue";
// import Antd from 'ant-design-vue'; // 全局加载
import { 
    Button,
    FormModel,
    List,
    Layout,
    Input,
    Spin,
    message,
    notification,
    Icon
} from 'ant-design-vue'; // 部分加载

Vue.use(Button)
Vue.use(FormModel)
Vue.use(List)
Vue.use(Layout)
Vue.use(Input)
Vue.use(Spin)
Vue.use(Icon)

Vue.prototype.$message = message
Vue.prototype.$notification = notification