<template>
    <div>
        <top-bar>
            <div slot="left" style="font-size:24px;" class="iconfont icon-back1" @click="back"></div>
            <div slot="middle">客服中心</div>
        </top-bar>
        <my-content>
            <div :class="[item.to === userid ? 'msg-left': 'msg-right' ]" v-for="(item,index) in logs" :key="index">{{item.msg}}</div>
        </my-content>
        <footer-bar style="background-color:unset;padding:unset;padding-left:16px;">
            <a-input style="margin-right:16px;"  v-model="msg" />
            <a-button type="primary" @click="sendMsg">发送</a-button>
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
const to = "CUSTOMER_SERVICE";

export default {
    name:"CustomerService",
    data(){
        return {
            msg:"",
            userid : getCacheVal("userid"),
            logs:[]
            /*
            [
                {
                    message:"",
                    from:"",
                    to:""
                }
            ]
            */
        }
    },
    components:{
        TopBar,
        MyContent,
        FooterBar,
    },
    created(){
        this.InitWs()
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        InitWs(){
           
            ws = new WebSocket(`${wsUrl}?userid=${this.userid}`)
            ws.onopen = this.onOpenHandle;
            ws.onclose = this.onCloseHandle;
            ws.onerror = this.onErrorHandle;
            ws.onmessage = this.onMessageHandle;
        },
        onOpenHandle(){
            console.log("ws connected !")
            this.logs.push({
                form:"",
                to:"",
                msg:"欢迎来到客服中心",
            })
            ws.send(JSON.stringify({init:"增加一个新用户"}));
        },
        onCloseHandle(){
            console.log("ws closed !")
            this.logs.push({
                form:"",
                to:"",
                msg:"断开连接",
            })
        },
        onErrorHandle(e){
            console.log("ws error : ",e)
            this.logs.push({
                form:"",
                to:"",
                msg:e,
            })
        },
        onMessageHandle(evt){
            console.log(evt.data)

            this.logs.push(JSON.parse(evt.data))
        },
        sendMsg(){
            const from = this.userid
            const msg = this.msg
            ws.send(JSON.stringify({
                mode:"CUSTOMER_SERVICE",
                from,
                to,
                msg
            }))
            this.msg = ""
        }
    }
}
</script>

<style scoped>

.msg-left {
    display: flex;
    justify-content: flex-start;
}

.msg-right {
    display: flex;
    justify-content: flex-end;
}
</style>