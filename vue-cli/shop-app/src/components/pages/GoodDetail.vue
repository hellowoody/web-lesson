<template>
    <div>
        <top-bar>
            <div slot="left" style="font-size:24px;" class="iconfont icon-back1" @click="back"></div>
            <div slot="middle">商品详情</div>
        </top-bar>
        <my-content>
            <a-carousel style="width:100%">
                <div class="bg-div"><a-icon class="bg-icon" type="heart" /><a-icon class="bg-icon" type="share-alt" /></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
            </a-carousel>
            <div style="margin-top:30px;padding-left:5px">
                <div class="goodtitle">goodtitle - gooddesc</div>
                <div class="goodprice">¥ 1000.00</div>
                <div style="color:rgb( 0 0 0 / 0.5);font-size:14px;font-weight:bold;margin-top:38px;">相近商品</div>
                <div class="related-goods">
                    <product-card class="related-goods-item" v-for="(item,index) in products" :key="index" :product="item"></product-card>
                </div>
            </div>
        </my-content>
        <footer-bar>
            <FooterBarButton slot="left" name="加入购物车" style="border:none" @funcHandle="addCart" />
            <FooterBarButton slot="right" name="购买" style="border:none;background-color:#d8d8d8" @funcHandle="order" />
        </footer-bar>
    </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'
import FooterBar from '@/components/footerbar/FooterBar'
import FooterBarButton from '@/components/footerbar/FooterBarButton'
import MyContent from '@/components/content/MyContent'
import ProductCard from '@/components/product/ProductCard'
let products = [
   {},
   {},
   {},
   {},
   {},
]
export default {
    name:"GoodDetail",
    data(){
        return {
            products
        }
    },
    components:{
        TopBar, 
        FooterBar,
        FooterBarButton,
        MyContent,
        ProductCard
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        addCart(){
            console.log("addcart")
        },
        order(){
            console.log("order")
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
    margin-top:12px;
}

.bg-icon {
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

.related-goods{
    display:flex;
    overflow: auto;
    margin-top:18px;
}

.related-goods-item {
    flex-shrink: 0;
    margin-right: 12px;
}

</style>