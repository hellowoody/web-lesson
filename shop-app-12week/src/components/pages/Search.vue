<script setup>
import {ref,inject} from "vue"
import TopBar from "@/components/topbar/TopBar.vue"
import Content from "@/components/content/Content.vue";
import {useRouter} from "vue-router"
import { useState } from "@/store/pageDirection"
import {getArray,setArray,clearItem} from "@/kits/LocalStorageKit"


// import { useStore } from "vuex"
// const store = useStore();
const historySearch = ref(getArray("historySearch"))
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
        // 在本地缓存中追加一个新内容
        setArray("historySearch",searchContent)
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

const clearHistory = () => {
    clearItem("historySearch") // 仅仅是删掉浏览器中的内地缓存
    historySearch.value = []   // 删除掉页面上的双向绑定的变量
}

const quickSearch = (contentFromTag) => {
    state.setDirection("forward")
    router.push({
        path:"/searchresult",
        query:{
            searchContent:contentFromTag
        }
    })
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
        <content>
            <div class="title-bar">
                <div class="title">最近搜索</div>
                <div class="clear" @click="clearHistory">全部清空</div>
            </div>
            <div class="history-search">
                <div @click="quickSearch(item)" class="history-search-item" v-for="item in historySearch">{{item}}</div>
            </div>
        </content>
    </div>
</template>

<style scoped>
.title-bar {
    display: flex;
    justify-content: space-between;
    font-size:14px;
}

.title {
    color:rgb(0 0 0 / 0.5);
    font-weight:bold;
}

.clear {
    color:#B620E0;
}

.history-search {
    display: flex;
    flex-wrap:wrap;
    margin-top:8px;
    font-size:14px;
}

.history-search-item {
    margin-right:8px;
    margin-top:12px;
    padding:3px 9px;
    border-radius: 6px;
    box-shadow: 0px 1px 8px rgb(0 0 0 / 0.1);
}
</style>