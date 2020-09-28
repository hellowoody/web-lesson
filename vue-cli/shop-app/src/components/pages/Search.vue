<template>
    <div>
        <top-bar @searchInputChangeHandle="searchInputChange" >
            <div @click="back" slot="left" class="iconfont icon-back1" style="font-size:24px" ></div>
            <div @click="search" slot="right" class="iconfont icon-search" style="font-size:24px" ></div>
        </top-bar> 
        <my-content>
            <div class="history-search">
                <div style="display:flex;justify-content:space-between">
                    <div style="color:rgb(0 0 0 / 0.5);font-size:16px;font-weight:bold;">最近搜索</div>
                    <div style="color:rgb(182, 32, 224);font-size:14px;" @click="clearSearchHistory">清空</div>
                </div>
                <div class="history-search-content">
                    <div @click="searchByHistory(item)" class="history-search-item" v-for="(item,index) in historySearch" :key="index+item">{{item}}</div>
                </div>
            </div>
        </my-content>
    </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'
import MyContent from '@/components/content/MyContent'
import {setArray,getArray,clearItem} from '@/kits/LocalStorage'

export default {
    name:"Search",
    data(){
        return {
            searchInput:"",
            historySearch:getArray("historySearch"),  //本项目的获取localstorage时，是线性获取，或者说不是异步获取
         }
    },
    components:{
        TopBar,
        MyContent
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        search(){
            if (this.searchInput !== "") {
                setArray("historySearch",this.searchInput)
                this.$store.commit("setSearchInput",this.searchInput)
                this.$router.push({
                    name:"searchresult",
                })  //router 传值
            }else{
                this.$message.info('请输入要查询的东西');
            }
        },
        searchByHistory(content){
            this.$store.commit("setSearchInput",content)
            this.$router.push({
                name:"searchresult",
            })
        },
        searchInputChange(content){
            this.searchInput = content
        },
        clearSearchHistory(){
            clearItem("historySearch")
            this.historySearch=[]
        }
    }
}
</script>

<style scoped>

.history-search-content {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 14px;
}

.history-search-item {
    background-color: #fff;
    padding: 2px 6px 2px 6px;
    border-radius: 5px;
    box-shadow: 0px 1px 2px rgb(40 40 40 / 0.2);
    margin-top: 8px;
    margin-right: 5px;
}
</style>