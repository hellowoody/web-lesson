<script setup>
import {inject} from "vue"
import TopBar from "@/components/topbar/TopBar.vue"
import {useRouter} from "vue-router"
import { useState } from "@/store/pageDirection"

// import { useStore } from "vuex"
// const store = useStore();
const message = inject("$message")
let searchContent = ""  // 对于搜索入口页面，这个变量不需要绑定
const router = useRouter()
const state = useState()

const back = () => {
    // store.commit("pageDirection/setDirection","backward")
    state.setDirection("backward")
    router.go(-1)
    // router.back()
}

const search = () => {
    if(searchContent !== ""){
        // store.commit("pageDirection/setDirection","forward")
        state.setDirection("forward")
        router.push({
            path:"/searchresult",
            query:{
                searchContent
            }
        })
    }else{
        // alert("请输入要查询的东西")
        message.warning("请输入要查询的东西")
    }
} 
// 接受子组件传来的最新输入值
const searchContentChange = content => {
    console.log("search组件中 输入框的最新值：",content)
    searchContent = content
}
</script>

<template>
    <div>
        <top-bar :searchInput="searchContent" :edit="true" @searchContentChangeHandle="searchContentChange">
            <template v-slot:left>
                <span class="iconfont icon-xiangzuojiantou" @click="back"></span>
            </template>
            <template v-slot:right>
                <span @click="search">搜索</span>
            </template>
        </top-bar>
        <h1>搜索入口页面</h1>
    </div>
</template>