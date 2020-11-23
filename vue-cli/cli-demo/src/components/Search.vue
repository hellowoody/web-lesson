<template>
  <top-bar @searchHandle="goSearchResult">
    <div style="color:#fff;display:flex;align-items:center" @click="back">返回</div>
  </top-bar>
  <h1> this is search page</h1>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
export default {
  name:"Search",
  components:{
      TopBar
  },
  methods:{
    "back":function(){
      console.log("this is back btn")
      this.$router.go(-1)
    },
    goSearchResult(){
      this.$router.push("/searchresult")
    }
  }
}
</script>

<style>

</style>