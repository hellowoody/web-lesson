<template>
    <top-bar @searchHandle="searchOnChange" >
        <template v-slot:left>
            <div class="iconfont icon-back" style="color:#fff" @click="back"></div>
        </template>
        <template v-slot:right>
            <div @click="search" >搜索</div>
        </template>
    </top-bar>
    <div class="search-top-bar">
        <div class="search-title">搜索历史</div>
        <div class="search-clear" @click="clearHistory">清除</div>
    </div>
    <div class="search-history">
        <div class="search-history-item" v-for="(item,index) in searchHistory" :key="index">{{item}}</div>
    </div>
</template>

<script>
import TopBar from '/@/components/TopBar.vue'
import {setArray,getArray,clearItem} from '/@/kits/LocalStorage.js'

export default {
    name:"Search",
    data(){
        return {
            searchInput:"",
            searchHistory:[]
        }
    },
    components: {
        TopBar
    },
    created(){
        this.searchHistory = getArray("searchhistory")
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        search(){
            // console.log(this.searchInput)
            setArray("searchhistory",this.searchInput)
            this.$router.push({path:"/searchresult",query:{
                searchInput:this.searchInput
            }})
            // this.$router.push({name:"searchresult",params:{
            //     searchInput:this.searchInput
            // }})
        },
        searchOnChange(v){
            this.searchInput = v
        },
        clearHistory(){
            clearItem("searchhistory")
            this.searchHistory = []
        }
    }
}
</script>

<style>
.search-history {
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 8px 24px;
}

.search-history-item {
    padding:6px 10px;
    background-color: #fafafa;
    box-shadow: 0px 1px 8px rgba(40,40,40,0.2);
    border-radius: 8px;
    margin-top:8px;
}

.search-top-bar {
    display:flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 8px 24px;
    margin-top:16px;
}

.search-title {
    font-weight: bold;
    font-size: 16px;
}

.search-clear {
    font-size: 15px;
    color:#9267FD;
}
</style>