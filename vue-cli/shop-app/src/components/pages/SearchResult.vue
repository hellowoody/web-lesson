<template>
    <div>
        <top-bar @searchInputChangeHandle="searchInputChange" :searchInput="searchInput">
            <div @click="back" slot="left" class="iconfont icon-back1" style="font-size:24px" ></div>
            <div @click="search" slot="right" class="iconfont icon-search" style="font-size:24px" ></div>
        </top-bar> 
        <my-content>
            <div style="color:rgb(0 0 0 / 0.5);font-size:15px;font-weight: bold;">有{{data.length}}个商品符合要求</div>
            <div style="margin-top:16px;">
                <a-list :grid="{ gutter: 16, column: 2 }" :data-source="data">
                    <a-list-item slot="renderItem" slot-scope="item">
                        <div class="product-card">
                            <div class="product-img"></div>
                            <div class="product-desc">
                                <div style="color:rgb(0 0 0 / 0.5)">
                                    {{item.name}}
                                </div>
                                <div style="color:#FA6400;">
                                    {{item.price}}
                                </div>
                            </div>
                        </div>
                    </a-list-item>
                </a-list>
            </div>
        </my-content>
    </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'
import MyContent from '@/components/content/MyContent'
import {setArray,getArray} from '@/kits/LocalStorage'

let data = [
    {
        name:"乔1",
        price:"¥ 1000"
    },
    {
        name:"乔2",
        price:"¥ 2000"
    },
    {
        name:"乔3",
        price:"¥ 3000"
    },
    {
        name:"乔5",
        price:"¥ 4000"
    },
    {
        name:"乔6",
        price:"¥ 5000"
    },
    {
        name:"乔11",
        price:"¥ 6000"
    },
    {
        name:"乔12",
        price:"¥ 7000"
    },
]

export default {
    name:"Search",
    data(){
        return {
            data,
            searchInput:this.$route.params.content,
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
                this.$router.push({path:"/searchresult"})
            }else{
                this.$message.info('请输入要查询的东西');
            }
        },
        searchInputChange(content){
            this.searchInput = content
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

.product-card {
    background-color: #fff;
    height:178px;
    width:147px;
    border-radius: 15px;
}

.product-img {
    background-color: #e5e5e5;
    height: 107px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.product-desc {
    padding:12px;
    display:flex;
    flex-direction: column;
    font-size:14px
}
</style>