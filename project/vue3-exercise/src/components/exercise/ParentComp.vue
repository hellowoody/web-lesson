<script setup>
import {ref,reactive} from "vue";

const count = ref(100)
const obj = reactive({
    name:"zhang",
    classname:"3,4班"
})
</script>

<template>
    <h1>父组件</h1>
    <child-comp a="1"  :c="count" v-bind:d="obj"/>
</template>