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
  <div>计数显示(reactive):{{count_reactive.count}}</div>
    <br>
  <button @click="increase_new">增加</button>
  <button @click="decrease_new">减少</button>
  <button @click="getType">获取类型</button>
  <hr>
  <div>ref和reactive 真正的区别</div>
  <div>ref: {{data_ref.value}}</div>
  <div>reactive: {{data_reactive.value}}</div>
  <button @click="updateName">修改名字</button>
</template>

<script>

import { reactive, ref,onMounted, onUpdated} from 'vue'

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
  beforeCreate(){
    console.log(1000)
  },
  created(){
    console.log(2000)
  },
  mounted(){
    console.log(4000)
  },
  //组合api composition api
  setup(){
    // const {
    //   count_new,
    //   count_new_static,
    //   count_reactive,
    //   increase_new,
    //   decrease_new,
    //   getType
    // } = useCount()
    const countState = useCount()

    const {data_ref,data_reactive,updateName} = useRefAndReactive()

    return {
      ...countState,
      data_ref,
      updateName,
      data_reactive,
    }
  }
}

const useRefAndReactive = ()=>{
  let data_ref = ref("张三") 
  /*
  reactive({
    value:"张三"
  })
  */
  let data_reactive = reactive({
    value:"李明"
  })

  function updateName(){
    console.log(data_ref)
    console.log(data_reactive)
    data_ref.value = "李四"
    data_reactive.value = "张红"
    console.log(data_ref)
    console.log(data_reactive)
  }

  return {
    data_ref,
    data_reactive,
    updateName
  }
}


const useCount = function(){
    let count_new = ref(0)
    let count_reactive = reactive({
      count:0,
      name:"zhangsan"
    })
    let count_new_static= 0
  
    function increase_new(){
      count_new.value++
      count_new_static++
      count_reactive.count++
      // console.log("count_new:",count_new)
      // console.log("value of count_new :",count_new.value)
      // console.log("count_new_static:",count_new_static)
    }
  
    const decrease_new = ()=>{
      count_new.value--
      count_new_static--
      count_reactive.count--
    }
  
    const getType = function(){
      console.log(typeof count_reactive)
      console.log(count_reactive)
    }
  
    return {
      count_new,
      count_new_static,
      count_reactive,
      increase_new,
      decrease_new,
      getType,
    }
  }

</script>

<style>

</style>