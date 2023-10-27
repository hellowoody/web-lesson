<template>
    <div class="product-cart" @click="goDetail"> 
        <div class="p-img" :style="imgStyle"></div>
        <div class="p-desc">
            <div>{{ product.name }}</div>
            <div class="p-price">￥{{ product.price }}</div>
        </div>
    </div>
</template>

<script setup>
import {computed} from "vue"
import { useRouter } from 'vue-router'
import { useState } from '@/store/pageDirection.js'

const router = useRouter()
const state = useState()

const props = defineProps({
    product:Object
})

const imgStyle = computed(() => {
    return {
        backgroundImage:`url(${props.product.imgpath})`,
        backgroundSize:"cover" // cover contain 
        /*
        　　cover（遮盖）：图片宽高比不变、铺满整个容器的宽高，而图片多出的部分则会被截掉
        　　contain（包含）:图片宽高比不变，缩放至图片自身能完全显示出来，所以容器会有留白区域
        */
    }
})

const goDetail = () => {
    state.setDirection("forward")
    router.push({
        path: '/gooddetail',
        query: {
            id: props.product.id,
            name: props.product.name,
            type: props.product.type,
        }
    })
}
</script>

<style scoped>
.product-cart {
    height:120px;
    background-color: #fff;
    box-shadow: 0px 1px 8px rgb(0 0 0 / 0.1);
    margin-top: 18px;
    display: flex;
    align-items: center;
    border-radius: 10px;
}

.p-img {
    height:120px;
    width:120px;
    background-color: #f2f2f2;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.p-desc {
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size:18px;
    margin-left:16px;
}

.p-price {
    margin-top:10px;
    color:#FA6400;
    font-weight: bold;
}
</style>
