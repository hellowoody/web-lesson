<script setup>
import TopBar from "@/components/topbar/TopBar.vue";
import MyContent from "@/components/content/MyContent.vue";
import {useRouter} from "vue-router"
import {useStore} from "vuex"

const router = useRouter()
const store = useStore();

const back = () => {
    store.commit("pageDirection/setDirection","backward")
    router.go(-1)
}

const register = () => console.log("去注册")
</script>

<template>
    <div>
        <top-bar style="box-shadow: unset;">
            <template v-slot:left>
                <div class="iconfont icon-fanhui1" @click="back" style="font-size:23px;"></div>
            </template>
            <template v-slot:middle>
                <div></div>
            </template>
        </top-bar>
        <my-content>
            <div style="margin-top:30px">
                <div class="title">欢迎登陆</div>
                <div class="desc">请输入邮箱和密码登陆你的账号</div>
                <div class="desc">
                    <div>如果还没有账号，请先</div>
                    <div @click="register" style="color:#b620f0;font-weight:bold;margin-left:2px;">创建一个账号</div>
                </div>
            </div>
            <a-form layout="vertical" style="margin-top: 30px;">
                <a-form-item label="邮箱">
                    <a-input size="large" placeholder="请输入邮箱"/>
                </a-form-item>
                <a-form-item label="密码">
                    <a-input size="large" autocomplete type="password" placeholder="请输入密码"/>
                </a-form-item>
            </a-form>
        </my-content>
    </div>
</template>

<style scoped>
.title {
    font-size:20px;
    font-weight: bold;
    color:rgb(0 0 0 / 0.5);
}
.desc {
    font-size:15px;
    color:#5f5f5f;
    margin-top:12px;
    display:flex;
}
</style>