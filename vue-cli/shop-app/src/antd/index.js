import Vue from 'vue'
import { 
    Input ,
    Icon,
    message,
    List,
    Carousel,
    Avatar,
    Skeleton,
    Button,
    FormModel
}  from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Input)
Vue.use(Icon)
Vue.use(List)
Vue.use(Carousel)
Vue.use(Avatar)
Vue.use(Skeleton)
Vue.use(Button)
Vue.use(FormModel)

message.config({
    top: `70px`,
    duration: 2,
    maxCount: 3,
  });
Vue.prototype.$message = message;