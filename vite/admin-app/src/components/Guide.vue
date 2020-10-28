<template>
  <div>计数显示:{{count}}</div>
  <br>
  <button @click="increase">增加</button>
  <button @click="decrease">减少</button>
  <hr>
  <div>下面是vue3 组合api的语法</div>
    <br>
  <div>计数显示(动态):{{count_new}}</div>
  <div>计数显示(静态):{{count_new_static}}</div>
    <br>
  <button @click="increase_new">增加</button>
  <button @click="decrease_new">减少</button>
</template>

<script>

import { ref } from 'vue'

export default {
  name:"Guide",
  data:function(){
    return {
      count:0
    }
  },
  methods:{
    increase(){
      console.log("+")
      this.count++
    },
    decrease(){
      console.log("-")
      this.count--
    }
  },
  //组合api composition api
  setup(){
    let count_new = ref(0)
    let count_new_static= 0

    function increase_new(){
      count_new.value++
      count_new_static++
      console.log("count_new:",count_new)
      console.log("value of count_new :",count_new.value)
      console.log("count_new_static:",count_new_static)
    }

    const decrease_new = ()=>{
      count_new.value--
      count_new_static--
    }

    return {
      count_new,
      count_new_static,
      increase_new,
      decrease_new,
    }
  }
}
</script>

<style>

</style>