<template>
    <child 
        :count="num" 
        @addevent="increase" 
        @subevent="decrease" 
    />
</template>

<script setup>
import Child from "./Child.vue"
import {ref} from "vue"

const num = ref(0)

const increase = () => num.value++

const decrease = () => num.value--
</script>