<script setup>
import { ref,inject } from "vue"
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection"
import TopBar from "@/components/topbar/TopBar.vue"
import Content from "@/components/content/Content.vue"
import { BellOutlined,UserOutlined,RightOutlined } from "@ant-design/icons-vue"
import { getItem,clearItem } from "@/kits/LocalStorageKit"
import Modal from 'ant-design-vue/lib/modal';

const message = inject("$message")
const router = useRouter()
const state = useState()
const loginStatus = ref((getItem("token") && getItem("token") !== "") ? true : false)
const userName = ref((getItem("userName") && getItem("userName") !== "") ? getItem("userName") : "")
const avatar = ref((getItem("avatar") && getItem("avatar") !== "") ? getItem("avatar") : "")

const menus = ref(loginStatus.value ? [
    { name:"个人信息",path:"/blankpage" },
    { name:"收货地址",path:"/blankpage" },
    { name:"客服中心",path:"/blankpage" },
    { name:"收藏夹"  ,path:"/blankpage" },
    { name:"系统设置",path:"/blankpage" },
    { name:"查看版本",path:"/version" },
    { name:"退出登录",path:"/logout"    },
] : [])

const fetchData = async () => {
    return true
}

const goto = (path) => {
    switch (path) {
        case "/version":
            message.warning("当前版本 1.0.0")      
            break;
        case "/logout":
            logout()       
            break;
        default:
            state.setDirection("forward")
            router.push({path})
            break;
    }
}

const logout = () => {
    Modal.confirm({
        title:"是否要残忍离开?",
        okText:"去意已决",
        cancelText:"再看一看",
        centered:true,
        onOk(){
            clearItem("token")
            clearItem("userName")
            clearItem("userId")
            clearItem("avatar")
            loginStatus.value = false;
            userName.value = "";
            avatar.value = "";
            menus.value = [
                { name:"系统设置",path:"/blankpage" },
                { name:"查看版本",path:"/blankpage" }
            ]
        },
        onCancel(){}
    })


    
}

const uploadAvatar = () => goto("/uploadavatar")
</script>

<template>
    <div>
        <top-bar style="box-shadow:unset;">
            <template v-slot:middle>
                <div></div>
            </template>
            <template v-slot:right>
                <bell-outlined style="font-size:20px;"/>
            </template>
        </top-bar>
        <content :hasTabBar="true" :pull="true" :refreshFunc="fetchData">
            <div class="avatar">
                <template v-if="loginStatus">
                    <a-avatar :size="100" :src="avatar"  @click="uploadAvatar"></a-avatar>
                    <div class="userName">{{userName}}</div>
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
                        <div style="color:rgb(0 0 0 / 0.5)" @click="goto(item.path)">{{item.name}}</div>
                        <a slot="action" style="opacity:0.5" @click="goto(item.path)">
                            <right-outlined />
                        </a>
                    </a-list-item>
                </template>
            </a-list>
        </content>
    </div>
</template>

<style scoped>
.avatar {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:200px;
}

.userName {
    font-size:16px;
    color:rgb(0 0 0 / 0.5);
    margin:12px;
}
</style>