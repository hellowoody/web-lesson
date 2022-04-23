import {ref} from "vue"
import { PartLeft } from "./part-left.js" 
import PartRight from "./part-right.js"

export default {
    setup(){
        const title = ref("vue 记事本练习")
        const searchContent = ref("")
        const listData = ref([
            {
                show:true,
                id:"1",
                title:"事项1",
                content:"111111111"
            },
            {
                id:"2",
                title:"事项2",
                content:"2222222222"
            },
            {
                id:"3",
                title:"事项3",
                content:"33333333333"
            },
        ])

        const formData = ref({
            id:"",
            title:"",
            content:"",
        })

        const del = id => {
            listData.value = listData.value.filter(item => item.id === id ? false : true)
        }

        const delByIndex = index => listData.value.splice(index,1)

        const detail = obj => {
            console.log(obj)
            console.log(JSON.stringify(obj)) // json obj to string
            console.log(JSON.parse(JSON.stringify(obj))) // string to json obj
            formData.value = JSON.parse(JSON.stringify(obj))
        }

        const sub = () => {
            formData.value.id = Date.now().toString().substr(-5)
            listData.value.push(formData.value)
            formData.value = {
                id:"",
                title:"",
                content:""
            }
        }

        const updateForm = () => {
            let flag = listData.value.some((item)=>{
                return item.id === formData.value.id
            })
            if(flag){
                listData.value = listData.value.map((item) => {
                    // this -> vue
                    if(item.id === formData.value.id){
                        item = formData.value
                    }
                    return item
                })
            }else{
                alert("该表单的id不存在在原有list中，请点击新增按钮")
            }
        }

        const onSearch = () => {
            console.log(1000,searchContent.value)
            listData.value = listData.value.filter((item) => {
                if(item.title.indexOf(searchContent.value) < 0 && item.content.indexOf(searchContent.value) < 0 ){
                // if(!item.title.includes(this.searchContent) && !item.content.includes(this.searchContent)){
                    return false
                }else{
                    return true
                }
            })
        }


        return {
            title,
            searchContent,
            listData,
            formData,
            del,
            delByIndex,
            detail,
            sub,
            updateForm,
            onSearch
        }
    },
    components:{
        PartLeft,
        PartRight
    }
}