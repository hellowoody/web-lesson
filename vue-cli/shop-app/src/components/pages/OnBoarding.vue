<template>
    <div>
        <div class="logo">
            <div class="logo-image"></div>
        </div>
        <a-carousel>
            <div>
                <h3>最新的产品</h3>
                <a-skeleton size="small" style="margin-right:24px;margin-left:24px;" active/>
            </div>
            <div>
                <h3>最低的价格</h3>
                <a-skeleton size="small" style="margin-right:24px;margin-left:24px;" active/>
            </div>
            <div>
                <h3>最快的物流</h3>
                <a-skeleton size="small" style="margin-right:24px;margin-left:24px;" active/>
            </div>
        </a-carousel>
        <footer-bar style="background-color:unset;box-shadow:unset">
            <footer-bar-button @funcHandle="goto('/register')" slot="left" name="注册"></footer-bar-button>
            <footer-bar-button @funcHandle="goto('/login')" slot="right" style="background-color:#D8D8D8" name="登录"></footer-bar-button>
        </footer-bar>
    </div>
</template>

<script>
import FooterBar from '@/components/footerbar/FooterBar'
import FooterBarButton from '@/components/footerbar/FooterBarButton'

export default {
    name:"OnBoarding",
    components:{
        FooterBar,
        FooterBarButton
    },
    methods:{
        goto(path){
            this.$router.push({path})
        }
    }
}
</script>

<style scoped>
.logo {
    height:360px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-image {
    width: 310px;
    height:295px;
    border-radius: 20px;
    background-color: rgb(0 0 0 / 0.1)
}

.ant-carousel >>> .slick-slide {
  text-align: center;
  line-height: 50px;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color:rgb(0 0 0 / 0.5)
}



</style>  