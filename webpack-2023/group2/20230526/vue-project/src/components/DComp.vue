<template>
    <h2>D Component</h2>
    <button @click="goBack">返回上一步</button>
</template>

<script setup>
import {useRoute } from "vue-router"

const route = useRoute()


console.log("query",route.query)
console.log("params",route.params)


const goBack = () => {
    router.go(-1)
}
</script>