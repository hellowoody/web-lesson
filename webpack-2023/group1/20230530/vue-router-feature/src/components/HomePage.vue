<template>
    <h2>home page</h2>
    <button @click="back1">返回上一页面</button>
    <button @click="back2">返回上一页面</button>
    <button @click="forward1">向前一页面</button>
    <button @click="forward2">向前一页面</button>
</template>

<script setup>
import {useRoute , useRouter} from "vue-router"

const route = useRoute()
const router = useRouter()

console.log("route",route)
console.log("router",router)

const back1 = () => router.back()
const back2 = () => router.go(-1)

const forward1 = () => router.forward()
const forward2 = () => router.go(1)


</script>