<template>
    <div>计步器00: {{count}}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
</template>

<script>
import {ref} from "vue";
export default {
    setup(){
        const count = ref(0)
        const increment = () => count.value += 1
        const decrement = () => count.value -= 1
        return {
            count,
            increment,
            decrement
        }
    }
}
</script>