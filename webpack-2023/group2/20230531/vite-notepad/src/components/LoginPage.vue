<template>
    <h2>login</h2>
    <input v-model="userId" />
    <button @click="sub">登录</button>
</template>

<script setup>
import {ref} from "vue"
import {useUser} from "@/store/user"
import { useRouter } from "vue-router"

const router = useRouter()
const user = useUser()
const userId = ref("")

const sub = () => {
    user.login(userId.value)
    router.replace({path:"/"})
}
</script>