<script setup>
import MyContent from "@/components/content/MyContent.vue";
import {BellOutlined,UserOutlined} from "@ant-design/icons-vue"
import {useRouter} from "vue-router"
import {ref} from "vue"

const loginStatus = ref(false);
const router = useRouter()
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

const logintoggle = () => loginStatus.value = !loginStatus.value
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
                <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" :size="100" @click="uploadImg"></a-avatar>
                <div style="margin-top:12px;font-size:16px;color:rgb(0 0 0 / 0.5)">章三</div>
            </template>
        </div>
        <a-button @click="logintoggle">切换登陆状态</a-button>
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