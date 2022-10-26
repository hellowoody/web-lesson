<script setup>
import { useState } from "../store/counter"
const state = useState()
</script>
<template>
    <h1>About</h1>
    <h2>{{state.count}}</h2>
</template>