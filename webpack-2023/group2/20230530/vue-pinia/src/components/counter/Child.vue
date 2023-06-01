<template>
    <h2>{{ count }}</h2>
    <button  @click="decrement">-</button>
    <button  @click="increment">+</button>
</template>

<script setup>
const props = defineProps(["count"])
const emits = defineEmits(["addevent","subevent"])

const decrement = () => emits("subevent")

const increment = () => emits("addevent")
</script>