<template>
    <h2>{{ counter.count }}</h2>
    <h3>{{ counter.sqrt }}</h3>
    <h5>人民币{{ counter.unit("ch") }}</h5>
    <h5>美元{{ counter.unit("us") }}</h5>
    <h5>日元{{ counter.unit("ja") }}</h5>
    <a href="#" @click="sub">-</a>
    &nbsp;
    <a href="#" @click="add">+</a>
    <hr>
    <button @click="update">update</button>

</template>

<script setup>
import {useCounter} from "@/store/counter"

const counter = useCounter()
console.log(counter)
const sub = () => counter.decrease(counter.count-1)

const add = () => counter.increase(counter.count+1)

const update = () => counter.update()
</script>