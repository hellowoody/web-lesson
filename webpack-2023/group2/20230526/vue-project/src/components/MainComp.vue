<template>
    <h2>Main Component</h2>
    <button @click="goBack">返回上一步</button>
</template>

<script setup>
import {useRoute , useRouter} from "vue-router"

const route = useRoute()
const router = useRouter()

const goBack = () => {
    router.go(-1)
}
</script>