import {ref} from "vue"
import PartRight from "@/component/PartRight.js"
import PartLeft from "@/component/PartLeft.js"

export default {
    setup(){
        const title = ref("webpack vue 大作业")
        const searchContent = ref("")

        const onSearch = () => console.log("onSearch method")

        return {
            title,
            searchContent,
            onSearch
        }
    },
    components:{
        PartRight,
        PartLeft
    }
}