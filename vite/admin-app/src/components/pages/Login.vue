<template>
  <div class="root">
    <a-form class="login" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="用户名" v-bind="validateInfos.name" >
        <a-input v-model:value="form.name" />
      </a-form-item>
      <a-form-item label="密码" v-bind="validateInfos.pwd">
        <a-input v-model:value="form.pwd" type="password" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span:15, offset: 6 }">
        <a-button type="primary" @click="onSubmit">
          登陆
        </a-button>
        <a-button style="margin-left: 10px;" @click="resetFields">
          重置
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { toRaw } from 'vue';
import { useRouter } from 'vue-router'
import { useForm } from '/@/components/hooks/FormHook.ts'
import { message } from 'ant-design-vue'
import { HttpMock as Http } from '/@/kits/Http';
import { setCacheVal } from '/@/kits/LocalStore';

export default {
  name:"Login",
  setup(){
    const {form,onSubmit,validateInfos,resetFields} = useMyForm()    

    return {
      labelCol:{span:6},
      wrapperCol:{span:15},
      form,
      onSubmit,
      validateInfos,
      resetFields
    }
  }
}

function useMyForm(){
  let validatePwd = async (rule, value, callback)=>{
      if(value.length <= 3 ){
          return Promise.reject("密码长度太短")
      }else if(value.indexOf(" ") >= 0){
          return Promise.reject("密码格式不正确")
      }else{
          return Promise.resolve()
      }
  }

  const data = {
    name:"",
    pwd:""
  }

  const rules = {
      name:[
        {
          required: true,
          message: '请输入用户名',
        }
      ],
      pwd:[
        { required: true,message: '请输入密码',},
        { validator: validatePwd, trigger: 'blur' },
      ]
  }

  const router = useRouter(); 

  const {form,onSubmit,validateInfos,resetFields} = useForm({
    data,
    rules,
    success:async ()=>{
      try {
        let res = await Http("/login",toRaw(form))
        console.log(res)
        setCacheVal("token",res.data.token)
        setCacheVal("username",res.data.user.username)
        setCacheVal("userid",res.data.user.userid)
        router.push({path:"/main/home"})
        message.success("登陆成功")
      } catch (e) {
        message.error("登陆失败")
      }
    }
  })

  return {
    form,
    onSubmit,
    validateInfos,
    resetFields
  }
}


</script>

<style scoped>
.root {
  height:100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  padding-top:30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 1px 2px 8px #e3e3e3;
  width: 360px;
  height: 220px;
}
</style>