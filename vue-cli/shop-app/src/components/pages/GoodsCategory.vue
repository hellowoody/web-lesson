<template>
    <div>
        <top-bar @searchInputChangeHandle="searchInputChange" >
            <div slot="left" style="font-size:24px;" class="iconfont icon-back1" @click="back"></div>
            <div slot="right" style="font-size:24px;" class="iconfont icon-search" @click="search"></div>
        </top-bar>
        <my-content :refreshFunc="refresh" pull>
            <div>搜索结果</div>
            <div
                v-infinite-scroll="onload"
                :infinite-scroll-disabled="busy"
                :infinite-scroll-distance="10"
            >
                <a-list :grid="{ gutter: 16, column: 2 }" :data-source="goods" style="margin-top:16px">
                    <a-list-item slot="renderItem" slot-scope="item">
                        <product-card :product="item"></product-card>
                    </a-list-item>
                </a-list>
            </div>
        </my-content>
    </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'
import MyContent from '@/components/content/MyContent'
import ProductCard from '@/components/product/ProductCard'
import {HttpGql,ImgUrl} from '@/kits/Http'
import infiniteScroll from 'vue-infinite-scroll';

export default {
    directives: { infiniteScroll },
    name:"GoodsCategory",
    data(){
        return {
            searchInput:"",
            goods:[],
            type:"",
            start:0,
            busy:false,
        }
    },
    components:{
        TopBar, 
        MyContent,
        ProductCard,
    },
    created(){
        this.type = this.$store.state.goodCategory
        // this.type = this.$route.params.content
        // this.searchData()
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        refresh(){
            this.start = 0
            this.goods = []
            return this.searchData()
        },
        searchData(){
            let count = 8
            let p = {
                query:`
                    {
                        goods (start:${this.start},count:${count},type:"${this.type}",name:"${this.searchInput}") {
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
            }
            return HttpGql(p).then((res)=>{
                this.goods = this.goods.concat(res.data.goods.map((item)=>{
                    item.imgpath = ImgUrl + item.imgpath
                    return item
                }))
                this.start += count
                return true
            }).catch(()=>{
                return false
            })
        },
        search(){
            if(this.searchInput !== ""){
                this.goods = []
                this.start = 0
                this.searchData()
            }else{
                this.$message.info("请输入要查询的东西")
            }
        },
        searchInputChange(content){
            this.searchInput = content
        },
        onload(){
            this.searchData()
        }
    }
}
</script>

<style scoped>

</style>