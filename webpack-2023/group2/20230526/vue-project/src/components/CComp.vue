<template>
    <h2>C Component</h2>
    <button @click="goBack">返回上一步</button>
</template>

<script setup>
import {useRoute , useRouter} from "vue-router"

const route = useRoute()
const router = useRouter()

console.log("route",route)
console.log("router",router)

const goBack = () => {
    router.go(-1)
}
</script>