<template>
    <ul>
        <li v-for="item in blog.list">
            <div>{{item.title}}</div>
            <button @click="goto('/blog/preview',item)">查看</button>
            <button @click="goto('/blog/edit',item)">编辑</button>
            <button>删除</button>
        </li>
    </ul>
</template>

<script setup>
import {useRouter} from "vue-router"
import {useBlog} from "@/store/blog"

const blog = useBlog()

const router = useRouter()

const goto = (path,query) => router.push({path,query})

</script>

