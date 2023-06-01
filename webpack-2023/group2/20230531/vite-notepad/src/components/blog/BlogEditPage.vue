<template>
    <div class="content">
        <input v-model="title"/><br>
        <input v-model="content"/><br>
        <button @click="back">返回上一页</button>
        <button @click="backList">返回列表</button>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router"
const route = useRoute()
const router = useRouter()

const {id,title,content} = route.query

const back = () => router.go(-1)
const backList = () => router.replace({path:"/notepad/list"})

</script>