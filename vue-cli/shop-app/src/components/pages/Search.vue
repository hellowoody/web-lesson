<template>
    <div>
        <top-bar @searchInputChangeHandle="searchInputChange" >
            <div @click="back" slot="left" class="iconfont icon-back1" style="font-size:24px" ></div>
            <div @click="search" slot="right" class="iconfont icon-search" style="font-size:24px" ></div>
        </top-bar> 
        <my-content>
            <div ref="aaa" class="history-search">
                <div style="display:flex;justify-content:space-between">
                    <div style="color:rgb(0 0 0 / 0.5);font-size:16px;font-weight:bold;">最近搜索</div>
                    <div style="color:rgb(182, 32, 224);font-size:14px;" @click="clearSearchHistory">清空</div>
                </div>
                <div class="history-search-content">
                    <div @click="searchByHistory(item)" class="history-search-item" v-for="(item,index) in historySearch" :key="index+item">{{item}}</div>
                </div>
            </div>
            <div style="margin-top:100px;">
                <div class="visited-good-title">最近浏览的商品</div>
                <h-scroll >
                    <product-card style="flex-shrink:0;margin-right:12px;"  v-for="item in goods" :key="item.id" :product="item"/>
                </h-scroll>
            </div>
            <div style="margin-top:42px;">
                <div class="visited-good-title">近期最流行的商品</div>
                <div v-for="item in goodpop" :key="item.id" class="pop-good">
                    <div class="pop-good-left">
                        <div class="pop-good-sort" :class="item.sortClass"></div>
                        <div class="pop-good-detail">
                            <div style="font-weight:bold">{{item.name}}</div>
                            <div style="font-size: 13px;">{{item.gooddesc}}</div>
                        </div>
                    </div>
                    <img :src="item.imgpath" class="pop-good-right">
                </div>
            </div>
        </my-content>
    </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'
import MyContent from '@/components/content/MyContent'
import ProductCard from '@/components/product/ProductCard'
import HScroll from '@/components/scroll/HScroll'
import {getCacheVal,setArray,getArray,clearItem} from '@/kits/LocalStorage'
import { HttpGql,ImgUrl } from '@/kits/Http' 

export default {
    name:"Search",
    data(){
        return {
            searchInput:"",
            historySearch:getArray("historySearch"),  //本项目的获取localstorage时，是线性获取，或者说不是异步获取,
            goods:[],
            goodpop:[],
         }
    },
    components:{
        TopBar,
        MyContent,
        ProductCard,
        HScroll
    },
    created(){
        if(getCacheVal("token") && getCacheVal("token").length > 0 ){
            this.initData(true)
        }else{
            this.initData(false)
        }
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
        },
        async initData(ifLogin){
            let p = ifLogin ? {
                query:`
                    {
                        goodpop(count:5){
                            id
                            name
                            price
                            imgpath
                            gooddesc
                            visitedcount
                        }
                        userVisited(userid:"${getCacheVal("userid")}",start:0,count:5){
                            id
                            name
                            price
                            type {
                                id
                            }
                            imgpath
                        }
                    }	
                `
            } : {
                query:`
                    {
                        goodpop(count:5){
                            id
                            name
                            price
                            imgpath
                            gooddesc
                            visitedcount
                        }
                    }
                `
            }
            try {
                let res = await HttpGql(p)
                this.goods = res.data.userVisited.map((item)=>{
                    item.imgpath = ImgUrl + item.imgpath
                    return item
                })
                this.goodpop = res.data.goodpop.map((item,index)=>{
                    item.imgpath = ImgUrl + item.imgpath
                    item.sortClass = "iconfont icon-"+ (index+1) +"01"
                    return item
                })
            } catch (e) {
                
            }
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

.visited-good-title {
    font-size:14px;
    color:rgb(0 0 0 /0.5);
    font-weight: bold;

}

.pop-good {
    display:flex;
    justify-content: space-between;
    margin-top:16px;
    background-color: #fff;
    box-shadow: 3px 1px 8px #e3e3e3;
    border-radius: 12px;
    padding: 6px;
    color:rgb(0 0 0 /0.5);
}

.pop-good-left {
    display:flex;
}

.pop-good-sort {
    font-size: 32px;
    align-items: center;
    display: flex;
    color: #F7B500;
}

.pop-good-detail {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left:16px;
}

.pop-good-right {
    width:50px;
    height:50px;
    object-fit: cover;
}

</style>