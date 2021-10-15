<script setup>
import {ref} from "vue"
import {useRoute,useRouter} from "vue-router"
import {useStore} from "vuex"
import TopBar from "@/components/topbar/TopBar.vue";
import MyContent from "@/components/content/MyContent.vue";
import ProductCard from "@/components/product/ProductCard.vue";
import {Gql,ImgUrl} from "@/kits/HttpKit.ts";

const route = useRoute();
const router = useRouter()
const store = useStore();
const type = route.query.type

let searchContent = ""
const data = ref([])
const loading = ref(false);
const loadingMore = ref(false);
let start = 0;
const count = 5;

const back = () => {
    store.commit("pageDirection/setDirection","backward")
    router.go(-1)
}
const go = path => router.push({path})
const searchContentChange = content => {
    // console.log("现在时searchResult页面了",content)
    searchContent = content
}
const router_param_searchContent = route.query.searchContent;

const searchData = (type,content) => {
    // console.log("调用后台搜索方法的参数:",type,content)
    // console.log("查询的内容：",searchContent,"查询的类别",type)
    const p = {
        query:`
            {
                goods (start:${start},count:${count},name:"${searchContent}",type:["${type}"]) {
                    id
                    name
                    price
                    imgpath
                    type (id:"goods_type") {
                    id
                    }
                }
            }
        `
    }

    return Gql(p).then((res) => {
        // console.log(res.data)
        data.value = data.value.concat(res.data.goods.map(item => {
            item.imgpath = ImgUrl + item.imgpath
            return item
        }))
        return true
    }).catch(()=>{
        return false
    })
}

// 将从上一个页面拿到的搜索类别 ，调用后台api进行搜索
searchData(type);

const search = () => {
    console.log("本次搜索的新内容:",searchContent)
    data.value = []
    start = 0
    searchData(type,searchContent)
}

const refresh = () => {
    data.value = []
    start = 0;
    return searchData(type)
}

const loadMore = async () => {
    loadingMore.value = true;
    start = start + count
    await searchData(type)
    loadingMore.value = false;
}

</script>

<template>
    <div>
        <top-bar @searchContentChangeHandle="searchContentChange" :searchInput="router_param_searchContent" edit>
            <template v-slot:left>
                <div class="iconfont icon-fanhui1" @click="back" style="font-size:23px;"></div>
            </template>
            <template v-slot:right>
                <div class="iconfont icon-sousuo" @click="search" style="font-size:23px;"></div>
            </template>
        </top-bar>
        <my-content pull :refreshFunc="refresh">
            <div style="color:rgb(0 0 0 / 0.5);font-size:15px;margin-bottom:16px;font-weight:500;">有{{data.length}}个商品符合要求</div>
            <a-list :grid="{gutter:16,column:2}" :loading="loading" :data-source="data">
                <template #loadMore>
                    <div :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
                        <a-spin v-if="loadingMore" />
                        <a-button style="border:none;color:rgb(0 0 0/0.5)" block v-else @click="loadMore">获取更多</a-button>
                    </div>
                </template>
                <template #renderItem="{item,index}">
                    <a-list-item>
                        <product-card  :product="item" />
                    </a-list-item>
                </template>
            </a-list>
        </my-content>
    </div>
</template>
