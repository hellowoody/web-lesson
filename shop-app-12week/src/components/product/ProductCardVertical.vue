<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection"

const router = useRouter()
const state = useState();
const props = defineProps({
    product:Object
})

const imgStyle = computed(() => {
    return {
        backgroundImage:`url(${props.product.imgpath})`,
        backgroundSize:"cover"
    }
})

const goto = () => {
    // console.log("product:",props.product)
    state.setDirection("forward") // 页面跳转到明细页面
    router.push({
        name:"gooddetail",
        params:{
            id:props.product.id,
            type:props.product.type.id
        }
    })
}
</script>

<template>
    <div class="product-card" @click="goto">
        <div class="product-img" :style="imgStyle"></div>
        <div class="product-desc">
            <div style="color:rgb(0 0 0 / 0.5)">{{product.name}}</div>
            <div style="color:#FA6400">¥{{product.price}}</div>
        </div>
    </div>
</template>

<style scoped>
.product-card {
    width:138px;
    height:167px;
    background-color: #E5E5E5;
    border-radius:15px;
    flex-shrink: 0;
    box-shadow: 0px 2px 8px #e3e3e3;
}

.product-img {
    height:100px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.product-desc {
    height:calc(167px - 100px);
    background-color: #fff;
    padding:12px;
    box-sizing: border-box;
}
</style>