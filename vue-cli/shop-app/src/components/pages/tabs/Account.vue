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
                <a slot="actions"><a-icon type="right" style="color:#8C8C8C;" /></a>
            </a-list-item>
        </a-list>
    </div>
</template>

<script>

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
            menus
        }
    },
    created(){
            //异步网络请求
            //获取服务器传来的菜单
            //this.menu = res.data
    },
    methods:{
        goto(path){
            if (path === "/onboarding") {
                this.$router.replace({path})  //{path} 相当于 {"path":path}
            }else{
                this.$router.push({path})  //{path} 相当于 {"path":path}
            }
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

