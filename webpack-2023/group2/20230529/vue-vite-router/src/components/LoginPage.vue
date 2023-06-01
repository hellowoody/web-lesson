<template>
    <input v-model="user.userId" />
    <input v-model="user.pwd" type="password"/>
    <button @click="sub">login</button>
</template>

<script setup>
import { reactive } from 'vue';
import {useRouter} from "vue-router"

const router = useRouter()

const user = reactive({
    userId:"",
    pwd:""
})

const sub = () => {
    localStorage.setItem("userId",user.userId)
    router.replace({
        path:"/"
    })
}
</script>