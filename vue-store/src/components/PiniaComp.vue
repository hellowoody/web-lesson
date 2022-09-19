<script setup>
import {useState} from "../pinia/counter"
import {useStateBySetup} from "../pinia/counterSetup"

const state = useState()
const stateBySetup = useStateBySetup()

console.log("state:",state)
console.log("stateBySetup",stateBySetup)

state.$subscribe((mutation, state) => {
    console.log("mutation:",mutation)
    console.log("state:",state)
})

const handleForm = () => {
    state.$patch({
        step:100,
        name:"张",
        province:"天津"
    })
}

// console.log(state.$state.name)
</script>

<template>
    <div>
        <h2>Pinia例子</h2>
        {{state.step}}
        {{state.name}}
        {{state.province}}
        <button @click="state.decrease">-</button>
        <button @click="state.increase">+</button>
        <button @click="state.$reset">重置</button>
        <button @click="handleForm">批量操作</button>
        <hr>
        <h2>Pinia例子setup写法</h2>
        {{stateBySetup.step}}
        <button @click="stateBySetup.increase">+</button>
        <button @click="stateBySetup.$reset">重置</button>
    </div>
</template>