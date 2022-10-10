<script setup>
// import {ShoppingCartOutlined} from "@ant-design/icons-vue"
import { ref,inject,computed } from "vue"
import TopBar from "@/components/topbar/TopBar.vue"
import Content from "@/components/content/Content.vue"
import ProductCardVertical from "@/components/product/ProductCardVertical.vue"
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection"
import { gql } from "@/kits/HttpKit"
// import { useStore } from "vuex"
// const store = useStore();
const homeImgs_skeleton = ['']
const homeImgs = ref(homeImgs_skeleton)
const categorys_skeleton = [
    {
        name:"类别",
        goods:[
            {},
            {},
            {},
        ]
    },
    {
        name:"类别",
        goods:[
            {},
            {},
            {},
        ]
    },
]

const moreContent = [
    {
        name:"爆款",
        fontColor:"#fff",
        backgroundColor:"#f74a4a"
    },
    {
        name:"特价",
        fontColor:"#fff",
        backgroundColor:"#449ff4"
    },
    {
        name:"二手",
        fontColor:"#fff",
        backgroundColor:"#1faf85"
    },
    {
        name:"拼一拼",
        fontColor:"#fff",
        backgroundColor:"#d9921d"
    },
]

const categorys = ref(categorys_skeleton)
const message = inject("$message")
const router = useRouter()
const state = useState()

const goto = (path,query) => {
    // store.commit("modules中的key/module中的方法名")
    // store.commit("pageDirection/setDirection","forward")
    state.setDirection("forward")
    router.push({
        path,
        query
    })
}

const initData = async () => {
    const dictId = "goods_type"
    const types = '["03","04"]'
    const start = 0 , count = 5;
    const params = {
        query:`
            {
                homeImgs
                categorys (id:"${dictId}",type:${types}) {
                    id
                    name
                    goods (start:${start},count:${count}) {
                        id
                        name
                        price
                        imgpath
                        type (id:"${dictId}") {
                            id
                            name
                        }
                    }
                }
            }
        `
    }
    try {
        const res = await gql(params)
        // console.log(res)
        homeImgs.value = res.data.homeImgs
        categorys.value = res.data.categorys
        return {code:"ok"}
    }catch(e){
        message.warning(e.message)
        return {code:"failed"}
    }
}

const seeAll = type => {
    // console.log(`要查看类别为${type}的所有商品`)
    goto("/searchresult",{
        type
    })
}

const initDataPromise = () => {
    const params = {
        query:`
            {
                homeImgs
            }
        `
    }

    return gql(params).then((res) => {
        console.log(res)
        return {code:"ok"}
    })
    .catch((e) => {
        message.warning(e.message)
        return {code:"failed"}
    })
    // gql(params).then((res) => {
    //     console.log(res)
    //     return {code:"ok"}
    // },(e) => {
    //     message.warning(e.message)
    //     return {code:"failed"}
    // })
}

initData()

const moreContentStyle = computed(() => {
    return (bgColor,fontColor) => {
        return {
            backgroundColor:bgColor,
            color:fontColor,
        }
    }
})
</script>

<template>
    <div>
        <top-bar @handleTabbar="goto('/search')">
            <template v-slot:left>
                <span class="iconfont icon-saoyisao" style="font-size:20px;"></span>
            </template>
            <template v-slot:right>
                <span class="iconfont icon-gouwuche" style="font-size:20px;"></span>
                <!-- <shopping-cart-outlined style="font-size:20px;color:red;" /> -->
            </template>
        </top-bar>
        <content :hasTabBar="true" :pull="true" :refreshFunc="initData">
            <a-carousel>
                <div v-for="(item,index) in homeImgs">
                    <h3>{{index+1}}</h3>
                    <img v-if="item !== ''" class="carousel-img" v-bind:src="item" />
                </div>
            </a-carousel>
            <div v-for="item in categorys">
                <div class="category-title">
                    <div>{{item.name}} </div>
                    <div class="category-title-action" @click="seeAll(item.id)">查看全部</div>
                </div>
                <div class="category-list">
                    <product-card-vertical 
                        :product="good"
                        style="margin-right:12px;margin-bottom: 2px;" 
                        v-for="good in item.goods" />
                </div>
            </div>
            <div class="more-content-title">
                <div>更多内容</div>
            </div>
            <div class="more-content">
                <!-- style="height:100px;margin-right:10px;background-color:red" -->
                <div 
                    v-for="item in moreContent"
                    class="more-content-item"
                    v-bind:style='moreContentStyle(item.backgroundColor,item.fontColor)'>
                    {{item.name}}
                </div>
            </div>
        </content>
    </div>
</template>

<style scoped>
.ant-carousel :deep(.slick-slide) {
  margin-top: 12px;
  text-align: center;
  height: 130px;
  line-height: 130px;
  background: #E5E5E5;
  overflow: hidden;
  border-radius:15px;
  position: relative;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}

.carousel-img {
    position: absolute;
    top:0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.category-title {
    display:flex;
    justify-content: space-between;
    margin-top: 16px;
    color:rgb(0 0 0 / 0.5);
    font-size:14px;
}

.category-title-action {
    color:#B620E0;
}

.category-list {
    display:flex;
    overflow-x: auto;
    margin-top:12px;
}

.more-content-title {
    display:flex;
    justify-content: space-between;
    margin-top: 16px;
    color:rgb(0 0 0 / 0.5);
    font-size:14px;
}
.more-content {
    display:flex;
    overflow-x: auto;
    margin-top:12px;
}

.more-content-item {
    height:80px;
    width:100px;
    border-radius:8px;
    margin-right:8px;
    flex-shrink:0;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:16px;
}
</style>