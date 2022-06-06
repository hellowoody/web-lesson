import {ref} from "vue"
import PartRight from "@/component/PartRight.js"
import PartLeft from "@/component/PartLeft.js"

export default {
    setup(){
        const title = ref("webpack vue 大作业")
        const searchContent = ref("")
        const listData = ref([])
        const formData = ref({
            id:"",
            title:"",
            content:""
        })

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

        const onSearch = () => console.log("onSearch method")

        return {
            title,
            searchContent,
            formData,
            listData,
            sub,
            onSearch
        }
    },
    components:{
        PartRight,
        PartLeft
    },
}