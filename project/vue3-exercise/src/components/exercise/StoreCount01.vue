<script setup>
// this.$router  => useRouter()
// this.$route   => useRoute()
// this.$store   => useStore()
import {useStore} from "vuex"
const store = useStore()
// mutations -> commit
// 同步加
const add = () => {
    console.log("+")
    console.log(store.state.count)
    // store.state.count = store.state.count + 1 // 不能这么写，虽然控制台没有抛错，因为全局状态追踪会产生问题，用chrome插件查看会更直观
    store.commit("increment",2)
}
// 同步减
const sub = () => {
    console.log("-")
    store.commit("decrement")
}
// actions -> dispatch
const addAsync = () => {
    // 各一秒再做加法
    store.dispatch("incrementDelay")
}

const subAsync = () => {
    store.dispatch("decrementDelay")
}

</script>


<template>
    <h5>全局状态中的计步器:{{$store.state.count}}</h5>
    <h6>计步器平方:{{$store.getters.countSquare}}</h6>
    <a-button @click="add">+</a-button>
    <a-button @click="sub">-</a-button>
    <a-button @click="addAsync">异步+</a-button>
    <a-button @click="subAsync">异步-</a-button>
</template>