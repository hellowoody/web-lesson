<template>
  <h1>App {{ num }}</h1>
  <a-comp :pnum="num" @x="inc"></a-comp>
</template>

<script setup>
import AComp from "@/components/A.vue"
import {ref} from "vue"
const num = ref(10)

const inc = () => num.value++

localStorage.setItem("count",100)
localStorage.setItem("user",{a:1,b:2})
localStorage.setItem("arr",[1,2,3]) // 1,2,3

// localStorage 类型 大小 速度
// vue  provide inject  没有配套的双向绑定事件
</script> 
