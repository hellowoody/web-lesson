<template>
  <div>
      <top-bar>
          <div slot="left" @click="back"  class="iconfont icon-back1" style="font-size:24px" ></div>
          <div slot="middle">上传头像</div>
      </top-bar>
      <my-content style="padding:unset">
        <div class="pic">

        </div>
        <div class="btn">
            <a-upload name="file" :data="data" :action="actionpath" @change="handleChange">
                <a-button style="width:300px" > <a-icon type="upload" /> 上传头像</a-button>
            </a-upload>
        </div>
      </my-content>
  </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'
import MyContent from '@/components/content/MyContent'
import {baseUrl} from '@/kits/Http'
import {getCacheVal} from '@/kits/LocalStorage'

export default {
    name:"UploadImg",
    data(){
        return {
            actionpath:baseUrl+"/api/upload",
            data:{
                userid:getCacheVal("userid")
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
        handleChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                this.$message.success(info.file.response.msg);
            } else if (info.file.status === 'error') {
                this.$message.error(info.file.response.msg);
            }
        },
    }
}
</script>

<style scoped>
.pic {
    width:100%;
    height:320px;
    background-color: #e5e5e5;
    margin-top:64px
}

.btn {
    margin-top:64px;
    display:flex;
    justify-content: center;
    padding-left:24px;
    padding-right:24px;
}
</style>