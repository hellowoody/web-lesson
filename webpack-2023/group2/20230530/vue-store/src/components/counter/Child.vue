<template>
    <h2>{{ count }}</h2>
    <h2>{{ p11 }}</h2>
    <button  @click="decrement">-</button>
    <button  @click="increment">+</button>
</template>

<script setup>
const props = defineProps(["count","p11"])
const emits = defineEmits(["addevent","subevent"])

const decrement = () => emits("subevent")

const increment = () => emits("addevent")
</script>