<template>
    <h1>{{ count }}</h1>
    <button @click="sub">-</button>
    <button @click="add">+</button>
</template>

<script setup>
const props = defineProps({
    count:Number
})

const emits = defineEmits(['addevent', 'subevent'])

const sub = () => emits("subevent")

const add = () => emits("addevent")

</script>

<!-- <script>
export default {
    props:["count"],
    emits:["subevent","addevent"],
    setup(props,ctx){
        const sub = () => ctx.emit("subevent")
        const add = () => ctx.emit("addevent")
        return {
            sub,
            add
        }
    }
}
</script> -->