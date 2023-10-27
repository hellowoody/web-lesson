<template>
    <a-input-search 
        style="margin:8px 0;" 
        placeholder="请输入要查询的商品" 
        v-model:value="searchInput"
        @search="resetSearch" 
        enter-button="重置"
        :loading="searchInputLoading"
    />
    <a-list :data-source="list" >
        <template #renderItem="{item,index}">
            <a-list-item>
                <a-list-item-meta :description="showPrice(item.price)">
                    <template #title>
                        {{ item.name }}
                    </template>
                    <template #avatar>
                        <a-avatar shape="square" :src="item.imgpath" />
                    </template>    
                </a-list-item-meta>
                <template #actions>
                    <a @click="edit(item)">编辑</a>
                    <a style="color:red;" @click="del(item,index)">删除</a>
                </template>
            </a-list-item>
        </template>
        <template #loadMore>
            <div v-if="list.length > 0" style="text-align: center;margin-top: 12px;">
                <a-button class="loadmore" @click="loadMore">加载更多</a-button>
            </div>
        </template>
    </a-list>
</template>
<script setup>
import { ref,computed, watch } from 'vue'
import { gql } from '@/kits/fetch'
import {message} from "ant-design-vue"
import { useState } from "@/stores/good"

const state = useState()
const list = ref([])
const searchInput = ref('')
const searchInputLoading = ref(false)
let start = 0, count = 10;

const fetchData = async (cb) => {
    const p = {
        query:`
            {
                goods(name:"${searchInput.value}",start: ${start}, count: ${count}) {
                    id
                    imgpath
                    name
                    price
                    gooddesc
                    count
                    type
                }
            }
        `
    }

    try {
        const res = await gql(p)
        cb(res.data.goods)
    } catch (e) {
        message.warning(e.message)
    }
}

const loadMore = () => fetchData(resData => {
    if(resData && resData.length > 0){
        list.value = list.value.concat(resData)
        start += resData.length
    }
})

const initData = () => {
    fetchData((resData) => {
        list.value = resData
        start += resData.length
    })
}

initData()

const showPrice = computed(() => {
    return price => "￥ " + price.toFixed(2)
})

const resetSearch = () => {
    start = 0
    searchInput.value = ''
    initData()
}
let stId;
watch(searchInput, () =>{
    clearTimeout(stId)
    searchInputLoading.value = true
    stId = setTimeout(() => { 
        start = 0
        fetchData(resData => {
            list.value = resData
            start += resData.length
            searchInputLoading.value = false
        })
    },500)
})

const edit = item => state.setSelected(item)

const del = async (item,index) => {
    const p = {
        query:`
            mutation {
                delGood (id:"${item.id}") {
                    code
                    msg
                }
            }
        `
    }
    try {
        const res = await gql(p)
        if(res.data.delGood.code === 1){
            list.value.splice(index,1)
            message.success(res.data.delGood.msg)
        }else{
            message.warning(res.data.delGood.msg)
        }
    } catch (e) {
        message.warning(e.message)
    }
}

watch(() => state.refreshCount, () => {
    resetSearch()
})

</script>
<style scoped>
.ant-list-item .ant-list-item-meta {
    align-items: center ;
}
</style>