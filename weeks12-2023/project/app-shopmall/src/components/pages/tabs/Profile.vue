<template>
    <div>
        <top-bar>
            <template v-slot:middle>
                <div></div>
            </template>
            <template v-slot:right>
                <BellOutlined style="font-size:20px;" />
            </template>
        </top-bar>
        <content hasTabBar style="padding:unset;">
            <div class="avatar">
                <template v-if="loginState">
                    <!-- 已经登陆 -->
                    <a-avatar :size="100" :src="avatar" @click="goto('/uploadavatar')"></a-avatar>
                    <div class="user-name">{{ userName }}</div>
                </template>
                <template v-else>
                    <a-avatar :size="100" @click="goto('/login')">
                        <template #icon><UserOutlined /></template>
                    </a-avatar>
                </template>
            </div>
            <a-list :data-source="menus">
                <template #renderItem="{item}">
                    <a-list-item>
                        <div style="color:rgb(0 0 0 / 0.5)" @click="goto(item.path)">{{ item.name }}</div>
                        <template #actions>
                            <RightOutlined @click="goto(item.path)" />
                        </template>
                    </a-list-item>
                </template>
            </a-list>
        </content>
    </div>
</template>
<script setup>
import {ref,inject} from 'vue';
import {BellOutlined,UserOutlined,RightOutlined} from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue'
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection.js"
import { getItem,removeItem } from "@/kits/localStore"
import { post } from "@/kits/fetch"

const toast = inject('showToast')
const router = useRouter()
const state = useState()
const loginState = ref(getItem("token") ? true : false);
const avatar = ref(getItem("avatar"))
const userName = ref(getItem("userName"))
const menus = ref(getItem("token") ? [
    { name:"个人信息",path:"/blankpage"},
    { name:"收货地址",path:"/blankpage"},
    { name:"客服中心",path:"/blankpage"},
    { name:"收藏夹",path:"/blankpage"},
    { name:"系统设置",path:"/blankpage"},
    { name:"查看版本",path:"/version"},
    { name:"退出登陆",path:"/logout"},
] : [
    { name:"系统设置",path:"/blankpage"},
    { name:"查看版本",path:"/version"},
])


const token = getItem("token")


const goto = (path) => {
    switch (path) {
        case "/version":
            toast.success("当先版本v1.0.0")
            break;
        case "/logout":
            logout()
            break;
        default:
            state.setDirection("forward")
            router.push({
                path
            })
            break;
    }  
}

const logout = () => {
    Modal.confirm({
        title: '是否要残忍离开?',
        okText: '是的',
        cancelText: '再看一看',
        centered:true,
        onOk() {
            removeItem("token")
            removeItem("userId")
            removeItem("userName")
            removeItem("role")
            removeItem("avatar")
            loginState.value = false
            userName.value = ""
            avatar.value = ""
            menus.value = [
                { name:"系统设置",path:"/blankpage"},
                { name:"查看版本",path:"/version"},
            ]
        },
        onCancel() {},
    })
}

</script>
<style scoped>
.avatar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
}

.user-name {
    margin-top:12px;
    font-size: 16px;
    color: rgb(0 0 0 / 0.5);
}
</style>