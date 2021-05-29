// es6 import / export
import "ant-design-vue/dist/antd.css"; 
import "../css/index.css"

import Vue from "vue/dist/vue.js";
import Antd from "ant-design-vue"; // js   <script src="./antd/antd.js"></script>
// es6 其中一种导入方式
import { LeftPart } from "./components/left-part" 
// es6 另外一种入方式
import RightPart,{newField} from "./components/right-part"

console.log(newField)
Vue.use(Antd)

new Vue({
    el:"#app",
    data:{
        title:"vue 记事本练习",
        listData:[
            {
                show:true,
                id:"1",
                title:"事项1",
                content:"事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容"
            },
            {
                id:"2",
                title:"事项2",
                content:"事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容"
            },
            {
                id:"3",
                title:"事项3",
                content:"事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容"
            },
        ],
        formData:{
            id:"",
            title:"",
            content:"",
        },
        searchContent:"",
    },
    methods:{ 
        del(id){
            this.listData = this.listData.filter(item => item.id === id ? false : true)
        },
        delByIndex(index){
            this.listData.splice(index,1)
        },
        detail(obj){
            console.log(obj)
            console.log(JSON.stringify(obj)) // json obj to string
            console.log(JSON.parse(JSON.stringify(obj))) // string to json obj
            this.formData = JSON.parse(JSON.stringify(obj))
        },
        sub(){
            this.formData.id = Date.now().toString().substr(-5)
            this.listData.push(this.formData)
            this.formData = {
                id:"",
                title:"",
                content:""
            }
        },
        updateForm(){
            let flag = this.listData.some((item)=>{
                return item.id === this.formData.id
            })
            if(flag){
                this.listData = this.listData.map((item) => {
                    // this -> vue
                    if(item.id === this.formData.id){
                        item = this.formData
                    }
                    return item
                })
            }else{
                alert("该表单的id不存在在原有list中，请点击新增按钮")
            }
            
        },
        onSearch(){
            console.log(1000,this.searchContent)
            this.listData = this.listData.filter((item) => {
                if(item.title.indexOf(this.searchContent) < 0 && item.content.indexOf(this.searchContent) < 0 ){
                // if(!item.title.includes(this.searchContent) && !item.content.includes(this.searchContent)){
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