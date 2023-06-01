<template>
    <h2>{{logo1}} {{ username }}</h2>
    <h2>{{logo}} {{ user.name }} {{ user.role }} </h2>
    <h3>home page</h3>
</template>

<script setup>
import {inject} from "vue"

const logo = inject("logo")
const user = inject("user")

const logo1 = localStorage.getItem("title")
const username = localStorage.getItem("username")

</script>