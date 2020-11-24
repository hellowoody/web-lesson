<template>
  <top-bar >
    <template v-slot:left>
      <div style="font-size: 20px;" class="iconfont icon-back" @click="back"></div>
    </template>
    <template v-slot:right>
        <button @click="goSearchResult">搜索</button>
    </template>
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