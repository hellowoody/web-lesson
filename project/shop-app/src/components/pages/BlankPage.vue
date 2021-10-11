<script setup>
import {useRouter} from "vue-router"
const router = useRouter()
const back = () => router.go(-1)
</script>

<template>
    <div>
        <h1>空白页面</h1>
        <a-button @click="back">back</a-button>
    </div>
</template>