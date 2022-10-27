<script setup>
import { ref,inject,computed,watch } from "vue"
import { gql } from "@/kits/HttpKit"
import { useState } from "@/store/product"

const productState = useState()
const message = inject("$message")
const list = ref([])
const loadingMore = ref(false)
const searchInput = ref("")
const searchInputLoading = ref(false)
let start = 0 , count = 10;

const fetchData = async (handler) => { 
    loadingMore.value = true
    const dictId = "goods_type"
    const p = {
        query:`
            {
                goods (name:"${searchInput.value}",start:${start},count:${count}) {
                    id
                    imgpath
                    name
                    gooddesc
                    price
                    count
                    date
                    status
                    type (id:"${dictId}"){
                        id
                    }
                } 
            }
        `
    }
    try {
        const res = await gql(p)
        handler(res.data.goods) 
      
    } catch (e) {
        message.warning(e.message)
    } finally {
        loadingMore.value = false
    }
}

const onLoadMore = () => fetchData((resData) => {
    if(resData && resData.length > 0){
        list.value = list.value.concat(resData)
        start += resData.length    
    }
})

const showPrice = computed(() => {
    return price => "¥ "+price.toFixed(2)
})

const edit = product => productState.setSelected(product)

const del = async (item,idx) => {
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
        // console.log(res)
        if(res.data.delGood.code === 1){
            list.value.splice(idx,1)
            message.success(res.data.delGood.msg)
        }else{
            message.warning(res.data.delGood.msg)
        }
    } catch (e) {
        message.warning(e.message)
    }
}
// const mockFetch = () => {
//     console.log("模拟请求网络")
//     setTimeout(() => {
//         searchInputLoading.value = false
//     },2000)
// }
let stId;
watch(searchInput,(newVal) => {
    // console.log("new:",newVal)
    // 用“抖动”控制何时请求网络
    clearTimeout(stId) // undefined lastStId
    stId = setTimeout(() => {
        searchInputLoading.value = true
        start = 0
        fetchData((resData) => {
            list.value = resData
            start += resData.length   
            searchInputLoading.value = false
        })
        // mockFetch()
    }, 500);
})

const initData = () => {
    fetchData((resData) => {
        if(resData && resData.length > 0){
            list.value = resData
            start += resData.length    
        }
    })
}

const resetSearch = () => {
    start = 0;
    searchInput.value = ""
    initData()
}

initData()

watch(() => productState.refreshCount,() => resetSearch() )

</script>

<template>
    <a-input-search
      v-model:value="searchInput"
      placeholder="请输入要查询的商品"
      :loading="searchInputLoading"
      style="margin:8px 0;"
      @search="resetSearch"
      enter-button="重置"
    />
    <a-list :data-source="list">
        <template #renderItem="{item,index}">
            <a-list-item>
                <a-list-item-meta :description="showPrice(item.price)">
                    <template #avatar>
                        <a-avatar shape="square" :src="item.imgpath" />
                    </template>
                    <template #title>
                        {{ item.name }}
                    </template>
                </a-list-item-meta>
                <template #actions>
                    <a @click="edit(item)">编辑</a>
                    <a style="color:red;" @click="del(item,index)">删除</a>
                </template>
            </a-list-item>
        </template>
        <template #loadMore>
            <div v-if="list.length > 0" :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
                <a-spin v-if="loadingMore"></a-spin>
                <a-button v-else style="color:#7F7F7F;border:unset;" block @click="onLoadMore">加载更多</a-button>
            </div>
        </template>
    </a-list>
</template>