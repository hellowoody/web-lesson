<script setup>
import {useRouter} from "vue-router"
const router = useRouter()
const back = () => router.go(-1)
const go = () => router.push({path:"/vrroom"})
</script>

<template>
<a-button @click="back">返回</a-button>
<a-button @click="go">VR全景</a-button>
<div>home</div>
</template>