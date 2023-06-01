<template>
    <h2>order edit</h2>
    <input placeholder="orderid" :value="orderId"/>
    <input placeholder="price" :value="price"/>
</template>

<script setup>
import {useRoute,useRouter} from "vue-router"

const route = useRoute()
const router = useRouter()
// console.log(route)
const {orderId,price} = route.params

// 是否需要校验角色
// if(route && route.meta && route.meta.requireRole){
//     // 该用户是否管理员
//     if(!localStorage.getItem("role") || localStorage.getItem("role") !== route.meta.requireRole){
//         router.replace({path:"/"})
//     }
// }
</script>