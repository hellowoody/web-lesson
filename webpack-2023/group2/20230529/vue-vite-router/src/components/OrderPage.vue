<template>
    <h2>order page</h2>
    <div>订单号：{{ data.orderId }}</div>
    <div>订单状态：{{ data.status }}</div>
</template>

<script setup>
import {useRouter,useRoute} from "vue-router"
import {reactive} from "vue"

const route = useRoute()
const router = useRouter()

// if(route && route.meta && route.meta.requireAuth === true){
//     if(!localStorage.getItem("userId") || localStorage.getItem("userId") == ""){
//         // 跳转到登陆页面
//         router.replace({
//             path:"/login"
//         })
//     }
// }

const data = reactive(route.params)

console.log(route.meta)

</script>