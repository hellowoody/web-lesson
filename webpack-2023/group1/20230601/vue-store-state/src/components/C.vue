<template>
    <h2>C {{ pnum }} {{ count }} {{ user }} {{ stu.name }} {{ stu.score }}</h2>
</template>

<script setup>
import {inject} from "vue"

const props = defineProps(["pnum"])

const count = localStorage.getItem("count")
const user = localStorage.getItem("user")

const stu = inject("stu")

console.log(typeof count)
</script>