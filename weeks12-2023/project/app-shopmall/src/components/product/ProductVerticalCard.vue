<template>
    <div class="good-card" @click="goDetail">
        <div class="good-img" :style="imgStyle"></div>
        <div class="good-desc">
            <span >{{ good.name }}</span>
            <span>{{ sailprice }}</span>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useState } from '@/store/pageDirection.js'

const router = useRouter()
const state = useState()

const props = defineProps({
    good: Object
})

const imgStyle = computed(() => {
    return {
        backgroundImage: `url(${props.good.imgpath})`,
        backgroundSize: `cover`
    }
})

const sailprice = computed(() => {
    console.log()
    return "￥" + (props.good.price ? props.good.price : 0)
})

const goDetail = () => {
    state.setDirection("forward")
    router.push({
        path: '/gooddetail',
        query: {
            id: props.good.id,
            name: props.good.name,
            type:props.good.type,
        }
    })
}

</script>

<style scoped>
.good-card {
    width: 130px;
    height: 150px;
    border-radius: 16px;
    flex-shrink: 0;
    margin-right: 12px;
    box-shadow: 1px 2px 8px rgb(0 0 0 / 0.1);
}

.good-img {
    height: 100px;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    background-color: rgb(0 0 0 / 0.1);
}

.good-desc {
    padding:6px 12px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-size: 13px;
}

.good-desc span:nth-of-type(2) {
    color:#FA6400;
    margin-top:2px;
}
</style>