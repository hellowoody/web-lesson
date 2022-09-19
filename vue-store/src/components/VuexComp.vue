<script setup>
import {useStore} from "vuex"
const store = useStore()
const add = () => {
    store.commit("increase")
}

const sub = () => {
    store.commit("decrease")
}
</script>

<template>
    <div>
        <h2>vuex例子</h2>
        {{$store.state.count}}
        <button @click="sub">-</button>
        <button @click="add">+</button>
    </div>
</template>