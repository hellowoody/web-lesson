<template>
    <div class="layout">
        <h3>sign in</h3>
        <input placeholder="userid" v-model="userId" /> 
        <input placeholder="password" type="password"/>
        <div>
            <button @click="goHome">回到首页</button>
            <button @click="login">登录</button>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from "vue-router"
import {useUser} from "@/store/user"
import {ref} from "vue"

const userId = ref("")
const user = useUser()
const router = useRouter()

const goHome = () => router.replace({path:"/"})

const login = () => {
    user.setUserId(userId.value)
    router.replace({path:"/"})
}
</script>

<style scoped>

.layout {
    width:300px;
    height:300px;
    margin:150px auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>