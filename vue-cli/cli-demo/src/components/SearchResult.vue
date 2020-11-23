<template>
    <top-bar >
      <div style="color:#fff;display:flex;align-items:center" @click="back">返回</div>
    </top-bar> 
  <h1>this is search result </h1>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
export default {
  name:"SearchResult",
  components:{
    TopBar
  },
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>