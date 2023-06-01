<template>
    <h1>{{useStore.num}}</h1>
    <button @click="sub">-</button>
    <button @click="add">+</button>
</template>

<script setup>
import {stepStore} from "@/store/step.js"

const useStore = stepStore()

const add = () => useStore.increase()

const sub = () => useStore.decrease()

</script>