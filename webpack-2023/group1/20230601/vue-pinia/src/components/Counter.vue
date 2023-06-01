<template>
    <h2>{{ counter.num }}</h2>
    <h3>{{ counter.sqrt }}</h3>
    <h3>人民币 {{ counter.unit("ch") }}</h3>
    <h3>美元   {{ counter.unit("us") }}</h3>
    <h3>日元 {{ counter.unit("ja") }}</h3>
    <h3>韩元 {{ counter.unit("ka") }}</h3>
    <button @click="sub">-</button>
    <button @click="add">+</button>
    <button @click="modify">update</button>
</template>

<script setup>
import { useCounter } from "@/store/counter"

const counter = useCounter()

console.log(counter)

const sub = () => {
    counter.num--
    // counter.dec()
}

const add = () => {
    counter.num++
    // counter.inc()
}

const modify = () => {
    counter.update()
}
</script>