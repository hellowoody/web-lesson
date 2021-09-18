<script setup>
import {useRouter} from "vue-router"
const router = useRouter()
const back = () => router.go(-1)
</script>

<template>
<a-button @click="back">返回</a-button>
<h1>tab2</h1>
</template>