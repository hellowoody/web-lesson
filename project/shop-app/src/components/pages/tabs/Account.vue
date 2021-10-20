<script setup>
import MyContent from "@/components/content/MyContent.vue";
import {BellOutlined,UserOutlined,RightOutlined} from "@ant-design/icons-vue"
import { Modal } from 'ant-design-vue';
import {getCacheVal,clearCache} from "@/kits/LocalStorageKit"
import {useRouter} from "vue-router"
import {ref,inject} from "vue"

const loginStatus = ref(getCacheVal("token") ? true : false);
const username = ref(getCacheVal("username"))
const avatar = ref(getCacheVal("imgpath"))
const router = useRouter()
const message = inject("$message")

const menus = [
    {
        name:"个人信息",
        path:"/blankpage"
    },
    {
        name:"收货地址",
        path:"/blankpage"
    },
    {
        name:"客服中心",
        path:"/blankpage"
    },
    {
        name:"虚拟看店面",
        path:"/vrroom"
    },
    {
        name:"收藏夹",
        path:"/blankpage"
    },
    {
        name:"查看版本",
        path:"/blankpage"
    },
    {
        name:"退出登陆",
        path:"/logout"
    },
    
]

const refresh = () => {
    // 模拟网络请求（延时） -》异步 -》 Promise(包裹或形容异步的)
    // axios -》 Promise
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(true)
        },500)
    })
}

const uploadImg = () => {
    /*
        判断用户是否登陆
            登陆：直接跳转到头像上传页面
          为登陆：跳转到登陆页面
    */ 
}

const goto = (path) => {
    switch (path) {
    case "/logout":
        // 1.能不能有一个方法是批量清空
        // 2.得有返回消息
        // 3.重置双向绑定的用户信息
        // 4.推出前给他一个缓冲，让他犹豫一下，为了用户考虑之后再做选择
        showConfirm()
        break;
    default:
        router.push({path})
    }
}

const showConfirm = () => {
    Modal.confirm({
        title:"您是否确定要登出?",
        okText:"确定",
        cancelText:"取消",
        centered:true,
        onOk(){
            // 1.能不能有一个方法是批量清空
            clearCache()
            // 2.得有返回消息
            message.success("登出成功")
            // 3.重置双向绑定的用户信息
            loginStatus.value = false;
            username.value = "";
            avatar.value = "";
        },
        onCancel(){}
    })
}
</script>

<template>
    <my-content pull :refreshFunc="refresh">
        <div class="top">
            <bell-outlined style="font-size:20px;"/>
        </div>
        <div class="avatar">
            <template v-if="!loginStatus">
                <!-- 未登陆的分支 -->
                <a-avatar :size="100" @click="uploadImg">
                    <template #icon><user-outlined /></template>
                </a-avatar>
            </template>
            <template v-else>
                <a-avatar :src="avatar" :size="100" @click="uploadImg"></a-avatar>
                <div style="margin-top:12px;font-size:16px;color:rgb(0 0 0 / 0.5)">{{username}}</div>
            </template>
        </div>
        <a-list class="menus" item-layout="horizontal" :data-source="menus">
            <template #renderItem="{ item }">
                <a-list-item>
                    <div @click="goto(item.path)">{{item.name}}</div>
                    <a slot="actions" @click="goto(item.path)">
                        <RightOutlined style="color:rgba(0, 0, 0, 0.85)"/>
                    </a>
                </a-list-item>
            </template>
        </a-list>
    </my-content>
</template>

<style scoped>
.top {
    display:flex;
    justify-content: flex-end;
}

.avatar {
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height:280px;
}
</style>