<script setup>
import TopBar from "@/components/topbar/TopBar.vue";
import MyContent from "@/components/content/MyContent.vue";
import {Http} from "@/kits/HttpKit"
import {useRouter} from "vue-router"
import {useStore} from "vuex"
import {ref,reactive} from "vue";

const router = useRouter();
const store = useStore();
const form = reactive({
    id:"",
    pwd:"",
})
const loginForm = ref(null); // proxy {value:<a-form>}
const rules = {
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

const register = () => console.log("去注册")

const sub = async () => {
    try {
        await loginForm.value.validate();
        // form的rules已经全部校验通过
        const res = await Http("/login",form)
        console.log(res)
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
                <div class="title">欢迎登陆</div>
                <div class="desc">请输入邮箱和密码登陆你的账号</div>
                <div class="desc">
                    <div>如果还没有账号，请先</div>
                    <div @click="register" style="color:#b620f0;font-weight:bold;margin-left:2px;">创建一个账号</div>
                </div>
            </div>
            <a-form ref="loginForm" :model="form" layout="vertical" :rules="rules" style="margin-top: 30px;">
                <a-form-item label="邮箱" name="id">
                    <a-input size="large" v-model:value="form.id" placeholder="请输入邮箱"/>
                </a-form-item>
                <a-form-item label="密码" name="pwd">
                    <a-input size="large" v-model:value="form.pwd" autocomplete type="password" placeholder="请输入密码"/>
                </a-form-item>
                <a-form-item style="margin-top:46px;">
                    <a-button @click="sub" type="primary" size="large" block>登陆</a-button>
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