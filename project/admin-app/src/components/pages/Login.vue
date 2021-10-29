<script setup>
import {useRouter} from "vue-router"
import {reactive,ref,inject} from "vue";

const formData = reactive({
    id:"",
    pwd:"",
})
const loginForm = ref(null);
const router = useRouter()
const rules = {
    id:[{required:true,message:"请输入管理员账号",trigger:"blur"}],
    pwd:[{required:true,message:"请输入密码",trigger:"blur"}]
}
const message = inject("$message")

const key = "loadingkey"
const onSubmit = () => {
    message.loading({key,content:"登陆中..."})
    loginForm.value.validate().then((valid) => {
        message.success({key,content:"登陆成功,跳转中...",duration:2})
        router.replace({path:"/main/home"})
    }).catch(err => {
        // console.log(err)
        message.warn({key,content:"请输入合法的内容",duration:2})
    })
}

const reset = () => {

}

</script>

<template>
    <div class="root">
        <div class="title">十二周后台管理系统</div>
        <a-form
            class="form"
            ref="loginForm"
            :model="formData"
            :rules="rules"
            :label-col="{span:6}"
            :wrapper-col="{span:16}"
        >
            <a-form-item label="账号" name="id">
                <a-input v-model:value="formData.id" placeholder="输入账号"></a-input>
            </a-form-item>
            <a-form-item label="密码" name="pwd">
                <a-input v-model:value="formData.pwd" placeholder="输入密码" type="password" autocomplete></a-input>
            </a-form-item>
            <a-form-item :wrapper-col="{span:12,offset:6}">
                <a-button type="primary" @click="onSubmit">登陆</a-button>
                <a-button style="margin-left:12px;" @click="reset">重置</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<style scoped>
.root {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:100vh;
}

.form {
    width:560px;
    height:360px;
    box-shadow: 1px 2px 8px #e3e3e3;
    border-radius:16px;
    padding:36px;
    padding-top:100px;
    box-sizing: border-box;
}

.title {
    font-size:24px;
    font-weight:bold;
    color:rgb(0 0 0 / 0.5);
    margin-bottom:16px;
}
</style>