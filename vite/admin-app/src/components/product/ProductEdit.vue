<template>
  <a-button  block>添加新的商品</a-button>
  <input type="file" id="uploadimg" @change="uploadImg" style="margin-top:16px;"/>
  <div class="show-imgpath" :style="ImgStyle"></div>
  <a-form style="margin-top:24px;" :model="form" layout="vertical">
    <a-form-item label="商品名称" v-bind="validateInfos.name">
      <a-input v-model:value="form.name" />
    </a-form-item>
    <a-form-item label="商品价格" v-bind="validateInfos.price">
      <a-input type="number" v-model:value="form.price" />
    </a-form-item>
    <a-form-item label="库存">
      <a-select v-model:value="form.count" placeholder="请选择默认库存数">
        <a-select-option value="500">
          500
        </a-select-option>
        <a-select-option value="1000">
          1000
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="上架日期" v-bind="validateInfos.date">
      <a-date-picker
        v-model:value="form.date"
        show-time
        type="date"
        placeholder="选择日期"
        style="width: 100%;"
        :locale="locale"
      />
    </a-form-item>
    <a-form-item label="商品类型">
      <a-radio-group v-model:value="form.type">
        <a-radio value="01">
          游戏主机
        </a-radio>
        <a-radio value="02">
          游戏大作  
        </a-radio>
        <a-radio value="03">
          鞋类 
        </a-radio>
        <a-radio value="06">
          潮服 
        </a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="商品描述" v-bind="validateInfos.desc">
      <a-textarea v-model:value="form.desc"  />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" @click="onSubmit">
        保存
      </a-button>
      <a-button style="margin-left: 10px;" @click="resetFields">
        重置
      </a-button>
    </a-form-item>
  </a-form>
  <a-modal
      title="Title"
      v-model:visible="visible"
      :confirm-loading="confirmLoading"
      :destroyOnClose="destroyOnClose"
      @ok="handleOk"
    >
      <p>{{ ModalText }}</p>
      <div style=" height:200px; margin: 20px; border: dashed #cacaca 1px; text-align: center;">
        <img :src="cropperImg" style="max-width: 100%" ref="img">
      </div>
    </a-modal>
</template>

<script>
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import moment from 'moment';
import { useForm } from '/@/components/hooks/FormHook.ts'
import { reactive, ref, toRaw, toRefs,onMounted, nextTick, computed } from 'vue';
import {Http,HttpGql,UploadUrl} from '/@/kits/Http'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'
import { message } from 'ant-design-vue'

export default {
    name:"ProductEdit",
    setup(){
      
      const {form,onSubmit,validateInfos,resetFields,ImgStyle} = useMyForm()   
      const {stateModal,handleOk,showModal} = useModal(form)
      const {img,state,uploadImg} = useUpload(showModal)
      
      return {
        locale,
        form,
        onSubmit,
        validateInfos,
        resetFields,
        ImgStyle,
        uploadImg,
        img,
        handleOk,
        showModal,
        ...toRefs(state),
        ...toRefs(stateModal)
      }
    }
}

function useMyForm(){
  const data = {
    name: '',
    price: 0.00,
    count:500,
    date: moment(),
    type: "01",
    desc: '',
    imgpath:'',
    imgpath_show:''
  }

  let validatePrice = async (rule, value, callback)=>{
      if(!value || value.length<=0){
          return Promise.reject("请输入价钱")
      }else{
          return Promise.resolve()
      }
  }

  const rules = {
      name:[
        { required: true,message: '请输入商品名称',}
      ],
      price:[
        { validator:validatePrice }
      ],
      date:[
        {required: true,message: '请选择日期'}
      ],
      desc:[
        { required: true,message: '请输入描述',}
      ]
  }


  const {form,onSubmit,validateInfos,resetFields} = useForm({
    data,
    rules,
    success:async ()=>{
      // console.log(toRaw(form).date.format("YYYY-MM-DD HH:mm:ss"))
      const f = toRaw(form)
      const date = f.date.format("YYYY-MM-DD HH:mm:ss")
      const p = {
        query:`
          mutation {
            createGood(name:"${f.name}",price:${f.price},count:${f.count},type:"${f.type}",desc:"${f.desc}",imgpath:"${f.imgpath}",publishDate:"${date}"){
              id
            }
          }
        `
      }
      const res = await HttpGql(p)
      if(res.data.createGood.id && res.data.createGood.id !== ""){
        message.success("新增成功")
      }else{
        message.error("新增失败")
      }
      console.log(res)
    }
  })

  const ImgStyle = computed(()=>form.imgpath_show === '' ? {} : {
    backgroundImage:"url("+form.imgpath_show+")",
    backgroundSize: "cover"
  })

  return {
    form,
    onSubmit,
    validateInfos,
    resetFields,
    ImgStyle,
  }
}

function useUpload(showModal){
  const img = ref(null)
  const state = reactive({
    cropperImg:"",
    imgName:"",
    cropper:null
  })
  
  const uploadImg  = e => {
    state.cropperImg = ""
    const imgfile = e.target.files[0]
    state.cropperImg = URL.createObjectURL(imgfile)
    state.imgName = imgfile.name
    showModal(img,state.imgName)
  }

  return {
    state,
    uploadImg,
    img
  }
}

function useModal(form){
  const stateModal = reactive({
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
    destroyOnClose:true,
  })
  const cropper = reactive({
    value:null,
    imgName:"",
  })
  const handleOk = ()=>{
    //post 上传
    // const base64url = cropper.value.getCroppedCanvas().toDataURL('image/png')
    // console.log(base64url)
    cropper.value.getCroppedCanvas().toBlob(async (blob)=>{
      const formData = new FormData()
      formData.append('file', blob,cropper.imgName);
      // formData.append('title',cropper.imgName)
      const res = await Http("/upload",formData)
      form.imgpath = res.data.filename
      form.imgpath_show = UploadUrl + res.data.filename
      console.log(res)
    })
  //   本地下载  
  //   cropper.value.getCroppedCanvas().toBlob((blob)=>{
  //     const href = window.URL.createObjectURL(blob);
  //     const downloadElement = document.createElement('a');
  //     downloadElement.href = href;
  //     downloadElement.download = cropper.imgName
  //     document.body.appendChild(downloadElement);
  //     downloadElement.click();
  // 　　 document.body.removeChild(downloadElement);
  // 　　 window.URL.revokeObjectURL(href); 
  //   })
    stateModal.visible = false;
  }

  const showModal = (img,imgName)=>{
    // console.log(10000,img.value)
    cropper.imgName = imgName
    stateModal.visible = true;
    nextTick(()=>{
      cropper.value = new Cropper(img.value, {
          viewMode: 1,
          aspectRatio: 16 / 9,
          ready:()=>console.log("cropperJs is ready")
      })
    })
  }

  return {
    stateModal,
    handleOk,
    showModal,
  }
}

</script>

<style scoped>

.ant-btn {
  border-radius: 8px !important;
}

.ant-form >>> .ant-input {
  border-radius: 8px !important;
}

.ant-select >>> .ant-select-selection  {
  border-radius: 8px !important;
}

.show-imgpath {
  background-color:#e5e5e5;
  border-radius: 12px;
  width:350px;
  height:197px;
  margin-top:12px;
}

</style>
