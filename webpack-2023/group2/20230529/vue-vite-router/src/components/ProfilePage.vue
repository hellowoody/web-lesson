<template>
    <h2>个人页面</h2>
    <router-link to="/profile/address">ADDRESS</router-link><br>
    <router-link to="/profile/avatar">AVATAR</router-link><br>
    <router-link to="/profile/info">INFO</router-link><br>
    <hr/>
    <router-view></router-view>
</template>

<script setup>
import {useRouter,useRoute} from "vue-router"

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


</script>