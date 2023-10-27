<template>
    <div>
        <top-bar 
            :searchInput="route_query_searchContent" 
            @searchContentChangeHandle="searchContentChange" 
            :edit="true"
        >
            <template v-slot:left>
                <span class="iconfont icon-fanhuijiantou" style="font-size:20px;" @click="back"></span>
            </template>
            <template v-slot:right>
                <span @click="search">搜索</span>
            </template>
        </top-bar>
        <!-- <content :pull="true" :refreshFunc="search"> -->
        <content pull :refreshFunc="search">
            <div class="title">{{ route_query_categoryName }}类别,已查询 {{ searchedCount }} 条</div>
            <a-list
                :data-source="list"
            >
                <template #renderItem="{item}">
                   <product-card :product="item" />
                </template>
                <template #loadMore>
                    <div style="text-align: center;margin-top: 12px;">
                        <a-button class="loadmore" @click="loadMore">加载更多</a-button>
                    </div>
                </template>
            </a-list>
        </content>
    </div>
</template>
<!-- 
    created  变量 方法 
    mounted  v-dom render dom
-->
<script setup>
import TopBar from "@/components/topbar/TopBar.vue"
import ProductCard from "@/components/product/ProductCard.vue"
import Content from "@/components/content/Content.vue"
import {useRouter,useRoute} from "vue-router"
import { useState } from "@/store/pageDirection.js"
import {gql} from "@/kits/fetch.js"
import {ref} from "vue"

const router = useRouter()
const route = useRoute()
const state = useState()
let start = 0,count = 5
const searchedCount = ref(0)
const list = ref([])

let route_query_searchContent = route.query.searchContent ? route.query.searchContent : ""
let route_query_categoryId = route.query.categoryId ? route.query.categoryId : ""
let route_query_categoryName = route.query.categoryName? route.query.categoryName : "全部"
console.log("搜索结果页面是否能拿到参数:",route_query_searchContent)

const searchContentChange = (val) => route_query_searchContent = val

const back = () => {
    state.setDirection("backward")
    router.go(-1)
}

const search = () => {
    start = 0
    list.value = []
    return fetchData()
}

const loadMore = () => {
    fetchData()
}

const fetchData = async () => {
    console.log(start)
    try {
        const params = {
            query:`
                {
                    goods(name:"${route_query_searchContent}",categoryId:"${route_query_categoryId}",start:${start},count:${count}) {
                        id
                        name
                        price
                        imgpath
                        type
                    }
                }
            `
        }
        const res = await gql(params)
        start += res.data.goods.length
        searchedCount.value = start
        console.log(res.data.goods)
        list.value = list.value.concat(res.data.goods)
        return {
            code:"ok"
        }
    } catch (e) {
        console.log(e)
        return {
            code:"failed"
        }
    }
}


const initData = () => fetchData()

initData()
</script>

<style scoped>

/* :deep(.ant-btn.loadmore) {
    border-color: #B620E0;
    color:#B620E0;
}

:deep(.ant-btn:active) {
    background: #b620e053;
    color:#B620E0;
} */

.title {
    font-size: 13px;
    color:rgb(0 0 0 / 0.5)
}
</style>