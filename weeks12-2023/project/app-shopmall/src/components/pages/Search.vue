<template>
    <div>
        <top-bar :searchInput="searchContent" @searchContentChangeHandle="searchContentChange" :edit="true">
            <template v-slot:left>
                <span class="iconfont icon-fanhuijiantou" style="font-size:20px;" @click="back"></span>
            </template>
            <template v-slot:right>
                <span @click="search">搜索</span>
            </template>
        </top-bar>
        <content>
            <div class="title-bar">
                <div>最近搜索</div>
                <div class="iconfont icon-lajitong clear" @click="clearHistory"></div>
            </div>
            <div class="history-search">
                <div 
                    @click="quickSearch(v)"
                    class="history-search-item" 
                    v-for="v in historySearch"
                > {{ v }} </div>
            </div>
        </content>
    </div>
</template>
<script setup>
import TopBar from "@/components/topbar/TopBar.vue"
import Content from "@/components/content/Content.vue"
import {useRouter} from "vue-router"
import { useState } from "@/store/pageDirection.js"
import { getArray,setArray,removeItem} from "@/kits/localStore.js"
import { ref,inject } from "vue"

let searchContent = "" // 这个变量不需要页面渲染的，所以不用ref
const router = useRouter()
const state = useState()
const historySearch = ref(getArray("historySearch"))
const toast = inject("showToast")

const back = () => {
    state.setDirection("backward")
    router.go(-1)
}

const searchContentChange = (val) => searchContent = val

const search = () => {
    if(searchContent === ""){
        // message.warning('请输入查询内容');
        // message.warning({
        //     content: () => '请输入查询内容',
        //     style: {
        //         marginTop: '120px',
        //     },
        // });
        toast.warning("请输入查询内容")
        return 
    }
    setArray("historySearch",searchContent)
    state.setDirection("forward")
    router.push({
        path:"/searchresult",
        query:{
            searchContent
        }
    })
}

const clearHistory = () => {
    removeItem("historySearch")
    historySearch.value = []
}

const quickSearch = contentFromTag => {
    state.setDirection("forward")
    router.push({
        path:"/searchresult",
        query:{
            searchContent:contentFromTag
        }
    })
}
</script>

<style scoped>
.title-bar {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color:rgb(0 0 0 / 0.5);
}

.clear {
    color:#B620E0;
    font-weight: 500;
}

.history-search {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    margin-top:8px;
    color:rgb(0 0 0 / 0.5);
    align-items: center;
}

.history-search-item {
    padding:3px 8px;
    box-shadow: 0 1px 8px rgb(0 0 0 / 0.1);
    border-radius: 6px;
    margin-right: 8px;
    margin-top: 12px;
    background-color: #fafafa;
}
</style>