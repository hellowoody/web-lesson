<template>
    <div>
        <h3>blog edit</h3>
        <input placeholder="title" v-model="title"/> <br>
        <input placeholder="content" v-model="content"/> <br>
        <button @click="back">返回</button>
        <button @click="sub">提交</button>
    </div>
</template>

<script setup>
import {useRoute,useRouter} from "vue-router"
import {useBlog} from "@/store/blog"
import {ref} from "vue"

const blog = useBlog()

const router = useRouter()
const route = useRoute()

const title = ref(route.query.title)
const content = ref(route.query.content)

const back = () => router.go(-1)

const sub = () => {

    console.log(title.value)
    console.log(content.value)
    blog.modify({
        id:route.query.id,
        title:title.value,
        content:content.value,
    })
    router.replace({path:"/"})
}
</script>