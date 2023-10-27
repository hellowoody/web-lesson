<template>
    <div class="login">
        <h2>欢迎登陆后台管理系统</h2>
        <a-form 
            ref="loginForm"
            style="margin-top: 50px;width:360px;"
            layout="horizontal"
            :label-col="{ span: 4 }"
            :wrapper-col="{ span: 20 }"
            :rules="rules"
            :model="form"
        >
            <a-form-item label="户名ID" name="id">
                <a-input v-model:value="form.id" placeholder="户名ID"></a-input>
            </a-form-item>
            <a-form-item label="密码" name="pwd">
                <a-input type="password" v-model:value="form.pwd" placeholder="请输入密码" autocomplete="on" ></a-input>
            </a-form-item>
            <a-form-item :wrapper-col="{span:24,offset:4}">
                <a-button type="primary" @click="login">登录</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>
<script setup>
import { reactive,getCurrentInstance } from "vue"
import { useRouter } from "vue-router"
import { message } from "ant-design-vue"
import { post } from "@/kits/fetch"
import { setItem } from "@/kits/localStore"

const instance = getCurrentInstance()
const router = useRouter()
const form = reactive({
    id:"",
    pwd:"",
})

const rules = {
    id:[
        { required: true, message: '请输入户名ID', trigger: 'blur' },
    ],
    pwd:[
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 16, message: '密码长度在6-16个字符', trigger: 'blur'}
    ]
}

const login = async () => {
    const formRef = instance.refs.loginForm
    try {
        const res = await formRef.validate()
        const key = "loading"
        message.loading({ content: '登录中...', key })
        const resLogin = await post("/login",{
            ...res,
            role:"admin"
        })
        if(resLogin.code === 1){
            message.success({ content: resLogin.msg, key })
            setItem("token",resLogin.data.token)
            setItem("userId",resLogin.data.id)
            setItem("userName",resLogin.data.username)
            router.push("/main/home")
        }else{
            message.warning({ content: resLogin.msg, key })
        } 
    } catch (e) {
        console.log(e)
    }   
}
</script>
<style scoped>
.login {
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>