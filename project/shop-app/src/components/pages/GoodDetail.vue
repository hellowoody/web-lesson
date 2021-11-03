<script setup>
import TopBar from "@/components/topbar/TopBar.vue";
import MyContent from "@/components/content/MyContent.vue";
import ProductCard from "@/components/product/ProductCard.vue";
import FooterBar from "@/components/footerbar/FooterBar.vue";
import FooterBarButton from "@/components/footerbar/FooterBarButton.vue";
import {Gql,ImgUrl} from "@/kits/HttpKit";
import {getCacheVal} from "@/kits/LocalStorageKit";
import {useRouter,useRoute} from "vue-router";
import {useStore} from "vuex";
import {ref,watch,inject} from "vue";

const store = useStore();
const route = useRoute();
const router = useRouter();
const product = ref({}) // {value:product}
const products = ref([])
const bgImg = ref("")
const message = inject("$message")
let start = 0 ,count = 6 ;

const back = () => {
    store.commit("pageDirection/setDirection","backward")
    router.go(-1)
}

const initData = async () => {
    // console.log(route)
    const id = route.params.id
    const type = route.params.type
    const p = {
        query:`
            {
                good (id:"${id}") {
                    id
                    name
                    price
                    gooddesc
                    imgpath
                    type (id:"goods_type") {
                        id
                        name
                    }
                } 
                goods (start:${start},count:${count},type:["${type}"]) {
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
    try {
        const res = await Gql(p);
        product.value = res.data.good;
        // 1.在相似商品数组中过滤掉本次商品
        // 2.图片的前缀加上
        products.value = res.data.goods.filter(item => item.id != id).map(item => {
            item.imgpath = ImgUrl + item.imgpath
            return item
        });
        bgImg.value = `url(${ImgUrl + res.data.good.imgpath})`
    }catch {

    }

}

initData();

watch(() => route.path,(to,from) => {
    // console.log(to,from)
    if(to.indexOf("/gooddetail/") >= 0){
        initData()
    }
})

const addCart = async () => {
    /*
        1.校验当前用户是否登陆
            如果本地缓存中的token存在，那么认为已经登陆，否则未登录
        2.如果没登陆
            直接跳转到登陆页面(一般登陆页面都用注册的超链接)
        3.如果已经登陆了
            把当前的商品加入的购物车(cart),全局状态管理store.state
    */
    if(getCacheVal("token")){
        // 已经登陆
        /*
            1.获取全局状态管理中的购物车数组
            2.调用对应的mutations方法进行数组添加 (优化时否定了这个方案)
            3.调用对应的actions异步方法进行添加
        */
        const res = await store.dispatch("good/pushCart",{
            ...product.value,
            type:product.value.type.id,
            countbuy:1
        })
        if(res){
            message.success("添加成功")
        }else{
            message.warn("购买数量最大支持99")
        }
    }else{
        // 未登陆
        store.commit("pageDirection/setDirection","forward")
        router.push({path:"/login"})
    }
}

const order = async () => {
    // console.log(product.value) // proxy
    // console.log(toRaw(product.value)) // {}
    const res = await store.dispatch("good/pushCart",{
        ...product.value,
        type:product.value.type.id,
        countbuy:1
    })
    if(res){
        // message.success("添加成功")
        go("/cart")
    }else{
        message.warn("购买数量最大支持99")
    }
}

const go = path => {
    store.commit("pageDirection/setDirection","forward")
    router.push({path})
}

</script>

<template>
<div>
    <top-bar style="box-shadow:unset;">
        <template v-slot:left>
            <div class="iconfont icon-fanhui1" @click="back" style="font-size:23px;"></div>
        </template>
        <template v-slot:middle>
            <div>商品明细</div>
        </template>
        <template v-slot:right>
                <div class="iconfont icon-gouwuche" @click="go('/cart')" style="font-size:23px;"></div>
        </template>
    </top-bar>
    <my-content>
        <a-carousel ref="refId" style="width:100%;">
            <div class="bg-div"></div>
            <div class="bg-div"></div>
            <div class="bg-div"></div>
        </a-carousel>
        <div style="margin-top:30px;padding:0px 5px;box-sizing: border-box;">
            <div class="goodtitle">{{product.name}} - {{product.gooddesc}}</div>
            <div class="goodprice">¥ {{product.price}}</div>
            <div class="goodprice" @click="go('/vrroom')">进店查看</div>
            <div class="othertitle">相近商品</div>
            <div class="otherlist">
                <product-card class="otherlist-item" v-for="item in products" :key="item.id" :product="item"></product-card>
            </div>
            <div class="comment">用户评论</div>
            <a-skeleton avatar active :paragraph="{rows:3}"/>
            <a-skeleton avatar active :paragraph="{rows:3}"/>
        </div>
    </my-content>
    <footer-bar>
        <template v-slot:left>
            <footer-bar-button style="border:none" name="加入购物车" @funcHandle="addCart" />
        </template>
        <template v-slot:right>
            <footer-bar-button name="立即购买" style="border:none;background-color:#d8d8d8;" @funcHandle="order" />
        </template>
    </footer-bar>
</div>
</template>

<style scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  overflow: hidden;
  border-radius:15px;
}

.bg-div {
    height:160px;
    background-image: v-bind(bgImg);
    background-size:"contain";
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}

.carousel-title {
    z-index: 1;
    position: absolute;
    top: 0px;
    left: 50%;
}

.carousel-img {
    position: absolute;
    top:0px;
    left:0px;
    object-fit: cover;
    width:100%;
    height:160px;
}

.goodtitle {
    font-size:16px;
    font-weight:bold;
    color:rgb(0 0 0 / 0.5);
}

.goodprice {
    font-size:18px;
    font-weight:bold;
    color:#fa6400;
    margin-top:15px;
}

.othertitle {
    font-size:16px;
    font-weight:bold;
    color:rgb(0 0 0 / 0.5);
    margin-top:28px;
}

.otherlist {
    display:flex;
    overflow-x: auto;
    margin-top:16px;
}

.otherlist-item {
    flex-shrink: 0;
    margin-right:16px;
}

.comment {
    margin-top:30px;
    margin-bottom:30px;
    font-size:16px;
    color:rgb(0 0 0 /0.5);
    font-weight:bold;
}
</style>
