<template>
    <top-bar >
      <template v-slot:left>
        <div style="font-size: 20px;" class="iconfont icon-back" @click="back"></div>
      </template>
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