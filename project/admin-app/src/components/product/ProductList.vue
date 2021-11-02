<script setup>
import {Gql,Http,ImgUrl} from "@/kits/HttpKit";
import {reactive,computed,watch,inject} from "vue"

const data = reactive({
    loading:true,
    loadingMore:false,
    dataList:[],
    searchInput:""
})
const message = inject("$message")
let start = 0 , count = 10;

const getData = async (start,count,searchInput) => {
    try {
        const p = {
            query:`
                {
                    goods (start:${start},count:${count},name:"${searchInput}") {
                        id
                        name
                        price
                        count
                        imgpath
                        type (id:"goods_type") {
                            id
                            name
                        }
                    }
                }
            `
        }
        const res = await Gql(p)
        return res.data.goods.map(item => {
            item.imgpath = ImgUrl + item.imgpath
            return item
        })
    } catch(e){
        return []
    }
}

const initData = async () => {
    data.dataList = await getData(start,count,data.searchInput)
    data.loading = false
}

initData()

const showPrice = computed(() => {
    return function(price){
        return "¥ " + price
    }
})

const edit = (product) => {
    console.log("edit=> ",product)
}

const del = async (product,index) => {
    try {
        const res = await Http("/delgood",{id:product.id})
        if(res.code === 1){
            data.dataList.splice(index,1)
            message.success(res.msg)
        }else{
            message.error(res.msg)
        }
    } catch(e){
        message.error(res.msg)
    }
}

const onLoadMore = async () => {
    data.loadingMore = true;
    start += count
    const res = await getData(start,count,data.searchInput)
    data.dataList = data.dataList.concat(res)
    data.loadingMore = false;
}

const onSearch = async () => {
    data.loadingMore = true
    start = 0;
    data.dataList = await getData(start,count,data.searchInput)
    data.loadingMore = false
}

let timeoutId = 0
watch(() => data.searchInput,(newval) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
        data.searchInput = newval
        onSearch()
    },500)
})

</script>

<template>
    <a-input-search v-model:value="data.searchInput" @search="onSearch" placeholder="请输入想要查找商品的名称"></a-input-search>
    <a-list
        :data-source="data.dataList"
        item-layout="horizontal"
        :loading="data.loading"
    > 
        <template #renderItem="{item,index}">
            <a-list-item>
                <a-list-item-meta :description="showPrice(item.price)">
                    <template #avatar>
                        <a-avatar shape="square" :src="item.imgpath"></a-avatar>
                    </template>
                    <template #title>
                        {{item.name}}
                    </template>
                </a-list-item-meta>
                <template #actions>
                    <a @click="edit(item)">编辑</a>
                    <a style="color:red;" @click="del(item,index)">删除</a>
                </template>
            </a-list-item>
        </template>
        <template #loadMore>
            <div class="loadMore">
                <a-spin v-if="data.loadingMore"></a-spin>
                <div v-else @click="onLoadMore">加载更多</div>
            </div>
        </template>
    </a-list>
</template>

<style scoped>
.loadMore {
    text-align: center;
    margin-top:12px;
    height:32px;
    line-height: 32px;
}
</style>