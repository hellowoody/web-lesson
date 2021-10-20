<script setup>
import TopBar from "@/components/topbar/TopBar.vue";
import MyContent from "@/components/content/MyContent.vue";
import {Http,ImgUrl} from "@/kits/HttpKit"
import {setCacheVal} from "@/kits/LocalStorageKit"
import {useRouter} from "vue-router"
import {useStore} from "vuex"
import {ref,reactive,inject} from "vue";

const message = inject("$message")
const router = useRouter();
const store = useStore();
const form = reactive({
    username:"",
    id:"",
    pwd:"",
})
const registerForm = ref(null); // proxy {value:<a-form>}
const rules = {
    username:[{required:true,message:"请输入用户名",trigger:"blur"}],
    id:[
        {required:true,message:"请输入邮箱",trigger:"blur"},
        {type:"email",message:"请输入合法的邮箱地址",trigger:"blur"}, // 输入的必须是合法的邮箱
    ],
    pwd:[
        {required:true,message:"请输入密码",trigger:"blur"},
        {min:6,max:20,message:"密码的长度在6个字符以上",trigger:"blur"},
    ],
}

const back = () => {
    store.commit("pageDirection/setDirection","backward")
    router.go(-1)
}

const login = () => router.replace({path:"/login"})

const sub = async () => {
    try {
        const key = "loadingkey"  // 这个key可以随意定义，目的是为了让后面的代码通过这个key 保持一致性
        await registerForm.value.validate();
        message.loading({key,content:"注册中..."})
        // form的rules已经全部校验通过
        const res = await Http("/register",form)
        // console.log(res)
        if(res.code === 1){
            message.success({key,content:res.msg,duration:2})
            // 跳转回上一个业务页面
            router.replace({path:"/login"})
        }else{
            message.error({key,content:res.msg,duration: 2}) 
        }
    } catch (error) {
        // console.log(error)
    }
}
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
                <div class="title">新用户注册</div>
                <div class="desc">
                    <div>如果已经有账号了,请直接</div>
                    <div @click="login" style="color:#b620f0;font-weight:bold;margin-left:2px;">登陆</div>
                </div>
            </div>
            <a-form ref="registerForm" :model="form" layout="vertical" :rules="rules" style="margin-top: 30px;">
                <a-form-item label="用户名" name="username">
                    <a-input size="large" v-model:value="form.username" placeholder="请输入用户名"/>
                </a-form-item>
                <a-form-item label="邮箱" name="id">
                    <a-input size="large" v-model:value="form.id" placeholder="请输入邮箱"/>
                </a-form-item>
                <a-form-item label="密码" name="pwd">
                    <a-input size="large" v-model:value="form.pwd" autocomplete type="password" placeholder="请输入密码"/>
                </a-form-item>
                <a-form-item style="margin-top:46px;">
                    <a-button @click="sub" type="primary" size="large" block>注册</a-button>
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