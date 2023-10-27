<template>
    <div>
        <top-bar>
            <template v-slot:left>
                <span class="iconfont icon-fanhuijiantou" style="font-size:20px;" @click="login"></span>
            </template>
            <template v-slot:middle>
                <div></div>
            </template>
        </top-bar>
        <content>
            <div class="title">新用户注册</div>
            <div class="desc">
                <span>如果已经有账号了，请直接</span>
                <span class="login" @click="login">登陆</span>
            </div>
            <a-form
                ref="registerForm"
                :model="form"
                layout="vertical"
                :rules="rules"
                style="margin-top: 30px;"
            >
                <a-form-item name="username" label="用户名">
                    <a-input v-model:value="form.username" placeholder="请输入用户名" size="large" />
                </a-form-item>
                <a-form-item name="id" label="邮箱">
                    <a-input v-model:value="form.id" placeholder="请输入邮箱" size="large" autocomplete="id"  />
                </a-form-item>
                <a-form-item name="pwd" label="密码">
                    <a-input-password v-model:value="form.pwd" placeholder="请输入密码" size="large" autocomplete="current-password" />
                </a-form-item>
                <a-form-item style="margin-top:45px;">
                    <a-button type="primary" size="large" @click="register" block>注册</a-button>
                </a-form-item>
            </a-form>
        </content>
    </div>
</template>
<script setup>
import { reactive,getCurrentInstance,inject } from "vue"
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection.js"
import { post } from "@/kits/fetch.js"

const toast = inject("showToast")
const instance = getCurrentInstance()
const router = useRouter()
const state = useState()
const form = reactive({
    id:"",        // email
    pwd:"",
    username:"",
})

const rules = {
    username:[{required:true,message:"请输入用户名",trigger:"blur"}],
    id:[
        {required:true,message:"请输入邮箱",trigger:"blur"},
        {type:"email",message:"请输入合法的邮箱地址",trigger:"blur"},
    ],
    pwd:[
        {required:true,message:"请输入密码",trigger:"blur"},
        {min:6,max:20,message:"密码的长度在6位以上",trigger:"blur"},
    ],
}

const login = () => {
    state.setDirection("backward")
    router.replace({ path: "/login"})
}

const register = async () => {
    const formRef = instance.refs.registerForm
    try {
        const formData = await formRef.validate()
        const key = "loading"
        toast.loading({
            key,
            content:"注册中...",
        })
        const res = await post("/register",formData)
        // console.log(res)
        if(res.code === 1) {
            toast.success({
                key,
                content:res.msg,
                duration:2
            })
            login()
        }else{
            toast.error({
                key,
                content:res.msg,
                duration:2
            })
        }
    } catch (err) {
        toast.error({
            key,
            content:res.msg,
            duration:2
        })
        console.log(err)
    }
}
</script>
<style scoped>
.title {
    color:rgb(0 0 0 / 0.87);
    font-size: 20px;
    font-weight: 600;
    margin-top:12px;
}

.desc {
    color:#5f5f5f;
    font-size: 14px;
    margin-top:12px;
}

.login {
    color: #B620E0;
    font-weight: bold;
    margin-left: 2px;
}
</style>