<template>
  <h1>App 组件</h1>
  <div> {{a}} <input v-model="b" /> <input v-model="c.val" /> </div>
  <hr>
  <div>计算属性（b的平方）：{{square}}</div>
</template>

<script>
import {ref,reactive,computed,watch} from "vue";
export default {
  data(){
    return {
      a:0
    }
  },
  setup(){
    const b = ref("10")
    const c = reactive({
      val : 100,
      val2 : 200,
      val3 : 300,
    })

    const square = computed(function(){
      return b.value*b.value
    })

    watch(b,(currentVal,prevVal) => {
      console.log("b改变了,当前值=",currentVal,"旧值=",prevVal)
    })

    watch(() => c.val,(currentVal,prevVal) => {
      console.log("c改变了,当前值=",currentVal,"旧值=",prevVal)
    })

    watch(() => ({...b}),(currentVal,prevVal) => {
      console.log("c改变了,当前值=",currentVal,"旧值=",prevVal)
    })
    // watch(() => Object.assign({},c),(currentVal,prevVal) => {
    //   console.log("c改变了,当前值=",currentVal,"旧值=",prevVal)
    // })

    return {
      b,
      c,
      square
    }
  }
}

</script>


