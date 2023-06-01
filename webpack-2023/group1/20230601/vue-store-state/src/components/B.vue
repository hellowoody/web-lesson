<template>
    <h2>B {{ pnum2 }}</h2>
    <button @click="inc">+</button>
    <c-comp :pnum="pnum2"></c-comp>
</template>

<script setup>
import CComp from "@/components/C.vue"

const props = defineProps(["pnum2"])
const emits = defineEmits(["xx"])

const inc = () => emits("xx")

</script>