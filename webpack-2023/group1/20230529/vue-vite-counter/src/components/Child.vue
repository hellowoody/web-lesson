<template>
    <h2>{{ count }}</h2>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
</template>

<!-- <script>

export default {
    props:["count"],
    emits:["sub","add"],
    setup(props,context){

        const decrement = () => context.emit("sub")

        const increment = () => context.emit("add")

        return {
            decrement,
            increment
        }
    }
}

</script> -->

<script setup>
// <script setup> 标签中给了我们几个“全局变量”，
// defineProps
// defineEmits
const props = defineProps(["count"])
const emits = defineEmits(["add","sub"])
// console.log(emits)
const decrement = () => emits("sub")
const increment = () => emits("add")
</script>