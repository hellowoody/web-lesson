<template>
    <h2>order page</h2>
    <p>订单号 {{ orderId }}</p>
    <p>订单状态 {{status }}</p>
    <button @click="back">返回上一页面</button>
    <button @click="back2">返回上两页面</button>

</template>

<script setup>
import {useRoute , useRouter} from "vue-router"

const route = useRoute()
const router = useRouter()

// console.log("route",route)
console.log("query",route.query)
const {orderid:orderId,status} = route.query
// console.log("router",router)


const back = () => router.go(-1)
const back2 = () => router.go(-2)





</script>