<script setup>
import {ref,inject} from "vue"
import TopBar from "@/components/topbar/TopBar.vue"
import ProductCard from "@/components/product/ProductCard.vue"
import {useRouter,useRoute} from "vue-router"
import {useState} from "@/store/pageDirection"
import {gql} from "@/kits/HttpKit"
// import {useStore} from "vuex"
// const store = useStore()

const router = useRouter()
const route = useRoute()
const state = useState()
const message = inject("$message")

let route_query_searchCotnent = route.query.searchContent
const data = ref([])
const loadingMore = ref(false)
let start = 0 , count = 6;

const back = () => {
    // store.commit("pageDirection/setDirection","backward")
    state.setDirection("backward")
    router.go(-1)
    // router.back()
}

// 接受子组件传来的最新输入值
const searchContentChange = content => route_query_searchCotnent = content

const search = () => {
    data.value = [];
    start = 0;
    searchData(route_query_searchCotnent)
}

const searchData = async (query) => {
    try {
        const dictId = "goods_type"
        const p = {
            query:`
                {
                    goods (name:"${query}",start:${start},count:${count}){
                        id
                        count
                        type (id:"${dictId}") {
                            name
                        }
                        name
                        gooddesc
                        price
                        imgpath
                    }
                }
            `
        }
        const res = await gql(p)
        // console.log(res)
        console.log("start:",start)
        if(res.data.goods && res.data.goods.length > 0){
            data.value = data.value.concat(res.data.goods)
            start += count
        }
    } catch (e) {
        console.log("查询失败",e)
        message.warning(e.message)
    }
}

const onLoadMore = async () => {
    loadingMore.value = true;
    await searchData(route_query_searchCotnent)
    loadingMore.value = false;
}

searchData(route_query_searchCotnent)

</script>

<template>
    <div>
        <top-bar :searchInput="route_query_searchCotnent" :edit="true" @searchContentChangeHandle="searchContentChange">
            <template v-slot:left>
                <span class="iconfont icon-xiangzuojiantou" @click="back"></span>
            </template>
            <template v-slot:right>
                <span @click="search">搜索</span>
            </template>
        </top-bar>
        <div class="list">
            <div class="title">有{{data.length}}个商品符合要求</div>
            <a-list :data-source="data">
                <template #renderItem="{item}">
                    <product-card :product="item"></product-card>
                </template>
                <template #loadMore>
                    <div v-if="data.length > 0" :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
                        <a-spin v-if="loadingMore"></a-spin>
                        <a-button v-else style="color:#7F7F7F;border:unset;" block @click="onLoadMore">加载更多</a-button>
                    </div>
                </template>
            </a-list>
        </div>
    </div>
</template>

<style>
.list {
    padding:0px 18px;
    box-sizing: border-box;
}

.title {
    color:#7f7f7f;
    font-weight:bold;
    margin-top:12px;
}
</style>