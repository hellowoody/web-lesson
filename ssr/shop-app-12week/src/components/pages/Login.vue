<script setup>
import {reactive,inject,getCurrentInstance} from "vue";
import TopBar from "@/components/topbar/TopBar.vue";
import Content from "@/components/content/Content.vue";
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection"
import { restHttp } from "@/kits/HttpKit"
import { setItem } from "@/kits/LocalStorageKit"

const instance = getCurrentInstance()
const message = inject("$message")
const router = useRouter()
const state = useState()
const form = reactive({
    id:"",
    pwd:""
})
const rules = {
    id:[
        {required:true,message:"请输入邮箱",trigger:"blur"},        // 必填的校验规则
        {type:"email",message:"请输入合法的邮箱地址",trigger:"blur"}, // 邮箱格式的校验规则
    ],
    pwd:[
        {required:true,message:"请输入密码",trigger:"blur"},                // 必填的校验规则
        {min:6,max:20,message:"密码的长度在6个字符以上",trigger:"blur"},      // 长度的校验规则
    ]
}

const back = () => {
    state.setDirection("backward")
    router.go(-1)
}

const register = () => router.replace({path:"/register"})

const sub = async () => {
    const form = instance.refs.loginForm
    try {
        const res = await form.validate()
        const key = "loading"
        message.loading({
            key,
            content:"登陆中..."
        })

        const resLogin = await restHttp("/api/login",{
            ...res,
            role:"c"
        })
        // const resLogin = await restHttp("/api/loginbystate",res)
        // console.log("resLogin:",resLogin)
        if(resLogin.code === 1){
            message.success({
                key,
                content:resLogin.msg,
                duration:2
            })
            setItem("token",resLogin.data.token)
            setItem("userId",resLogin.data.userId)
            setItem("userName",resLogin.data.userName)
            setItem("avatar",resLogin.data.avatar)
            back();
        }else{
            message.error({
                key,
                content:resLogin.msg,
                duration:2
            })
        }

    } catch (e) {
    }
    
}
</script>

<template>
    <div>
        <top-bar style="box-shadow:unset;">
            <template v-slot:left>
                <span class="iconfont icon-xiangzuojiantou" @click="back"></span>
            </template>
            <template v-slot:middle>
                <div></div>
            </template>
        </top-bar>
        <content>
            <div class="title">欢迎登陆</div>
            <div class="desc">请输入邮箱和密码登录您的账号</div>
            <div class="desc">
                <div>如果还没有账号，请先</div>
                <div @click="register" class="register">注册</div>
            </div>
            <a-form 
                ref="loginForm"
                :model="form" 
                layout="vertical" 
                style="margin-top:30px;"
                :rules="rules"
            >
                <a-form-item label="邮箱" name="id">
                    <a-input v-model:value="form.id" size="large" placeholder="请输入邮箱"></a-input>
                </a-form-item>
                <a-form-item label="密码" name="pwd">
                    <a-input v-model:value="form.pwd" type="password" autocomplete="on" size="large" placeholder="请输入密码"></a-input>
                </a-form-item>
                <a-form-item style="margin-top:45px;">
                    <a-button type="primary" @click="sub" size="large" block>登录</a-button>
                </a-form-item>
            </a-form>

        </content>
    </div>
</template>

<style scoped>
.title {
    font-size:20px;
    font-weight:bold;
    color:rgb(0 0 0 / 0.5);
    margin-top:30px;
}

.desc {
    font-size:15px;
    color:rgb(0 0 0 / 0.5);
    margin-top:12px;
    display: flex;
}

.register {
    color:#B620E0;
    font-weight:bold;
    margin-left:2px;
}
</style>