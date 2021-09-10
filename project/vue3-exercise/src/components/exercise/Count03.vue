<script setup>

import {ref} from "vue";
import message from 'ant-design-vue/lib/message';  // 手段3
const count = ref(0)
const increment = () => {
    if(count.value < 99){
        count.value += 1
    }else{
        // alert("最大是99")
        message.warn("最大是99")
    }
}
const decrement = () => {
    if(count.value > 0){
      count.value -= 1  
    }else{
        // alert("已经减到0了，不能再减了")
        message.warn("已经减到0了，不能再减了")
    }
}

</script>

<template>
    <div>计步器03: {{count}}</div>
    <a-button @click="increment">+</a-button>
    <a-button @click="decrement">-</a-button>
</template>

