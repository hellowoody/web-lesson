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
import {wsUrl} from '@/kits/Http';
import {getCacheVal} from '@/kits/LocalStorage';

let ws;

export default {
    name:"CustomerService",
    components:{
        TopBar,
        MyContent,
        FooterBar,
    },
    created(){
        InitWs()
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        InitWs(){
            const userid = getCacheVal("userid")
            ws = new WebSocket(`${wsUrl}?userid=${userid}`)
            ws.onopen = onOpenHandle;
            ws.onclose = onCloseHandle;
            ws.onerror = onErrorHandle;
            ws.onmessage = onMessageHandle;
        },
        onOpenHandle(){

        },
        onCloseHandle(){

        },
        onErrorHandle(){

        },
        onMessageHandle(){
            
        },
    }
}
</script>

<style scoped>

</style>