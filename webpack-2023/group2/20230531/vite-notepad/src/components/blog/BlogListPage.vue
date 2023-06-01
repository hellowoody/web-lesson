<template>
    <ul>
        <li v-for="item in blog.list">
            <span>{{item.title}}</span>
            <button @click="detail(item)">查看</button>
            <button @click="edit(item)">编辑</button>
            <button @click="del">删除</button>
        </li>
    </ul>
</template>

<script setup>
import { useBlog } from "@/store/blog" 
import { useRouter } from "vue-router"

const blog = useBlog()
const router = useRouter()

const detail = (item) => router.push({path:"/notepad/preview",query:item})
const edit = (item) => router.push({path:"/notepad/edit",query:item})
const del = () => {}
</script>

<style scoped>

</style>