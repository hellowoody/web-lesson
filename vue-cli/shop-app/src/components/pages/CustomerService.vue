<template>
    <div>
        <top-bar>
            <div slot="left" style="font-size:24px;" class="iconfont icon-back1" @click="back"></div>
            <div slot="middle">客服中心</div>
        </top-bar>
        <my-content>

        </my-content>
        <footer-bar style="background-color:unset;padding:unset;padding-left:16px;">
            <a-input style="margin-right:16px;" />
            <a-button type="primary">发送</a-button>
        </footer-bar>
    </div>
</template>

<script>

import TopBar from '@/components/topbar/TopBar';
import MyContent from '@/components/content/MyContent';
import FooterBar from '@/components/footerbar/FooterBar';

export default {
    name:"CustomerService",
    components:{
        TopBar,
        MyContent,
        FooterBar,
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>

</style>