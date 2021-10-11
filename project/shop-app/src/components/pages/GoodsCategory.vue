<script setup>
import {ref} from "vue"
import {useRoute,useRouter} from "vue-router"
import {useStore} from "vuex"
import TopBar from "@/components/topbar/TopBar.vue";
import MyContent from "@/components/content/MyContent.vue";
import ProductCard from "@/components/product/ProductCard.vue";

const route = useRoute();
const router = useRouter()
const store = useStore();
const type = route.query.type

let searchContent = ""
const data = ref([])
const loading = ref(false);
const loadingMore = ref(false);

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
const products = [
    {
       id:1,
       name:"乔1",
       price:"1001",
       type:{
           id:"03"
       },
       imgpath:"src/assets/imgs/shoe06.png"
    },
    {
       id:2,
       name:"乔2",
       price:"1002",
       type:{
           id:"03"
       },
       imgpath:"src/assets/imgs/shoe07.png"
    },
    {
       id:3,
       name:"乔3",
       price:"1003",
       type:{
           id:"03"
       },
       imgpath:"src/assets/imgs/shoe08.png"
    },
    {
       id:4,
       name:"乔4",
       price:"1004",
       type:{
           id:"03"
       },
       imgpath:"src/assets/imgs/shoe09.png"
    },
    {
       id:5,
       name:"乔5",
       price:"1005",
       type:{
           id:"03"
       },
       imgpath:"src/assets/imgs/shoe10.png"
    },
    {
       id:6,
       name:"衣服1",
       price:"101",
       type:{
           id:"04"
       },
       imgpath:"src/assets/imgs/c01.png"
    },
    {
       id:7,
       name:"衣服2",
       price:"12",
       type:{
           id:"04"
       },
       imgpath:"src/assets/imgs/c02.png"
    },
    {
       id:8,
       name:"衣服3",
       price:"103",
       type:{
           id:"04"
       },
       imgpath:"src/assets/imgs/c03.png"
    },
    {
       id:9,
       name:"衣服4",
       price:"104",
       type:{
           id:"04"
       },
       imgpath:"src/assets/imgs/c04.png"
    },
    {
       id:10,
       name:"衣服5",
       price:"105",
       type:{
           id:"04"
       },
       imgpath:"src/assets/imgs/c05.png"
    },
]

const searchData = (type,content) => {
    console.log("调用后台搜索方法的参数:",type,content)
    // 待实现
    // http.post("http://api",{
    //     searchContent : router_param_searchContent
    // }).then((resData) => {

    // })
    //  resData => [{},{},{}]
    const resData = content 
        ? products.filter(item => item.type.id === type && item.name.indexOf(content) >= 0)  
        : products.filter(item => item.type.id === type)   //假设是从网络返回的数据
    data.value = resData
}

// 将从上一个页面拿到的搜索类别 ，调用后台api进行搜索
searchData(type);

const search = () => {
    console.log("本次搜索的新内容:",searchContent)
    searchData(type,searchContent)
}

const refresh = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(true)
        },800)
    })
}

const loadMore = () => {
    // loading.value = true;
    loadingMore.value = true;
    setTimeout(() => {
        data.value = data.value.concat(products.filter(item => item.type.id === type))
        // loading.value = false;
        loadingMore.value = false;
    },900)
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
