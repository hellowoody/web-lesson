<template>
  this is home 

  <br/>
  <a-button type="primary" @click="add">+</a-button>
  {{$store.state.count}}
  <a-button type="primary" @click="sub">-</a-button>
</template>

<script>
import {useStore} from 'vuex';

export default {
    name:"Home",
    setup(){
      const store = useStore()

      const add = () => {
        store.commit("increment")
      }

      const sub = () => {
        store.commit("decrement")
      }

      return {
        add,
        sub
      }
    }
}
</script>

<style>

</style>