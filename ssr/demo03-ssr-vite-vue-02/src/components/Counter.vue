<script setup>
import { useState } from "../store/counter"
const state = useState();
</script>

<template>
    <h1>{{state.count}}</h1>
    <button @click="state.decrease">-</button>
    <button @click="state.increase">+</button>
</template>