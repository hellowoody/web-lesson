<template>
  <h1>{{ num }}</h1>
  <button @click="decrease">-</button>
  <button @click="increase">+</button>
</template>

<!-- <script>
import {ref} from "vue"
export default {
  setup(){
   
    const num = ref(10)

    const increase = () => num.value++
    const decrease = () => num.value--

    return {
      num,
      increase,
      decrease
    }
  }
}
</script> -->

<script setup>
import {ref} from "vue"

const num = ref(10)

const increase = () => num.value++
const decrease = () => num.value--
</script>

<style>

</style>
