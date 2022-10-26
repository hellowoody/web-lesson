<script setup>
import { reactive,inject,getCurrentInstance } from "vue"
import { useRouter } from "vue-router"
import { restHttp } from "@/kits/HttpKit"
import { setItem } from "@/kits/LocalStorageKit" 

const instance = getCurrentInstance()
const message = inject("$message")
const router = useRouter();
const form = reactive({
    id:"",
    pwd:""
})
const rules = {
    id:[
        {required:true,message:"请输入账号",trigger:"blur"},        // 必填的校验规则
    ],
    pwd:[
        {required:true,message:"请输入密码",trigger:"blur"},                // 必填的校验规则
        {min:6,max:20,message:"密码的长度在6个字符以上",trigger:"blur"},      // 长度的校验规则
    ]
}

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
            role:"a"
        })
        // const resLogin = await restHttp("/api/loginbystate",res)
        console.log("resLogin:",resLogin)
        if(resLogin.code === 1){
            message.success({
                key,
                content:resLogin.msg,
                duration:2
            })
            setItem("token",resLogin.data.token)
            setItem("userId",resLogin.data.userId)
            setItem("userName",resLogin.data.userName)
            router.push({
                path:"/main/home"
            })
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
    <div class="login">
        <h2>欢迎登陆后台管理系统</h2>
        <a-form 
            ref="loginForm"
            :model="form" 
            layout="horizontal" 
            style="margin-top:50px;width:380px;"
            :rules="rules"
        >
            <a-form-item label="账号" name="id">
                <a-input v-model:value="form.id" size="large" placeholder="请输入邮箱"></a-input>
            </a-form-item>
            <a-form-item label="密码" name="pwd">
                <a-input v-model:value="form.pwd" type="password" autocomplete="on" size="large" placeholder="请输入密码"></a-input>
            </a-form-item>
            <a-form-item style="margin-top:45px;" :wrapper-col="{span:24,offset:3}">
                <a-button type="primary" @click="sub" size="large" block>登录</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<style scoped>
.login {
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    margin-top: -50px;
}
</style>