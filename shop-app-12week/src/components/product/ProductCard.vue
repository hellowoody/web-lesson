<script setup>
import {computed} from "vue";

const props = defineProps({
    product:Object
})

const imgStyle = computed(() => {
    return {
        backgroundImage:`url(${props.product.imgpath})`,
        backgroundSize:"cover"
    }
})
</script>

<template>
    <div class="product-card">
        <div class="product-img" :style="imgStyle"></div>
        <div class="product-desc">
            <div style="color:#7F7F7F;font-size: 16px;">{{product.name}}</div>
            <div style="color:#F57418;margin-top:12px;">¥ {{product.price}}</div>
        </div>
    </div>
</template>

<style scoped>
.product-card {
    display:flex;
    background-color: #fff;
    box-shadow: 0px 1px 8px #e3e3e3;
    height:100px;
    border-radius:16px;
    margin-top:18px;
    align-items: center;
}

.product-img {
    height:100px;
    width: 130px;
    background-color: #e5e5e5;
    border-top-left-radius:15px;
    border-bottom-left-radius:15px;
}

.product-desc {
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-left:20px;
}
</style>