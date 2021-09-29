
<script setup>
import {ref,inject} from "vue"
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import TopBar from "@/components/topbar/TopBar.vue";
import MyContent from "@/components/content/MyContent.vue";
import {setArray,getArray,clearItem} from "@/kits/LocalStorageKit.ts";

const message = inject("$message")
const router = useRouter()
const store = useStore();

let searchContent = ""
const historySearch = ref(getArray("historySearch"))  // 因为historySearch这个对象需要显示在页面上

const back = () => {
    store.commit("pageDirection/setDirection","backward")
    router.go(-1)
}

const go = path => router.push({path})
const goSearch = () => {
    if(searchContent !== ""){
        // set 本地缓存
        /*
            localStorage: string
            "a" "b" "c"  -> "a,b,c"

            get: "a,b,c"  -> array ["a","b","c"] 

            set: "d"
                get: ["a","b","c"]
                arr.push("d") ["a","b","c","d"]
                setItem "a,b,c,d"
        */ 
        setArray("historySearch",searchContent)
        store.commit("pageDirection/setDirection","forward")
        
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
    // console.log("现在时search页面了",content)
    searchContent = content
}
const searchByHistory = searchContent => {
    store.commit("pageDirection/setDirection","forward")
    router.push({
        path:"/searchresult",
        query:{
            searchContent
        }
    })
}
const clearSearchHistory = () => {
    clearItem("historySearch")
    historySearch.value = []
}
    
</script>

<template>
    <div>
        <top-bar @searchContentChangeHandle="searchContentChange" edit>
            <template v-slot:left>
                <div class="iconfont icon-fanhui1" @click="back" style="font-size:23px;"></div>
            </template>
            <template v-slot:right>
                <div class="iconfont icon-sousuo" @click="goSearch" style="font-size:23px;"></div>
            </template>
        </top-bar>
        <my-content>
            <div style="display:flex;justify-content:space-between;">
                <div style="color:rgb(0 0 0 / 0.5);font-size:16px;font-weight:bold;">最近搜索</div>
                <div style="color:#B620E0;font-size:14px;" @click="clearSearchHistory">清空</div>
            </div>
            <div class="history-search-content">
                <div class="history-search-item" @click="searchByHistory(item)" v-for="(item,index) in historySearch" :key="index+item">
                    {{item}}
                </div>
            </div>
        </my-content>
    </div>
</template>

<style scoped>
.history-search-content {
    display:flex;
    flex-wrap:wrap;
    margin-top:8px;
    font-size:14px;
}

.history-search-item {
    padding:3px 9px;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgb(40 40 40 / 0.2);
    margin-right:8px;
    margin-top:12px;
    border-radius: 5px;
}
</style>