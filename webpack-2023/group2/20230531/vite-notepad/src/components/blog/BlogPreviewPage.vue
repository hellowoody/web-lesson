<template>
    <div class="content">
        <span>title:</span>
        <span>{{title}}</span>
        <hr>
        <p>{{content}}</p>
        <button @click="back">返回</button>
        <button @click="modify">修改</button>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router"
const route = useRoute()
const router = useRouter()

const {id,title,content} = route.query

const back = () => router.go(-1)
const modify = () => router.push({path:"/notepad/edit",query:route.query})
</script>
