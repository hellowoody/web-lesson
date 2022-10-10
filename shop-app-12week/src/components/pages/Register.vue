<script setup>
import { reactive,inject,getCurrentInstance } from "vue"
import TopBar from "@/components/topbar/TopBar.vue";
import Content from "@/components/content/Content.vue";
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection"
import { restHttp } from "@/kits/HttpKit"

const instance = getCurrentInstance()
const message = inject("$message")
const router = useRouter()
const state = useState()
const form = reactive({
    id:"",
    pwd:"",
    username:""
})
const rules = {
    username:[
        {required:true,message:"请输入用户名",trigger:"blur"}
    ],
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

const login = () => router.replace({path:"/login"})


const register = async () => {
    const form = instance.refs.registerForm
    try {
        const formData = await form.validate()
        const key = "loading"
        message.loading({
            key,
            content:"注册中..."
        })
        const res = await restHttp("/api/register",formData)
        if(res.code === 1){
            message.success({
                key,
                content:res.msg,
                duration:2
            })
            login()
        }else{
            message.warning({
                key,
                content:res.msg,
                duration:2
            })
        }

    } catch (e){
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
            <div class="title">新用户注册</div>
            <div class="desc">
                <div>如果已经有账号了，请直接</div>
                <div @click="login" class="register">登陆</div>
            </div>
            <a-form ref="registerForm" :model="form" :rules="rules" style="margin-top:30px;" layout="vertical">
                <a-form-item label="用户名" name="username">
                    <a-input placeholder="请输入用户名" size="large" v-model:value="form.username" />
                </a-form-item>
                <a-form-item label="邮箱" name="id">
                    <a-input placeholder="请输入邮箱" size="large" v-model:value="form.id" />
                </a-form-item>
                <a-form-item label="密码" name="pwd">
                    <a-input placeholder="请输入密码" size="large" v-model:value="form.pwd" type="password" autocomplete />
                </a-form-item>
                <a-form-item style="margin-top:45px;">
                    <a-button @click="register" type="primary" size="large" block>注册</a-button>
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