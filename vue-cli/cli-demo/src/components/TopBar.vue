<template>
  <div class="top-bar">
      <input class="search-input" v-model="searchInput" placeholder="请输入查询内容" >
      <button class="search-btn" @click="search" >搜索</button>
  </div>
</template>

<script>

export default {
    name:"TopBar",
    data(){
        return {
            searchInput:""
        }
    },
    methods:{
        search(){
            console.log(this.searchInput)
            console.log("this is search btn")
            this.$router.push("/search")
        }
    },
    watch:{
        searchInput(newVal,oldVal){
            console.log(newVal,oldVal)
        }
    }
}
</script>

<style>
.top-bar {
    height:60px;
    background-color: #9267FD;
    box-shadow: 0px 1px 2px rgba(40,40,40,0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:12px 24px;
    box-sizing: border-box;
}

.search-input {
    height:100%;
    width:80%;
    border-radius: 10px;
}

.search-btn {
    height: 100%;
}
</style>