<template>
    <div>
        <top-bar>
            <div slot="left" style="font-size:24px;" class="iconfont icon-back1" @click="back"></div>
            <div slot="middle">客服中心</div>
        </top-bar>
        <my-content style="padding: 24px 18px 24px 18px;">
            <div class="msg" :class="[item.to === userid ? 'msg-left': 'msg-right' ]" v-for="(item,index) in logs" :key="index">
                <a-avatar v-if="item.to === userid" :size="42" style="color: #f56a00; backgroundColor: #fde3cf;margin-right:12px;">客服中心</a-avatar>
                <div class="msg-content" :class="[item.to === userid ? '': 'msg-content-right' ]">{{item.msg}}</div>
                <a-avatar v-if="item.to !== userid"  :src="userAvatar" :size="42" style="margin-left:12px;" />
            </div>
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
            userAvatar:getCacheVal("imgpath"),
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

.msg {
    margin-bottom: 24px;
}

.msg-left {
    display: flex;
    justify-content: flex-start;
}

.msg-right {
    display: flex;
    justify-content: flex-end;
}

.msg-content {
    display: flex;
    align-items: center;
    background-color: #e5e5e5;
    padding: 2px 12px 2px 12px;
    border-radius: 12px;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    font-size: 13px;
}

.msg-content-right {
    background-color: #1890FC;
    color:#fff;
}
</style>