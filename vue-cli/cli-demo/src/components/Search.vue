<template>
  <top-bar @searchHandle="onSearch">
    <template v-slot:left>
      <div style="font-size: 20px;" class="iconfont icon-back" @click="back"></div>
    </template>
    <template v-slot:right>
        <button @click="goSearchResult">搜索</button>
    </template>
  </top-bar>
  <div class="history-search">
    <div class="history-search-title">
      <div>搜索历史</div>
      <div class="history-search-clean" v-on:click="cleanHistory">清除</div>
    </div>
    <div class="history-search-content">
      <div class="history-search-content-item" v-for="(item,index) in historySearch" :key="index">{{item}}</div>
    </div>
  </div>
  <hr>
    全局计数器:{{$store.state.count}}
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import { setArray,getArray,clearItem } from '@/kits/LocalStorage.js'

export default {
  name:"Search",
  data(){
    return {
      searchContent:"",
      historySearch:[]
    }
  },
  components:{
      TopBar
  },
  created(){
    this.historySearch = getArray("historysearch")
  },
  methods:{
    "back":function(){
      console.log("this is back btn")
      this.$router.go(-1)
    },
    goSearchResult(){
      // console.log(this.searchContent)
      // this.$router.push({
      //   path:"/searchresult",
      //   query:{
      //     searchInput:this.searchContent
      //   }
      // })
      setArray("historysearch",this.searchContent)
      this.$router.push({
        name:"searchresult",
        params:{
          searchInput:this.searchContent
        }
      })
    },
    onSearch(newVal){
      this.searchContent = newVal
    },
    cleanHistory(){
      clearItem("historysearch")
      this.historySearch = []
    }
  }
}
</script>

<style>
.history-search{
  box-sizing: border-box;
  width: 100%;
  padding:0px 16px;
  margin-top:24px;
}

.history-search-title {
  font-weight: bold;
  font-size:18px;
  display: flex;
  justify-content: space-between;
}

.history-search-content{
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
}

.history-search-content-item {
  background-color: #fafafa13;
  box-shadow: 0px 1px 2px rgb(40 40 40 / 0.2);
  border-radius: 12px;
  padding:8px 16px;
  margin-left:8px;
  margin-bottom:12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.history-search-clean{
  color:#9267fd;
  font-weight: 100;
  font-size:15px;
  display: flex;
  align-items: flex-end;
}
</style>