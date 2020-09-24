<template>
    <div>
        <top-bar @searchInputChangeHandle="searchInputChange" :searchInput="searchInput">
            <div slot="left" style="font-size:24px;" class="iconfont icon-back1" @click="back"></div>
            <div slot="right" style="font-size:24px;" class="iconfont icon-search" @click="search"></div>
        </top-bar>
        <my-content>
            <div>搜索结果</div>
            <a-list :grid="{ gutter: 16, column: 2 }" :data-source="goods" style="margin-top:16px">
                <a-list-item slot="renderItem" slot-scope="item">
                    <product-card :product="{item}"></product-card>
                </a-list-item>
            </a-list>
        </my-content>
    </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'
import MyContent from '@/components/content/MyContent'
import ProductCard from '@/components/product/ProductCard'

let goods = [
          {
            "id": 1,
            "name": "乔1",
            "price": 1000,
            "imgpath": "shoe06.png"
          },
          {
            "id": 2,
            "name": "乔2",
            "price": 1001,
            "imgpath": "shoe07.png"
          },
          {
            "id": 3,
            "name": "乔3",
            "price": 1002,
            "imgpath": "shoe08.png"
          },
          {
            "id": 4,
            "name": "乔4",
            "price": 1003,
            "imgpath": "shoe09.png"
          },
          {
            "id": 5,
            "name": "乔5",
            "price": 1004,
            "imgpath": "shoe10.png"
          }
        ]

export default {
    name:"GoodsCategory",
    data(){
        return {
            searchInput:"",
            goods,
        }
    },
    components:{
        TopBar, 
        MyContent,
        ProductCard,
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        search(){

        },
        searchInputChange(content){
            this.searchInput = content
        }
    }
}
</script>

<style scoped>

</style>