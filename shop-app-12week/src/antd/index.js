import Input from 'ant-design-vue/lib/input';
import List from 'ant-design-vue/lib/list';
import Spin from 'ant-design-vue/lib/spin';
import Button from 'ant-design-vue/lib/button';
import Carousel from 'ant-design-vue/lib/carousel';
import Skeleton from 'ant-design-vue/lib/skeleton';
import Form from 'ant-design-vue/lib/form';
import Avatar from 'ant-design-vue/lib/avatar';
import Upload from 'ant-design-vue/lib/upload';
import Popconfirm from 'ant-design-vue/lib/popconfirm';
import message from "ant-design-vue/lib/message"
import ConfigProvider from "ant-design-vue/lib/config-provider"
// import 'ant-design-vue/dist/antd.css';
import 'ant-design-vue/dist/antd.variable.min.css';

export const useAntd = (app) => {
    ConfigProvider.config({
        theme: {
          primaryColor: '#B620E0',
        },
    });
    message.config({
        top:"120px"
    })
    app.provide("$message",message)
    app.use(Input)
    app.use(List)
    app.use(Spin)
    app.use(Button)
    app.use(Carousel)
    app.use(Skeleton)
    app.use(Form)
    app.use(Avatar)
    app.use(Upload)
    app.use(Popconfirm)
}