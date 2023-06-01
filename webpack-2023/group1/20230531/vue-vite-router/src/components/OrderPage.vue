<template>
    <div>
        <h2>order</h2>
        <router-view></router-view>
    </div>
</template>
<script setup>
import {useRoute,useRouter} from "vue-router"

const route = useRoute()
const router = useRouter()

// console.log("meta",route.meta)
// // 是否需要校验登录
// if(route && route.meta && route.meta.requireAuth === true){
//     // 该用户是否登录
//     if(!localStorage.getItem("userId") || localStorage.getItem("userId") === ""){
//         router.replace({path:"/login"})
//     }
// }
</script>