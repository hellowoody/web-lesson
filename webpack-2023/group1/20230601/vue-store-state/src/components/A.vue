<template>
    <h2>A {{ pnum }}</h2>
    <b-comp :pnum2="pnum" @xx="inc"></b-comp>
</template>

<script setup>
import BComp from "@/components/B.vue"
const props = defineProps(["pnum"])
const emits = defineEmits(["x"])

const inc = () => emits("x")
</script>