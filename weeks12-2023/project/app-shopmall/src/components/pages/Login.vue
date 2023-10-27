<template>
    <div>
        <top-bar>
            <template v-slot:left>
                <span class="iconfont icon-fanhuijiantou" style="font-size:20px;" @click="back"></span>
            </template>
            <template v-slot:middle>
                <div></div>
            </template>
        </top-bar>
        <content>
            <div class="title">欢迎登陆</div>
            <div class="desc">请输入邮箱和密码登陆你的账号</div>
            <div class="desc">
                <span>如果还没有账号,请先</span>
                <span class="register" @click="register">注册</span>
            </div>
            <a-form
                ref="loginForm"
                :model="form"
                layout="vertical"
                :rules="rules"
                style="margin-top: 30px;"
            >
                <a-form-item name="id" label="账号">
                    <a-input v-model:value="form.id" placeholder="请输入邮箱" size="large" autocomplete="id"  />
                </a-form-item>
                <a-form-item name="pwd" label="密码">
                    <a-input type="password" v-model:value="form.pwd" placeholder="请输入密码" size="large" autocomplete="current-password" />
                </a-form-item>
                <a-form-item style="margin-top:45px;">
                    <a-button type="primary" size="large" @click="login" block>登陆</a-button>
                </a-form-item>
            </a-form>
        </content>
    </div>
</template>
<script setup>
import { reactive,getCurrentInstance,inject } from "vue"
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection.js"
import { post } from "@/kits/fetch"
import { setItem } from "@/kits/localStore"

const toast = inject('showToast')
const instance = getCurrentInstance()
const router = useRouter()
const state = useState()
const form = reactive({
    id:"",        // email
    pwd:"",
})

const rules = {
    id:[
        {required:true,message:"请输入邮箱",trigger:"blur"},
        {type:"email",message:"请输入合法的邮箱地址",trigger:"blur"},
    ],
    pwd:[
        {required:true,message:"请输入密码",trigger:"blur"},
        {min:6,max:20,message:"密码的长度在6位以上",trigger:"blur"},
    ],
}

const back = () => {
    state.setDirection("backward")
    router.go(-1)
}

const register = () => router.replace({path:"/register"})

// async-validator
const login = async () => {
    const formRef = instance.refs.loginForm
    const key = "loading"
    try {
        const formData = await formRef.validate()
        // console.log(formData)
        toast.loading({
            key,
            content:"正在登录...",
        })
        const res = await post("/login",formData)
        console.log(res)
        if(res.code === 1){
            setItem("token",res.data.token)
            setItem("userId",res.data.id)
            setItem("userName",res.data.username)
            setItem("avatar",res.data.avatar)
            setItem("role",res.data.role)
            toast.success({
                key,
                content:res.msg,
            })
            back()
        }else{
            toast.error({
                key,
                content:res.msg,
            })
        }
    } catch (err) {
        console.log(err)
        toast.error({
            key,
            content:"校验失败或网络错误",
        })
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

.register {
    color: #B620E0;
    font-weight: bold;
    margin-left: 2px;
}
</style>