<template>
    <h2>{{ logo }} {{user.name}} {{ user.role }}</h2>
    <h3>home page</h3>
</template>

<script setup>
import {userStore} from "@/store/userData"
import {globalStore} from "@/store/globalData"

const user = userStore()
const {logo} = globalStore()
console.log(user)
console.log(user.name)
console.log(user.role)
</script>