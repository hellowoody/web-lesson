<template>
    <div>
        <h3>{{title}}</h3>
        <hr>
        <p>{{content}}</p>
        <button @click="back">返回</button>
        <button @click="edit">编辑</button>
    </div>
</template>

<script setup>
import {useRoute,useRouter} from "vue-router"

const router = useRouter()
const route = useRoute()

const {title,content} = route.query

const back = () => router.go(-1)

const edit = () => {
    router.push({path:"/blog/edit",query:route.query})
}
</script>
