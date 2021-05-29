<template>
  <!-- v-dom  -->
  <div>
    <div>计步器:{{count}}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      count:0
    }
  },
  methods:{
    increment(){
      this.count++
    },
    decrement(){
      this.count--
    }
  }
}
</script>
