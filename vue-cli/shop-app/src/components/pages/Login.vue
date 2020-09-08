<template>
    <div>
        <top-bar style="background-color:unset;box-shadow:unset;">
            <div @click="back" slot="left" class="iconfont icon-back1" style="font-size:24px" ></div>
            <div slot="middle" style="font-weight:bold;font-size: 16px;"></div>
        </top-bar>
        <my-content>
            <div style="margin-bottom:39px;">
                <div class="title">欢迎登录</div>
                <div class="title-extend">请输入邮箱和密码登录你的账号</div>
            </div>
            <a-form-model ref="loginForm" :rules="rules" layout="vertical" style="overflow-y:auto" :model="form">
                <a-form-model-item label="邮箱" prop="mail">
                    <a-input size="large" v-model="form.mail" placeholder="请输入邮箱" />
                </a-form-model-item>
                <a-form-model-item label="密码" prop="pwd">
                    <a-input size="large" v-model="form.pwd" type="password" placeholder="请输入密码" />
                </a-form-model-item>
                <a-form-model-item style="margin-top:16px;">
                    <a-button @click="sub('loginForm')" size="large" type="primary" block>登录</a-button>
                </a-form-model-item>
            </a-form-model>
        </my-content>
    </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'
import MyContent from '@/components/content/MyContent.vue'


export default {
    name:"Login",
    data(){
        return {
            form:{
                mail:"",
                pwd:""
            },
            rules:{
                mail:[
                    {required:true,message:"请输入邮箱",trigger:"blur"},
                    {type:'email',message:"请输入合法的邮箱地址",trigger:"blur"}
                ],
                pwd:[{required:true,message:"请输入密码",trigger:"blur"}]
            }
        }
    },
    components:{
        TopBar,
        MyContent
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        sub(formName){
            this.$refs[formName].validate( valid =>{
                console.log(valid)
                if(valid){
                    const key="loadingkey"
                    this.$message.loading({content:"加载中...",key})
                    setTimeout(()=>{
                        this.$message.success({content:"登录成功",key,duration:2})
                        this.$router.replace({path:"/main/home"})
                    },2000)
                }else{
                    return false
                }
            })
        }
    }
}
</script>

<style scoped>
.title{
    font-size:20px;
    font-weight: bold;
    color:rgb(0 0 0 / 0.87);
}

.title-extend{
    font-size:14px;
    font-weight:bold;
    color:#5F5F5F;
    margin-top:10px;
}
</style>

