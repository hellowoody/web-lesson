<template>
    <top-bar :searchDefault="searchContent">
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
  data(){
    return {
      searchContent:""
    }
  },
  components:{
    TopBar
  },
  created(){
    // console.log(this.$route)
    // this.searchContent = this.$route.query.searchInput
    this.searchContent = this.$route.params.searchInput
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