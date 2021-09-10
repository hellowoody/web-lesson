<script setup>
import {ref,reactive} from "vue";

const count = ref(100)
const obj = reactive({
    name:"zhang",
    classname:"3,4班"
})

const print = (p) => {
    console.log("父组件中的打印方法:",p)
}
</script>

<template>
    <h1>父组件</h1>
    <child-comp @printHandle="print" a="1"  :c="count" v-bind:d="obj"/>
</template>