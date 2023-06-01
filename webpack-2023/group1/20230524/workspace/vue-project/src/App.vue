<template>
  <h1>{{count}}</h1>
  <button @click="sub">-</button>
  <button @click="add">+</button>
</template>

<!-- <script>
import {ref} from "vue"

export default {
    setup(){
        const count = ref(0)

        const add = () => count.value++
        const sub = () => count.value--

        return {
            count,
            add,
            sub,
        }
    },
}
</script> -->
<script setup>

import {ref} from "vue"
const count = ref(10)

const add = () => count.value++
const sub = () => count.value--

</script>


<style>
#app {
  color:red;
}
</style>
