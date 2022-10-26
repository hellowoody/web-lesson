<script setup>
import { ref,inject,watch } from "vue"
import { useRouter,useRoute } from "vue-router"
import { useState } from "@/store/pageDirection"
import { useState as useCartState } from "@/store/cart"
import { gql } from "@/kits/HttpKit"
import { getItem,clearItem } from "@/kits/LocalStorageKit"
import TopBar from "@/components/topbar/TopBar.vue"
import Content from "@/components/content/Content.vue"
import ProductCardVertical from "@/components/product/ProductCardVertical.vue"
import FooterBar from "@/components/footerbar/FooterBar.vue"
import FooterBarButton from "@/components/footerbar/FooterBarButton.vue"

const cartState = useCartState();
const router = useRouter()
const route = useRoute()
const state = useState()
const message = inject("$message")
const product = ref({})
const products = ref([])
const goodBg = ref("")

const back = () => {
    state.setDirection("backward")
    router.go(-1)
}

const goto = (path) => {
    state.setDirection("forward")
    router.push({path})
}

const fetchData = async () => {
    const id = route.params.id
    const type = route.params.type
    const p = {
        query:`
            {
                good (id:"${id}") {
                    id
                    name
                    price
                    imgpath
                    gooddesc
                }
                goods (type:"${type}",start:0,count:5){
                    id
                    name
                    price
                    imgpath
                    type (id:"goods_type"){
                        id
                    }
                }
            }
        `
    }

    try {
        const res = await gql(p);
        product.value = res.data.good;
        products.value = res.data.goods.filter(item => item.id != id);
        goodBg.value = `url(${res.data.good.imgpath})`
        return {code:"ok"}
    } catch(e){
        // console.log(e)
        message.error(e.message)
        return {code:"failed"}
    }
}

fetchData()

watch(() => route.path,(curr) => {
    // console.log("curr:",curr)
    if(curr.indexOf("/gooddetail/") >= 0){
        fetchData()
    }
})

const addCart = () => {
    /*
        1.校验当前用户是否登陆（查看是否有登陆后的会话缓存信息 session）
            客户端本地缓存中是否存在token(身份信息令牌-一串随机码)
        2.如果存在，说明已经登陆
            把当前商品加入到购物车中
        3.如果不存在，说明为登陆
            页面自动跳转到登陆页面 
    */
    const token = getItem("token")
    const userId = getItem("userId")
    if(token && token !== ""){
        // 全局状态管理中的获取的对象，再任何时候都可以拿到最新的值
        // 有点像渲染页面时，无论你在哪一行打印document.querySelector(div)
        console.log("全局的购物车对象:",cartState.cart)

        cartState.addCart({
            token,
            userId,
            ifIncrease:true,
            good:product.value
        }).then(res => {
            console.log(cartState.cart)
            switch(res.code){
                case 1:
                    message.success(res.msg)
                    break;
                case 101:
                case 102:
                    message.warning(res.msg)
                    clearItem("token");
                    state.setDirection("forward")
                    router.push({
                        path:"/login"
                    })
                    break;
                default:
                    message.warning(res.msg)
                    break;
            }
        })
    }else{
        state.setDirection("forward")
        router.push({
            path:"/login"
        })
    }
}

const order = () => {
    // 将当前商品加入购物车
    addCart()
    // 再跳转页面
    goto("/cart")
}
</script>

<template>
    <div>
        <top-bar>
            <template v-slot:left>
                <span class="iconfont icon-xiangzuojiantou" @click="back"></span>
            </template>
            <template v-slot:middle>
                <div>商品明细</div>
            </template>
            <template v-slot:right>
                <div class="iconfont icon-gouwuche" style="font-size:20px;" @click="goto('/cart')"></div>
            </template>
        </top-bar>
        <content :pull="true" :refreshFunc="fetchData" :hasTabBar="true">
            <a-carousel>
                <div class="good-bg"></div>
            </a-carousel>
            <div class="good-content">
                <div class="good-title">{{product.name}} - {{product.gooddesc}}</div>
                <div class="good-price">¥ {{product.price}}</div>
                <div class="good-vr" @click="goto('/vrroom')">进店查看</div>
                <div class="category-title">推荐相似商品</div>
                <div class="category-list">
                    <product-card-vertical 
                        :product="good"
                        style="margin-right:12px;margin-bottom: 2px;" 
                        v-for="good in products" />
                </div>
                <div class="comment">用户评论</div>
                <a-skeleton avatar active />
                <a-skeleton avatar active :paragraph="{rows:1}"/>
            </div>
        </content>
        <footer-bar>
            <footer-bar-button>
                收藏 联系客服
            </footer-bar-button>
            <footer-bar-button>
                <a-button type="primary" size="large" @click="addCart"   block>加入购物车</a-button>
            </footer-bar-button>
            <footer-bar-button>
                <a-button size="large" @click="order" block>立即购买</a-button>
            </footer-bar-button>
        </footer-bar>
    </div>
</template>

<style scoped>

.ant-carousel :deep(.slick-slide) {
  margin-top: 12px;
  height: 160px;
  background: #E5E5E5;
  overflow: hidden;
  border-radius:15px;
}

.good-bg {
    height:160px;
    width:100%;
    background-image: v-bind(goodBg);
    background-size: contain;
}

.good-content {
    margin-top:30px;
    padding: 0 6px;
    box-sizing: border-box;
}

.good-title {
    font-size:16px;
    font-weight:bold;
    color:rgb(0 0 0 / 0.5)
}

.good-price {
    font-size:18px;
    font-weight:bold;
    color:#FA6400;
    margin-top:12px;
}

.good-vr{
    font-size:16px;
    color:#B620E0;
    margin-top:12px;
}

.category-title {
    display:flex;
    justify-content: space-between;
    margin-top: 16px;
    color:rgb(0 0 0 / 0.5);
    font-size:14px;
}

.comment {
    display:flex;
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 16px;
    color:rgb(0 0 0 / 0.5);
    font-size:14px;
}


.category-list {
    display:flex;
    overflow-x: auto;
    margin-top:12px;
}

</style>