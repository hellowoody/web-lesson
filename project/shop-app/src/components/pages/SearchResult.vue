<script setup>
import {useRoute,useRouter} from "vue-router"
import TopBar from "@/components/topbar/TopBar.vue";
const route = useRoute();
const router = useRouter()
const back = () => router.go(-1)
const go = path => router.push({path})
let searchContent = ""
const searchContentChange = content => {
    // console.log("现在时searchResult页面了",content)
    searchContent = content
}
const router_param_searchContent = route.query.searchContent;

const initData = (content) => {
    console.log("调用后台搜索方法的参数:",content)
    // 待实现
    // http.post("http://api",{
    //     searchContent : router_param_searchContent
    // }).then((resData) => {

    // })
    //  resData => [{},{},{}]
}

// 将从上一个页面拿到的搜索内容router_param_searchContent ，调用后台api进行搜索
initData(router_param_searchContent);

const search = () => {
    console.log("本次搜索的新内容:",searchContent)
    initData(searchContent)
}

</script>

<template>
    <top-bar @searchContentChangeHandle="searchContentChange" :searchInput="router_param_searchContent" edit>
        <template v-slot:left>
            <div class="iconfont icon-fanhui1" @click="back" style="font-size:23px;"></div>
        </template>
        <template v-slot:right>
            <div class="iconfont icon-sousuo" @click="search" style="font-size:23px;"></div>
        </template>
    </top-bar>
    search result
</template>
