<script setup>
import {Gql,ImgUrl} from "@/kits/HttpKit";
import {reactive,computed} from "vue"

const data = reactive({
    loading:true,
    loadingMore:false,
    dataList:[]
})
let start = 0 , count = 8;

const getData = async (start,count,searchInput) => {
    try {
        const p = {
            query:`
                {
                    goods (start:${start},count:${count}) {
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
    data.dataList = await getData(start,count)
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

const del = (product,index) => {
    console.log("del=> ",product,index)
}

const onLoadMore = async () => {
    data.loadingMore = true;
    start += count
    const res = await getData(start,count)
    data.dataList = data.dataList.concat(res)
    data.loadingMore = false;
}


</script>

<template>
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