// ES6  导入/ 导出  import / export
/*
    js es语法 dom bom
    es语法中，不要求有后缀
*/
import 'ant-design-vue/dist/antd.css'; 
import "@/css/index.css";

import Vue from "vue/dist/vue";
import Antd from "ant-design-vue"; //antd.js
import { LeftPart } from "@/js/components/left-part" 
import RightPart , {zhangsan} from "@/js/components/right-part"; 

Vue.use(Antd)
console.log(zhangsan)
new Vue({
    el:"#app",
    data:{
        title:"单页面记事本应用-Vue",
        list:[
            {
                id:"1",
                title:"事项1",
                content:"内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1"
            },
            {
                id:"2",
                title:"事项2",
                content:"内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1"
            },
            {
                id:"3",
                title:"事项3",
                content:"内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1"
            },
        ],
        formData:{
            id:"",
            title:"",
            content:""
        },
        searchContent:"",
        old_list :[]
    },
    methods:{
        sub(){
            console.log("我接受到了子组件的广播")
            this.formData.id = Date.now().toString().substr(-3)
            this.list.push(this.formData)
            this.formData = {
                id:"",
                title:"",
                content:""
            }
        },
        del(index){
            this.list.splice(index,1)
        },
        delById(id){
            this.list = this.list.filter(item => item.id === id ? false : true)
        },
        detail(item){
            this.formData = JSON.parse(JSON.stringify(item))
        },
        update(){
            const flag = this.list.some((item) => {
                return item.id === this.formData.id
            })
            if(flag){
                // todo update
                this.list = this.list.map((item) => {
                    if(item.id === this.formData.id){
                        item = this.formData
                    }
                    return item
                })
            }else{
                alert("该id不存在于左侧列表中，请点击新增按钮进行添加")
            }
        },
        onSearch(){
            console.log(this.searchContent)
            this.list = this.list.filter((item) => {
                if(item.title.indexOf(this.searchContent) < 0 && item.content.indexOf(this.searchContent) < 0  ){
                    return false
                }else{
                    return true
                }
            })
        }
    },
    components:{
        LeftPart,
        RightPart
    }
})
