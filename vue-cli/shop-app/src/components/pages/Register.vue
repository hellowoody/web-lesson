<template>
  <div>
        <top-bar style="background-color:unset;box-shadow:unset;">
            <div @click="back" slot="left" class="iconfont icon-back1" style="font-size:24px" ></div>
            <div slot="middle" style="font-weight:bold;font-size: 16px;"></div>
        </top-bar>
        <my-content>
            <div style="margin-bottom:39px;">
                <div class="title">创建你的账号</div>
                <div class="title-extend">
                    <div>如果你已经有一个账户？</div>
                    <div @click="login" style="color:#B620E0;margin-left:8px;font-weight:normal;">登录</div>
                </div>
            </div>
            <a-form-model ref="registerform" :rules="rules" layout="vertical" :model="form" style="overflow-y:auto">
                <a-form-model-item label="用户昵称" prop="username">
                    <a-input v-model="form.username" placeholder="请输入您的用户昵称" />
                </a-form-model-item>
                <a-form-model-item label="邮箱" prop="mail">
                    <a-input v-model="form.mail" type="email" placeholder="请输入您的邮箱" />
                </a-form-model-item>
                <a-form-model-item label="密码" prop="pwd">
                    <a-input v-model="form.pwd" type="password" placeholder="请输入您的密码" />
                </a-form-model-item>
                <a-form-model-item >
                    <a-button @click="sub('registerform')" block style="margin-top:24px;border:none;box-shadow: 0px 0px 8px #E3E3E3;">
                        注册
                    </a-button>
                </a-form-model-item>
            </a-form-model>
        </my-content>
  </div>
</template>
<script>
import TopBar from '@/components/topbar/TopBar'
import MyContent from '@/components/content/MyContent'
import {Http} from '@/kits/Http'

const key="loadingkey"
export default {
  data() {
    let validateMail = (rule, value, callback)=>{
        if (value === '') {
            callback(new Error("请输入邮箱"))
        }else{
            callback()
        }
    }

    let validatePwd = (rule, value, callback)=>{
        if (value === '') {
            callback(new Error("不能为空"))
        }else if(value.length <= 3 ){
            callback(new Error("密码长度太短"))
        }else if(value.indexOf(" ") >= 0){
            callback(new Error("密码格式不正确"))
        }else{
            callback()
        }
    }

    return {
      form: {
        username:"",
        mail:"",
        pwd:""
      },
      rules:{
        username:[{required:true,message:"请输入用户昵称",trigger:"blur"}],
        mail:[
            { validator: validateMail, trigger: 'blur' },
            {type:'email',message:"请输入合法的邮箱地址",trigger:"blur"}
        ],
        pwd:[
            { validator: validatePwd, trigger: 'blur' },
        ]
      }
    };
  },
  components:{
      MyContent,
      TopBar
  },
  methods:{
    back(){
        this.$router.go(-1)
    },
    login(){
        this.$router.replace({path:"/login"})
    },
    sub(formName){
        this.$refs[formName].validate((valid) => {
           console.log(valid)
           if(valid){
                this.$message.loading({ content: 'Loading...', key });
                setTimeout(() => {
                    Http("/register",this.form).then((data)=>{
                        console.log(data)
                        this.$message.success({ content: data.msg, key, duration: 2 });
                        this.login()
                    }).catch((e)=>{
                        console.log(e)
                        this.$message.error({ content: e, key, duration: 2 });
                    })

                    // this.$message.success({ content: '注册成功!', key, duration: 2 });
                    // this.login()
                    
                    // this.$message.error({ content: '注册失败!', key, duration: 2 });
                }, 1000)
           }
        });
    }
  },
};
</script>

<style scoped>
.title {
    font-size: 20px;
    color: rgb(0 0 0 / 0.87);
    font-weight: bold;
}
.title-extend {
    display: flex;
    font-size: 14px;
    font-weight: bold;
    color: #5F5F5F;
    margin-top:10px;
}

.ant-form >>> .ant-form-item-label > label {
    color:rgb(0 0 0 / 0.5);
}
</style>
