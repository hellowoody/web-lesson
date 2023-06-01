<template>
    <child 
        :count="num" 
        :p11="p1" 
        @addevent="increase" 
        @subevent="decrease" 
    />
</template>

<script setup>
import Child from "./Child.vue"
import {ref} from "vue"

const props = defineProps(["p1"])

const num = ref(0)

const increase = () => num.value++

const decrease = () => num.value--
</script>