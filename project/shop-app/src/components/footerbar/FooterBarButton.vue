<script setup>
const props = defineProps({
    name:String
})

const emit = defineEmits(["funcHandle"])

const clickHandle = () => emit("funcHandle")
</script>

<template>
    <a-button size="large" @click="clickHandle" block>{{name}}</a-button>
</template>