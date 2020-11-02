import {
    Button,
    Dropdown,
    Menu
} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

export const useAntD = app => {
    app.use(Button)
    app.use(Dropdown)
    app.use(Menu)
} 