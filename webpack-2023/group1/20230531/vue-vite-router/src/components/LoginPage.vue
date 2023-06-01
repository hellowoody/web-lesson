<template>
    <div>
        <h2>登录</h2>
        <input placeholder="userid" v-model="userId"/><br>
        <input placeholder="pwd" type="password"/><br>
        <button @click="sub">提交</button>
    </div>
</template>

<script setup>
import {ref} from "vue"
import {useRouter} from "vue-router"

const router = useRouter()

const userId = ref("")

const sub = () => {
    localStorage.setItem("userId",userId.value)
    localStorage.setItem("role","manager")
    router.replace({
        path:"/"
    })
}
</script>