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
// defineProps(["a","b","c","d"])

const emit = defineEmits(["printHandle"])

const handle = () => {
    emit("printHandle",2000)
}
</script>

<template>
    <h5>子组件</h5>
    {{a}} {{b}} {{c}} {{d}}
    <hr>
    <div>
        <button @click="handle">调用父组件方法</button>
    </div>
</template>