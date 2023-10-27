<template>
    <div>
        <top-bar @handleTopBar="goto('/search')">
            <template v-slot:left>
                <span class="iconfont icon-saoyisao" style="font-size:20px;"></span>
            </template>
            <template v-slot:right>
                <span class="iconfont icon-gouwuche" style="font-size:20px;" @click="goto('/cart')"></span>
            </template>
        </top-bar>
        <!-- <content :hasTabBar="true" pull> -->
        <content hasTabBar pull :refreshFunc="refresh">
            <a-carousel>
                <div v-for="(item,idx) in homeCarousel">
                    <h3>{{ idx+1 }}</h3>
                    <img v-if="item.imgpath" class="carousel-img" :src="item.imgpath"/>
                </div>
            </a-carousel>
            <div v-for="item in categorys" >
                <div class="category-title">
                    <div>{{ item.name }} </div>
                    <div class="category-title-action"  @click="seeAll(item.id,item.name)">查看全部</div>
                </div>
                <div class="category-list">
                    <!-- <div v-for="good in item.goods" class="good-card">
                        <div class="good-img" :style="imgStyle(good.imgpath)"></div>
                        <div class="good-desc">
                            {{ good.name }}<br>
                            {{ good.price }}
                        </div>
                    </div> -->
                    <product-vertical-card 
                        v-for="item in item.goods" 
                        :key="item.id" :good="item">
                    </product-vertical-card>
                </div>
            </div>
            <div class="more-content-title">
                <span>更多内容</span>
            </div>
            <div class="more-content">
                <div 
                    v-for="item in moreContent"
                    class="more-content-item"   
                    :style="moreContentStyle(item)" 
                >
                    {{ item.name }}
                </div>
            </div>
        </content>
    </div>
</template>

<script setup>
import { ref,inject,computed } from "vue"
import {useRouter} from "vue-router"
import { useState } from "@/store/pageDirection.js"
import  { gql } from "@/kits/fetch.js" 

const homeCarousel_skeleton = [{imgpath:""}]
const categorys_skeleton = [
    {
        id:"",
        name:"类别",
        goods:[{},{},{}]
    },
    {
        id:"",
        name:"类别",
        goods:[{},{},{}]
    },
]

const router = useRouter()
const state = useState()
const toast = inject("showToast")
const homeCarousel = ref(homeCarousel_skeleton)
const categorys = ref(categorys_skeleton)
const moreContent = [
    {
        name:"爆款",
        fontColor:"#fff",
        bgColor:"#f74a4a",
    },
    {
        name:"特价",
        fontColor:"#fff",
        bgColor:"#449ff4",
    },
    {
        name:"二手",
        fontColor:"#fff",
        bgColor:"#1faf85",
    },
    {
        name:"拼一拼",
        fontColor:"#fff",
        bgColor:"#d9921d",
    },
]



const goto = (path) => {
    state.setDirection("forward")
    router.push({path})
}

const initData = async () => {
    const dictId = "goods_type"
    const types = '["03","04"]'
    const start = 0 , count = 5
    try {
        const p = {
            query:`
                {
                    homeCarousel {
                        imgpath
                    }
                    categorys(id:"${dictId}",type:${types}) {
                        id
                        name
                        goods(start:${start},count:${count}) {
                            id
                            name
                            price
                            type
                            imgpath
                        }
                    }
                }
            `
        }
        const res = await gql(p)
        console.log(res)
        homeCarousel.value = res.data.homeCarousel
        categorys.value = res.data.categorys
        return {
            code:"ok"
        }
    } catch (error) {
        toast.error("获取失败")
        homeCarousel.value = [{imgpath:""}]
        return {
            code:"failed"
        }
    }
}

initData()

const refresh = () => initData();

const moreContentStyle = computed(() => {
    return (item) => {
        return {
            color:item.fontColor,
            background:item.bgColor
        }
    }
})

const seeAll = (id,name) => {
    // console.log(id)
    state.setDirection("forward")
    router.push({
        path:"/searchresult",
        query:{
            categoryId:id,
            categoryName:name
        }
    })
}
</script>

<style scoped>
:deep(.slick-slide) {
  text-align: center;
  height: 160px;
  background: rgb(0 0 0 / 0.1);
  overflow: hidden;
  position: relative;
  border-radius: 8px;
}

:deep(.slick-slide h3) {
    position: absolute;
    color: #fff;
    top: 50%;
    left: 50%;
    z-index:10;
}

.carousel-img {
    position: absolute;
    height:100%;
    width:100%;
    top:0;
    object-fit: cover;
}

.category-title {
    display: flex;
    justify-content: space-between;
    margin-top:16px;
    color:rgb(0 0 0 / 0.5);
    font-size:14px;
}

.category-title-action  {
    color:#B620E0
}

.category-list {
    display: flex;
    overflow-x: auto;
    margin-top: 12px;
    padding: 6px 0;
}

.more-content-title {
    margin-top:16px;
    color:rgb(0 0 0 / 0.5);
    font-size:14px;
}

.more-content {
    display: flex;
    margin-top: 12px;
    overflow-x: auto;
}

.more-content-item {
    flex-shrink: 0;
    height:80px;
    width:100px;
    border-radius: 8px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>