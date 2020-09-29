<template>
    <div>
        <top-bar>
            <div slot="left" style="font-size:24px;" class="iconfont icon-back1" @click="back"></div>
            <div slot="middle">商品详情</div>
        </top-bar>
        <footer-bar>
            <FooterBarButton slot="left" name="加入购物车" style="border:none" @funcHandle="test" />
            <FooterBarButton slot="right" name="购买" style="border:none;background-color:#d8d8d8" @funcHandle="test" />
        </footer-bar>
    </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'
import FooterBar from '@/components/footerbar/FooterBar'
import FooterBarButton from '@/components/footerbar/FooterBarButton'

export default {
    name:"GoodDetail",
    components:{
        TopBar, 
        FooterBar,
        FooterBarButton
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        test(){
            console.log(1000)
        }
    }
}
</script>

<style scoped>

</style>