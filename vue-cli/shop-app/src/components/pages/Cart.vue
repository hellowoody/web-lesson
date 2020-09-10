<template>
    <div>
        <top-bar>
            <div @click="back" slot="left" class="iconfont icon-back1" style="font-size:24px" ></div>
            <div slot="middle" style="font-weight:bold;font-size: 16px;">购物车</div>
        </top-bar>
        <my-content style="padding-left:unset;padding-right:unset;">
            <div class="product-edit">
                <div class="pic"></div>
                <div class="wrapper-right">
                    <div style="font-size:14px;color:rgb(0 0 0 / 0.5);font-weight:bold;">
                        switch游戏主机
                    </div>
                    <div style="font-size:14px;color:#FA6400;">
                        ¥ 3000
                    </div>
                    <div style="display:flex">
                        <div class="btn">-</div>
                        <div style="margin:1px 10px 0px 10px">0</div>
                        <div class="btn">+</div>
                    </div>
                </div>
            </div>
        </my-content>
        <footer-bar>
            <div slot="left">
                <div style="color:rgb(0 0 0 /0.5);font-size:12px;font-weight:bold">总价</div>
                <div style="color:#FA6400;font-size:16px;font-weight:bold">¥ 100000</div>
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

export default {
    name:"Cart",
    components:{
        TopBar,
        MyContent,
        FooterBar,
        FooterBarButton
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>

.product-edit {
    display:flex;
    background-color: #fff;
    justify-content: space-between;
    padding:12px 24px 12px 24px;
}

.pic {
    flex:1;
    background-color:#e5e5e5;
    height:75px;
    width:75px;
    border-radius: 10px;
}

.wrapper-right {
    flex:3;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 24px;
}

.btn {
    box-shadow: 0px 3px 5px rgb(40 40 40 /0.2);
    padding: 6px;
    width: 21px;
    height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}

</style>