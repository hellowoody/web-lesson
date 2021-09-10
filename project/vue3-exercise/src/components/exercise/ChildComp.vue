<script setup>
defineProps({
    a:String,
    b:{
        type:String,
        default:"空"
    },
    c:Number,
    d:Object
})
</script>

<template>
    <h5>子组件</h5>
    {{a}} {{b}} {{c}} {{d}}
</template>