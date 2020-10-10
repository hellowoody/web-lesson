<template>
    <div>
        <top-bar>
            <div @click="back" slot="left" class="iconfont icon-back1" style="font-size:24px" ></div>
            <div slot="middle" style="font-weight:bold;font-size: 16px;">购物车</div>
        </top-bar>
        <my-content style="padding-left:unset;padding-right:unset;">
            <product-edit v-for="(item,index) in $store.state.cartData" :key="index+item.name" :product="item" :index="index" style="margin-top:16px;"></product-edit>
        </my-content>
        <footer-bar>
            <div slot="left">
                <div style="color:rgb(0 0 0 /0.5);font-size:12px;font-weight:bold">总价</div>
                <div style="color:#FA6400;font-size:16px;font-weight:bold">{{$store.getters.cartTotalPrice}}</div>
            </div>
            <footer-bar-button slot="right" style="background-color:#D8D8D8" name="购买"></footer-bar-button>
        </footer-bar>
    </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'
import MyContent from '@/components/content/MyContent'
import FooterBar from '@/components/footerbar/FooterBar'
import FooterBarButton from '@/components/footerbar/FooterBarButton'
import ProductEdit from '@/components/product/ProductEdit'

export default {
    name:"Cart",
    components:{
        TopBar,
        MyContent,
        FooterBar,
        FooterBarButton,
        ProductEdit
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    },
}
</script>

