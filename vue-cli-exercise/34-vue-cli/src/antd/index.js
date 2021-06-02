import 'ant-design-vue/dist/antd.css';

import Vue from "vue";
// import Antd from 'ant-design-vue'; // 全局加载
import { 
    Button,
    FormModel,
    List,
    Layout,
    Input
} from 'ant-design-vue'; // 部分加载

Vue.use(Button)
Vue.use(FormModel)
Vue.use(List)
Vue.use(Layout)
Vue.use(Input)