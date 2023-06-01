<template>
    <h2>A Component</h2>
    <button @click="replacePath">替换路由path 到C</button>
    <button @click="goBack">返回上一步</button>
</template>

<script setup>
import {useRoute , useRouter} from "vue-router"

const route = useRoute()
const router = useRouter()

console.log("route",route)
console.log("router",router)

const replacePath = () => {
    router.replace({
        path:"/c"
    })
}

const goBack = () => {
    router.go(-1)
}

console.log(route.query)
</script>