<template>
    <div>
        <div style="position:absolute;right:24px;top:20px;">
            <a-icon type="bell" style="font-size:20px;"/>
        </div>
        <div class="avaterClass">
            <a-avatar :size="100" icon="user" />
        </div>
        <a-list
            class="menus"
            item-layout="horizontal"
            :data-source="menus" >
            <a-list-item style="border:none" slot="renderItem" slot-scope="item">
                <div @click="goto(item.path)">{{item.name}}</div>
                <a slot="actions" @click="goto(item.path)"><a-icon type="right" style="color:#8C8C8C;" /></a>
            </a-list-item>
        </a-list>
    </div>
</template>

<script>
import {clearCache} from '@/kits/LocalStorage'

const menus = [
    {
        name:"个人信息",
        path:"/personinfo"
    },
    {
        name:"收货地址",
        path:""
    },
    {
        name:"历史订单",
        path:""
    },
    {
        name:"消息通知",
        path:""
    },
    {
        name:"绑定卡片",
        path:""
    },
    {
        name:"收藏夹",
        path:""
    },
    {
        name:"产看版本",
        path:""
    },
    {
        name:"退出登录",
        path:"/onboarding"
    },
]

export default {
    name:"Account",
    data(){
        return {
            menus,
            ModalText: 'Content of the modal',
            visible: false,
            confirmLoading: false,
        }
    },
    created(){
            //异步网络请求
            //获取服务器传来的菜单
            //this.menu = res.data
    },
    methods:{
        hideModal() {
            this.visible = false;
        },
        goto(path){
            if (path === "/onboarding") {
                this.showConfirm(path)
            }else{
                this.$router.push({path})  //{path} 相当于 {"path":path}
            }
        },
        test(){
            console.log(2000)
        },
        handleOk(e) {
            this.ModalText = 'The modal will be closed after two seconds';
            this.confirmLoading = true;
            setTimeout(() => {
                this.visible = false;
                this.confirmLoading = false;
            }, 2000);
        },
        handleCancel(e) {
            console.log('Clicked cancel button');
            this.visible = false;
        },
        showConfirm(path) {
            let t = this
            this.$confirm({
                title: '你是否确认退出登录?',
                okText:"确认",
                cancelText:"取消",
                onOk() {    
                    console.log('OK');
                    clearCache()
                    t.$router.replace({path})
                },
                onCancel() {
                },
            })
        },
    },
    components:{
    }
}
</script>

<style scoped>
.avaterClass {
    display:flex;
    justify-content: center;
    align-items: center;
    height: 280px;
}

.menus {
    background-color:#fff;
    height:100%;
    padding-left:24px;
    padding-right:24px;
}
</style>

