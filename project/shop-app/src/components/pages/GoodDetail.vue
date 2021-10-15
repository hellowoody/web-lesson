<script setup>
import TopBar from "@/components/topbar/TopBar.vue";
import MyContent from "@/components/content/MyContent.vue";
import ProductCard from "@/components/product/ProductCard.vue";
import {Gql,ImgUrl} from "@/kits/HttpKit";
import {useRouter,useRoute} from "vue-router";
import {ref} from "vue"

const router = useRouter();
const route = useRoute();
const product = ref({})
const topImgs = ref([])

const back = () => router.go(-1)

const initData = async () => {
    // console.log(route)
    const id = route.params.id
    const p = {
        query:`
            {
                good (id:"${id}") {
                    id
                    name
                    price
                    imgpath
                    type (id:"goods_type") {
                        id
                        name
                    }
                } 
            }
        `
    }
    try {
        const res = await Gql(p);
        product.value = res.data.good;
        topImgs.value = [
            ImgUrl + res.data.good.imgpath,
            ImgUrl + res.data.good.imgpath,
            ImgUrl + res.data.good.imgpath,
        ]
    }catch {

    }
}

initData();
</script>

<template>
<div>
    <top-bar>
        <template v-slot:left>
            <div class="iconfont icon-fanhui1" @click="back" style="font-size:23px;"></div>
        </template>
        <template v-slot:middle>
            <div>商品明细</div>
        </template>
        <template v-slot:right>
                <div class="iconfont icon-gouwuche" style="font-size:23px;"></div>
        </template>
    </top-bar>
    <my-content>
        <a-carousel ref="refId">
            <div v-for="(item,index) in topImgs" :key="index+item">
                <h3 class="carousel-title">{{index+1}}</h3>
                <img class="carousel-img" :src="item" />
            </div>
        </a-carousel>
    </my-content>
</div>
</template>

<style scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  overflow: hidden;
  position: relative;
  border-radius:15px;
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
</style>
