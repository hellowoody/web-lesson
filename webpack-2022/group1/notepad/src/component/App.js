import {ref} from "vue"
import CardLeft from "@/component/CardLeft.js"
import CardRight from "@/component/CardRight.js"

export default {
    setup(){
        const title = "webpack vue 大作业";
        const searchContent = ref("")
        const formData = ref({
            show:true,
            id:"",
            title:"",
            content:""
        })
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
                content:"222222222222"
            },
            {
                show:true,
                id:3,
                title:"事项3",
                content:"3333333333333"
            },
        ])

        const sub = () => {
            const id = Date.now().toString().substr(-5)
            formData.value.id = id
            listData.value.push(formData.value)
            formData.value = {
                id:"",
                title:"",
                content:""
            }
        }

        const update = () => {
            /*
                先判断或校验是否可以修改
                如果可以修改，再继续后续动作

                flag ： true / false


                Array filter map forEach every some

                const res = [-1,2,3].some(item => {
                                return item > 0
                            })
            */ 
            const flag = listData.value.some((item) => {
                return item.id === formData.value.id
            })

            if(flag){
                listData.value = listData.value.map(item => {
                    if(item.id === formData.value.id){
                        // item = formData.value                             // ? 这样做会使左右卡片实时联动
                        // item = JSON.parse(JSON.stringify(formData.value)) // 让 formData.value 失去“代理”功能
                        item = Object.assign({},formData.value)              // 浅拷贝
                    }
                    return item
                })
            }else{
                alert("左侧列表中不存在该表单中的内容，请重新操作")
            }

        }

        const del = id => {
            listData.value = listData.value.filter(item => item.id === id ? false : true)
        }

        const edit = index => {
            // formData.value = {
            //     id:listData.value[index].id,
            //     title:listData.value[index].title,
            //     content:listData.value[index].content,
            // }
            formData.value = {
                ...listData.value[index]
            }

            // formData.value = listData.value[index]  // 注意 这么写会缺失保存环节
        }

        const onSearch = () => {
            for(const item of listData.value){
                if(item.title.indexOf(searchContent.value) < 0 && item.content.indexOf(searchContent.value) < 0){
                    item.show = false
                }else{
                    item.show = true
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
            del,
            edit,
            onSearch
        }
    },
    components:{
        CardLeft,
        CardRight
    },
    template:`
        <a-layout class="layout">
            <a-layout-header class="top-bar">{{title}}</a-layout-header>
            <a-layout-content class="content">
                <card-left
                    :list="listData"
                    @on-del="del"
                    @on-edit="edit"
                ></card-left>
                <card-right 
                    v-bind:formdata="formData"
                    v-on:on-sub="sub"
                    v-on:on-update="update"
                ></card-right>
            </a-layout-content>
            <a-layout-footer>
                <a-input-search
                    v-model:value="searchContent"
                    placeholder="请输入你要过滤的内容"
                    enter-button
                    @search="onSearch"
                />
            </a-layout-footer>
        </a-layout>
    `
}