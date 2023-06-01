<template>
    <counter-child 
        :count="num"
        @addevent="increase"    
        @subevent="decrease"    
    />

</template>

<script setup>
import CounterChild from "@/components/CounterChild.vue"
import {ref} from "vue"

const num = ref(10)

const increase = () => num.value++

const decrease = () => num.value--
</script>
