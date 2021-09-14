<script setup>
import {useStore} from "vuex"
const store = useStore();
const add = () => store.commit("count03/add")
const sub = () => store.commit("count03/sub")
</script>


<template>
    <h5>全局状态全局命名空间计步器:{{$store.state.count}}</h5>
    <h5>全局状态module中的03计步器:{{$store.state.count03.count}}</h5>
    <button @click="add">+</button>
    <button @click="sub">-</button>
</template>