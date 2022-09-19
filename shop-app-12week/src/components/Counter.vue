<!-- <script>
// import * as Vue from "vue";
import {ref} from "vue";

export default {
  setup(){
    const count = ref(0)

    const add = () => count.value++

    return {
      count,
      add
    }
  }
}
</script> -->
<!-- SFC Single-File Component-->
<script setup>
import {ref} from "vue";
import {useStore} from "vuex"
import {useState} from "@/store/counterOptions"
import {useState as useStateSetup} from "@/store/counterSetup"

const store = useStore()
const count = ref(35)
const state = useState()
const stateSetup = useStateSetup()
state.$state = {
  ...state.$state,
  abc:100
}
console.log("pinia state:",state)
console.log("pinia stateSetup:",stateSetup)

state.$subscribe((mutation,state) => {
  console.log("mutation:",mutation)
  console.log("state:",state)
})

stateSetup.$subscribe((mutation,state) => {
  console.log("mutation:",mutation)
  console.log("state:",state)
})

const add = () => count.value++

const sub = () => count.value--

const addByGlobal = () => {
  store.commit("increase")
}

const subByGlobal = () => {
  store.commit("decrease")
}
</script>

<template>
    <h1>普通计数器</h1>
    <div style="color:blue;" class="counter">
    {{count}}
    </div>
    <button @click="sub">-</button>
    <button @click="add">+</button>
    <h1>全局计数器</h1>
    <!-- 全局状态管理的最外层 -->
    <div>{{$store.state.count}}</div>
    <!-- 全局状态管理的modules中的state -->
    <div>{{$store.state.pageDirection.count}}</div>
    <button @click="subByGlobal">-</button>
    <button @click="addByGlobal">+</button>
    <h1>全局计数器 by Pinia</h1>
    <div>{{state.count}}</div>
    <div>平方{{state.square}}</div>
    <div>平方相反数{{state.oppositeSquare}}</div>
    <button @click="state.increase">-</button>
    <button @click="state.decrease">+</button>
    <button @click="state.$reset">重置</button>
    <h1>全局计数器 by Pinia setup</h1>
    <div>{{stateSetup.step}}</div>
    <button @click="stateSetup.increase">-</button>
    <button @click="stateSetup.decrease">+</button>
    <button @click="stateSetup.$reset">重置用不了 ！</button>
</template>

<style scoped>
.counter {
    font-size:v-bind(count+"px");
}
</style>
    