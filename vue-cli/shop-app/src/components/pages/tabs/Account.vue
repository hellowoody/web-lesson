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
                <div>{{item.name}}</div>
                <a slot="actions"><a-icon type="right" style="color:#8C8C8C;" /></a>
            </a-list-item>
        </a-list>
    </div>
</template>

<script>

const menus = [
    {
        name:"个人信息"
    },
    {
        name:"收货地址"
    },
    {
        name:"历史订单"
    },
    {
        name:"消息通知"
    },
    {
        name:"绑定卡片"
    },
    {
        name:"收藏夹"
    },
    {
        name:"产看版本"
    },
    {
        name:"退出登录"
    },
]

export default {
    name:"Account",
    data(){
        return {
            menus
        }
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

