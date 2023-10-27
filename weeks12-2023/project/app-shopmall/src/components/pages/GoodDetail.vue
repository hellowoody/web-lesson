<template>
    <div>
        <top-bar>
            <template v-slot:left>
                <span class="iconfont icon-fanhuijiantou" style="font-size:20px;" @click="back"></span>
            </template>
            <template v-slot:middle>
                <span>{{name === "" ? "商品明细" : name}}</span>
            </template>
            <template v-slot:right>
                <span class="iconfont icon-gouwuche" style="font-size:20px;" @click="goto('/cart')"></span>
            </template>
        </top-bar>
        <content :refreshFunc="refresh" hasTabBar pull>
            <a-carousel>
                <div class="good-bg" ></div>
            </a-carousel>
            <div class="good-content">
                <div class="good-title">{{ good.name }} - {{ good.gooddesc }}</div>
                <div class="good-price"> {{ showPrice }}</div>
                <div class="vr-room" @click="goVrRoom" > 虚拟探店 </div>
                <div class="relate-title">推荐相似商品</div>
                <div class="relate-list">
                    <product-vertical-card 
                        v-for="item in relateGoods" 
                        :key="item.id" :good="item">
                    </product-vertical-card>
                </div>
                <div class="comment">用户评论</div>
                <a-skeleton avatar active />
                <a-skeleton avatar active :paragraph="{ rows: 4 }" />
         
            </div>
        </content>
        <footer-bar>
            <footer-bar-item>
                收藏 联系客服
            </footer-bar-item>
            <footer-bar-item>
                <a-button type="primary" size="large" @click="addCart" block>加入购物车</a-button>
            </footer-bar-item>
            <footer-bar-item>
                <a-button  size="large" @click="justbuyit" block>立即购买</a-button>
            </footer-bar-item>
        </footer-bar>
    </div>
</template>
<script setup>
import {ref,inject,computed,watch} from "vue"
import {useRouter,useRoute} from "vue-router"
import { useState } from "@/store/pageDirection.js"
import { useState as useCartState } from "@/store/cart.js"
import { gql } from "@/kits/fetch.js"
import { getItem } from "@/kits/localStore"

const router = useRouter()
const route = useRoute()
const state = useState()
const cartState = useCartState()
const router_query_name = route.query.name ? route.query.name : ""

const name = ref(router_query_name)
const good = ref({})
const relateGoods = ref([])
const toast = inject("showToast")
const goodBg = ref("")

const goto = (path) => {
    state.setDirection("forward")
    router.push({path})
}

const back = () => {
    state.setDirection("backward")
    router.go(-1)
}

const refresh = () => initData();

const initData = async () => {
    const router_query_id = route.query.id ? route.query.id : ""
    const router_query_type = route.query.type ? route.query.type : ""  
    const start = 0 , count = 6 , dictId = "goods_type"

    const types = `["${router_query_type}"]`
    const params = {
        query: `
        {
            good(id:"${router_query_id}") {
                id
                name
                price
                imgpath
                type
                gooddesc
            }
            categorys(id:"${dictId}",type:${types}) {
                id
                name
                goods(start:${start},count:${count}) {
                    id
                    name
                    price
                    imgpath
                    type
                }
            }
        } 
        `
    }
    try {
        const res = await gql(params)
        good.value = res.data.good ? res.data.good : {}
        goodBg.value = res.data.good ? `url(${res.data.good.imgpath})`: `url()`
        relateGoods.value = res.data.categorys.length ? res.data.categorys[0].goods.filter(item => item.id != router_query_id) : []
        return {
            code:"ok"
        }
    } catch (error) {
        toast.error("获取商品信息失败")
        console.log(error)
        return {
            code:"failed"
        }
    }
}

const showPrice = computed(() => {
    return "￥"+good.value.price
})

initData()

watch(() => route.query, (curr) => {
    // console.log(curr)
    // console.log(route.path)
    if(route.path.indexOf("/gooddetail") >= 0){
        initData()
    }
})

const addCart = async () => {
    /*
        校验当前用户是否登陆 （token）
            如果存在
                加入购物车
            如果不存在
                跳转到登陆页面
    */
    const token = getItem("token")
    const userId = getItem("userId")
    if(token){
        // 1、购物车需要在全局状态中维护    （支持多页面的实时渲染）
        // 2、购物车也需要存储到localstore  （防止页面刷新后内容不见了）(多设备时不太好维护)（可选）
        // 3、购物车需要存储数据库中        （多设备的支持）
        try {
            const res = await cartState.modify({
                userId,
                token,
                good:good.value,
                ifIncrease:true,
            })
            switch (res.code) {
                case 1:
                    toast.success(res.msg)
                    break;
                case 101:
                case 102:
                case 103:
                    toast.warning(res.msg)
                    removeItem("token")
                    state.setDirection("forward")
                    router.push("/login")
                    break;
                default:
                    toast.warning(res.msg)
                    break;
            }
        } catch (err) {
            console.log(err)
            toast.error("加入购物车失败")
        }
    }else{
        toast.warning("请先登陆")
        state.setDirection("forward")
        router.push({path:"/login"})
    }
}

const justbuyit = async () => {
    await addCart()
    goto("/cart")
}

const goVrRoom = () => {
    state.setDirection("forward")
    router.push({path:"/vrroom"})
}
</script>

<style scoped>
.good-bg {
    height:160px;
    background: rgb(0 0 0 / 0.1);
    border-radius: 12px;
    background-image: v-bind(goodBg);
    background-size: contain;
}

.good-content {
    margin-top:30px;
    color:rgb(0 0 0 / 0.5);
    padding:0 10px;
}

.good-title {
    font-size: 16px;
    font-weight: bold;
}

.good-price {
    color:#FA6400;
    font-weight: bold;
    font-size: 18px;
    margin-top:12px;
}

.vr-room {
    color:#B620E0;
    font-size: 14px;
    margin-top:12px;
}

.relate-title {
    margin-top:16px;
    font-size: 14px;

}

.relate-list {
    display: flex;
    overflow-x: auto;
    margin-top: 12px;
    padding: 6px 0;
}

.comment {
    margin-top:16px;
    font-size: 14px;
    margin-bottom:16px;
}
</style>