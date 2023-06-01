<template>
    <h2>{{logo}} {{ username }}</h2>
    <counter :p1="p"/>
</template>

<script setup>
import Counter from "@/components/counter/Parent.vue"
const p = "123"
const logo = localStorage.getItem("title")
const username = localStorage.getItem("username")
</script>