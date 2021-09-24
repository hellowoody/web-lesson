
<script setup>
import {inject} from "vue"
import {useRouter} from "vue-router";
import TopBar from "@/components/topbar/TopBar.vue";
const message = inject("$message")
const router = useRouter()
let searchContent = ""
const back = () => router.go(-1)
const go = path => router.push({path})
const goSearch = () => {
    if(searchContent !== ""){
        router.push({
            path:"/searchresult",
            query:{
                searchContent
            }
        })
    }else{
        message.warning("请输入要查询的内容")
    }
}
const searchContentChange = content => {
    console.log("现在时search页面了",content)
    searchContent = content
}
</script>

<template>
    <top-bar @searchContentChangeHandle="searchContentChange" edit>
        <template v-slot:left>
            <div class="iconfont icon-fanhui1" @click="back" style="font-size:23px;"></div>
        </template>
        <template v-slot:right>
            <div class="iconfont icon-sousuo" @click="goSearch" style="font-size:23px;"></div>
        </template>
    </top-bar>
    search page
</template>