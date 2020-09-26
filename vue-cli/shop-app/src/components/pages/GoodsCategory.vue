<template>
    <div>
        <top-bar @searchInputChangeHandle="searchInputChange" >
            <div slot="left" style="font-size:24px;" class="iconfont icon-back1" @click="back"></div>
            <div slot="right" style="font-size:24px;" class="iconfont icon-search" @click="search"></div>
        </top-bar>
        <my-content :refreshFunc="refresh" pull>
            <div>搜索结果</div>
            <a-list :grid="{ gutter: 16, column: 2 }" :data-source="goods" style="margin-top:16px">
                <a-list-item slot="renderItem" slot-scope="item">
                    <product-card :product="item"></product-card>
                </a-list-item>
            </a-list>
        </my-content>
    </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'
import MyContent from '@/components/content/MyContent'
import ProductCard from '@/components/product/ProductCard'
import {HttpGql,ImgUrl} from '@/kits/Http'

export default {
    name:"GoodsCategory",
    data(){
        return {
            searchInput:"",
            goods:[],
            type:""
        }
    },
    components:{
        TopBar, 
        MyContent,
        ProductCard,
    },
    created(){
        this.type = this.$route.params.content
        this.searchData()
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        refresh(){
            return this.searchData()
        },
        searchData(){
            let p = {
                query:`
                    {
                        goods (count:5,type:"${this.type}",name:"${this.searchInput}") {
                            id
                            name
                            price
                            imgpath
                        }
                    }
                `
            }
            return HttpGql(p).then((res)=>{
                this.goods = res.data.goods.map((item)=>{
                    item.imgpath = ImgUrl + item.imgpath
                    return item
                })
                return true
            }).catch(()=>{
                return false
            })
        },
        search(){
            if(this.searchInput !== ""){
                this.searchData()
            }else{
                this.$message.info("请输入要查询的东西")
            }
        },
        searchInputChange(content){
            this.searchInput = content
        }
    }
}
</script>

<style scoped>

</style>