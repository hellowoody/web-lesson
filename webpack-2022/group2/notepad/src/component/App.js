import {ref} from "vue"
import PartRight from "@/component/PartRight.js"
import PartLeft from "@/component/PartLeft.js"

export default {
    setup(){
        const title = ref("webpack vue 大作业")
        const searchContent = ref("")
        const listData = ref([
            {
                show:true,
                id:1,
                title:"事项1",
                content:"11111111111"
            },
            {
                show:true,
                id:2,
                title:"事项2",
                content:"22222222222"
            },
            {
                show:true,
                id:3,
                title:"事项3",
                content:"333333333333"
            },
        ])
        const formData = ref({
            show:true,
            id:"",
            title:"",
            content:""
        })

        const sub = () => {
            const id = Date.now().toString().substr(-5)
            formData.value.id = id
            listData.value.push(formData.value)
            formData.value = {
                show:true,
                id:"",
                title:"",
                content:""
            }
        }

        const update = () => {
            const flag = listData.value.some(item => {
                return item.id === formData.value.id
            })

            if(flag){
                listData.value = listData.value.map(item => {
                    if(item.id === formData.value.id){
                        // item = JSON.parse(JSON.stringify(formData.value))
                        item = Object.assign({},formData.value)
                    }
                    return item
                })
            }else{
                alert("该表单的id不存在在现有list中，请重新操作")
            }
        }

        const edit = index => {
            // formData.value = {
            //     id:listData.value[index].id,
            //     title:listData.value[index].title,
            //     content:listData.value[index].contesnt,
            // }

            formData.value = {
                ...listData.value[index]
            }

            // formData.value = listData.value[index]  //注意不要这么使用
        }

        const del = id => {
            listData.value = listData.value.filter(item => item.id === id ? false : true)
        }

        const onSearch = () => {
            for(const item of listData.value){
                if(searchContent.value === ""){
                    item.show = true
                }else{
                    if(item.title.indexOf(searchContent.value) < 0 && item.content.indexOf(searchContent.value) < 0){
                        item.show = false
                    }else{
                        item.show = true
                    }
                }
            }
        }

        return {
            title,
            searchContent,
            formData,
            listData,
            sub,
            update,
            edit,
            del,
            onSearch
        }
    },
    components:{
        PartRight,
        PartLeft
    },
}