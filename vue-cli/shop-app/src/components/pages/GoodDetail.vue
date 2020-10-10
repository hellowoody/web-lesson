<template>
    <div>
        <top-bar>
            <div slot="left" style="font-size:24px;" class="iconfont icon-back1" @click="back"></div>
            <div slot="middle">商品详情</div>
            <div slot="right" @click="goto('cart')" class="iconfont icon-gouwuchezhengpin" style="font-size: 24px"></div>
        </top-bar>
        <my-content>
            <a-carousel style="width:100%">
                <div class="bg-div" :style="imgStyle"><a-icon class="bg-icon" type="heart" /><a-icon class="bg-icon" type="share-alt" /></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
            </a-carousel>
            <div style="margin-top:30px;padding-left:5px">
                <div class="goodtitle">{{product.name}} - {{product.gooddesc}}</div>
                <div class="goodprice">¥ {{product.price}}</div>
                <div style="color:rgb( 0 0 0 / 0.5);font-size:14px;font-weight:bold;margin-top:38px;">相近商品</div>
                <h-scroll>
                    <product-card class="related-goods-item" v-for="(item,index) in products" :key="index" :product="item"></product-card>
                </h-scroll >
                <div style="margin-top:30px;margin-bottom:30px;font-size:14px;color:rgb(0 0 0 / 0.5 )">评论</div>
                <a-skeleton :paragraph="{ rows:3 }" avatar active />
                <a-skeleton :paragraph="{ rows:3 }" avatar active />
            </div>
        </my-content>
        <footer-bar>
            <FooterBarButton slot="left" name="加入购物车" style="border:none" @funcHandle="addCart" />
            <FooterBarButton slot="right" name="马上购买" style="border:none;background-color:#d8d8d8" @funcHandle="order" />
        </footer-bar>
    </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'
import FooterBar from '@/components/footerbar/FooterBar'
import FooterBarButton from '@/components/footerbar/FooterBarButton'
import MyContent from '@/components/content/MyContent'
import ProductCard from '@/components/product/ProductCard'
import HScroll from '@/components/scroll/HScroll'
import {Http,HttpGql,ImgUrl} from '@/kits/Http'
import {getCacheVal} from '@/kits/LocalStorage'

export default {
    name:"GoodDetail",
    data(){
        return {
            product:{},
            products:[]
        }
    },
    components:{
        TopBar, 
        FooterBar,
        FooterBarButton,
        MyContent,
        ProductCard,
        HScroll
    },
    created(){
        this.initData()
        if(getCacheVal("token") && getCacheVal("token").length > 0 ){
            this.visitedGood(getCacheVal("userid"),this.$store.state.selectedGoods[this.$store.state.selectedGoods.length-1].id)
        }
    },
    computed:{
        imgStyle(){
            return this.product.imgpath ? {
                backgroundImage:`url(${ImgUrl+this.product.imgpath})`,
                backgroundSize:"contain",
            } : ""
        }
    },
    watch:{
        '$route' (to,from){
            this.initData()
            if(getCacheVal("token") && getCacheVal("token").length > 0 ){
                this.visitedGood(getCacheVal("userid"),this.$store.state.selectedGoods[this.$store.state.selectedGoods.length-1].id)
            }
        }
    },
    methods:{
        goto(name){
            this.$router.push({name})
        },
        back(){
            this.$store.commit("popSelectedGoods")
            this.$router.go(-1)
        },
        visitedGood(userid,goodid){
            Http("/visitedgood",{
                userid,
                goodid
            })
        },
        async initData(){
            const id = this.$store.state.selectedGoods && this.$store.state.selectedGoods.length > 0 ? this.$store.state.selectedGoods[this.$store.state.selectedGoods.length-1].id : ""
            const type = this.$store.state.selectedGoods && this.$store.state.selectedGoods.length > 0 ? this.$store.state.selectedGoods[this.$store.state.selectedGoods.length-1].type : ""
            // const id = this.$store.state.selectedGood.id
            // const type = this.$store.state.selectedGood.type
            const p = {
                query:`
                    {
                        good (id:${id}){
                            id
                            name
                            gooddesc
                            price
                            imgpath
                            type {
                            id
                            name
                            }
                        }
                        goods (start:0,count:5,type:"${type}") {
                            id
                            name
                            price
                            imgpath
                            type {
                                id
                            }
                        }
                    }	
                `
            }
            let res = await HttpGql(p)
            this.product = res.data.good
            this.products = res.data.goods.filter((item)=>{
                return item.id != id
            }).map((item)=>{
                item.imgpath = ImgUrl + item.imgpath
                return item
            })
            // console.log(res)
        },
        addCart(){
            this.$store.dispatch("pushCart",{
                ...this.product,
                countbuy:1
            })
            this.$message.success("添加成功")
        },
        order(){
            this.product.countbuy = 1
            this.$store.dispatch("pushCart",Object.assign({},this.product))
            this.goto("cart")
        }
    }
}
</script>

<style scoped>
.ant-carousel >>> .slick-slide {
    height:160px;
    text-align: center;
    background-color: rgb(0 0 0 / 0.1);
    overflow: hidden;
    border-radius: 10px;
}

.bg-div {
    display:flex !important;
    justify-content: flex-end;
    height:160px;
}

.bg-icon {
    margin-top:12px;
    margin-right:20px;
    font-size:18px;
    color:#8C8C8C
}

.goodtitle{
    font-size:16px;
    font-weight: bold;
    color: rgb(0 0 0 / 0.5)
}

.goodprice{
    font-size:18px;
    font-weight: bold;
    color:#FA6400;
    margin-top:15px;
}

.related-goods-item {
    flex-shrink: 0;
    margin-right: 12px;
}

</style>