import {
    Menu,
    Button,
    Dropdown,
    Form,
    Input,
    List,
    Avatar,
    Spin,
    Select,
    DatePicker,
    Radio,
    Modal,
} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

export const useAntD = (app)=>{
    app.use(Menu)
    app.use(Button)
    app.use(Dropdown)
    app.use(Form)
    app.use(Input)
    app.use(List)
    app.use(Avatar)
    app.use(Spin)
    app.use(Select)
    app.use(DatePicker)
    app.use(Radio)
    app.use(Modal)
}