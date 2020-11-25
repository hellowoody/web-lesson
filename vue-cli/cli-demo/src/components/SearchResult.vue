<template>
    <top-bar :searchDefault="searchContent">
      <template v-slot:left>
        <div style="font-size: 20px;" class="iconfont icon-back" @click="back"></div>
      </template>
    </top-bar> 
  <h1>this is search result </h1>
  <div v-for="item in dataList" :key="item.id">{{item.name}}</div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import { Http } from '@/kits/HttpMock.js'

export default {
  name:"SearchResult",
  data(){
    return {
      searchContent:"",
      dataList:[]
    }
  },
  components:{
    TopBar
  },
  async created(){
    // console.log(this.$route)
    // this.searchContent = this.$route.query.searchInput
    this.searchContent = this.$route.params.searchInput

    try {
      const res = await Http("/dataList",{
        count:3
      })
      this.dataList = res.data
    } catch (err) {
      console.log(err)
    }

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