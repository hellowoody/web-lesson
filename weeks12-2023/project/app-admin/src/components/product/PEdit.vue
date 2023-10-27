<template>
    <div style="display: flex;justify-content: space-around;">
        <div class="upload-btn">
            <input class="myfile" type="file" id="fileId" @change="uploadImg">
            <label for="fileId" class="diyfile">+</label>
        </div>
        <div class="show-img" :style="imgStyle"></div>
    </div>
    <a-modal
        title="裁切图片"
        v-model:open="visible"
        @ok="modalOk"
        @cancel="modalCancel"
    >
        <div class="cut-img">
            <img style="width: 100%;" ref="image" :src="cropperImg"/>
        </div>
    </a-modal>
    <a-form
        ref="goodForm"
        :model="form"
        layout="horizontal"
        :rules="rules"
        style="margin-top:50px"
    >
        <a-form-item label="商品名称" name="name">
            <a-input v-model:value="form.name" size="large" placeholder="请输入名称"></a-input>
        </a-form-item>
        <a-form-item label="商品描述" >
            <a-textarea v-model:value="form.gooddesc" size="large" placeholder="请输入描述" :row="3"></a-textarea>
        </a-form-item>
        <a-form-item label="商品价格" name="price">
            <a-input v-model:value="form.price" type="number" size="large" placeholder="请输入价格"></a-input>
        </a-form-item>
        <a-form-item label="商品库存" >
            <a-select v-model:value="form.count">
                <a-select-option value="500">500</a-select-option>
                <a-select-option value="1000">1000</a-select-option>
            </a-select>
        </a-form-item>
        <a-form-item label="商品类型" >
            <a-select v-model:value="form.type">
                <a-select-option value="01">游戏主机</a-select-option>
                <a-select-option value="02">游戏大作</a-select-option>
                <a-select-option value="03">鞋类</a-select-option>
                <a-select-option value="04">潮服</a-select-option>
            </a-select>
        </a-form-item>
        <a-form-item style="margin-top:50px">
            <a-button v-if="form.id === ''" type="primary" @click="sub">新增</a-button>
            <a-button v-else type="primary" @click="sub">修改</a-button>
            <a-button style="margin-left: 8px;" @click="reset">重置/新增</a-button>
        </a-form-item>
    </a-form>
</template>
<script setup>
import { useState } from "@/stores/good"
import {nextTick, ref,getCurrentInstance,computed, reactive,watch,toRaw} from "vue"
import Cropper from "cropperjs"
import "cropperjs/dist/cropper.css"
import {  message } from "ant-design-vue";
import { postFormData } from "@/kits/fetch"


const state = useState()
const instance = getCurrentInstance()
const cropperImg = ref("")
const visible = ref(false)
const form = reactive({
    id:"",
    name:"",
    price:0.00,
    count:0,
    imgpath:"",
    gooddesc:"",
    type:"01",
    imgpath_blob:"",
    imgpath_filename:""
})

const validPrice = (rule,value) => {
    if(value && typeof value === "string" && value.length > 0 &&value > 0){
        return Promise.resolve()
    }else if(value && typeof value === "number" && value > 0){
        return Promise.resolve()
    } else{
        return Promise.reject("请输入正确的价格")
    }
}

const rules = {
    name:[
        {required:true,message:"请输入商品名称",trigger:"blur"}
    ],
    price:[{
        validator:validPrice
    }]
}

watch(() => state.selected,(curr) => {
    form.id = curr.id
    form.name = curr.name
    form.price = curr.price
    form.count = curr.count
    form.type = curr.type
    form.imgpath = curr.imgpath
    form.gooddesc = curr.gooddesc
})

const cropper = {
    value:null
}

const uploadImg = e => {
    const imgFile = e.target.files[0]
    cropperImg.value = URL.createObjectURL(imgFile)
    form.imgpath_filename = imgFile.name
    showModal()
}

const showModal = () => {
    visible.value = true
    // 生命周期 setup 或者 created中 拿到 mounted才能拿到的标签对象
    nextTick(() => {
        const image = instance.refs.image
        cropper.value = new Cropper(image,{
            aspectRatio:16/9,
            ready: () => console.log("cropper.js is ready")
        })
    })
}

const modalOk = () => {
    cropper.value.getCroppedCanvas().toBlob(blob => {
        form.imgpath_blob = blob
        form.imgpath = URL.createObjectURL(blob)
        visible.value = false
    })
    cropper.value.destroy()
}

const modalCancel = () => {
    console.log( cropper.value)
    cropper.value.destroy()
}

const imgStyle = computed(() => {
    return {
        backgroundImage:`url(${form.imgpath})`,
        "background-size": "cover",
    }
})

const sub = async () => {
    const formRef = instance.refs.goodForm
    try {
        await formRef.validate()
        const key = "loading"
        message.loading({
            key,
            content:"正在提交",
        })

        if(form.id === "" && form.imgpath_blob === ""){
            message.warning({
                key,
                content:"新增商品时需要传图片"
            })
            return
        }

        const formData = new FormData()
        if(form.imgpath_blob !== ""){
            formData.append("file",form.imgpath_blob,form.imgpath_filename)
        }
        const formRaw = toRaw(form) 

        for(const key in formRaw){
            if(key.indexOf("_") < 0){
                formData.append(key,formRaw[key])
            }
        }

        const resData = await postFormData("/modifygood",formData)

        if(resData.code === 1){
            message.success({
                key,
                content:resData.msg
            })
            state.refreshCountInc()
        }else{
            message.warning({
                key,
                content:resData.msg
            })
        }
    } catch (e) {
        console.log(e)
    }
}

const reset = () => {
    instance.refs.goodForm.resetFields()
    state.setSelected({
        id:""
    })
}
</script>

<style scoped>
.upload-btn {
    flex:1;
    border: 1px dotted #e5e5e5;
    border-radius: 12px;
    text-align: center;
    margin-right: 24px;
}

.myfile {
    opacity: 0;
    width:0;
    height:0;
}

.diyfile {
    font-size:64px;
    line-height: 200px;
    color:#e5e5e5;
}

.show-img {

    height:200px;
    width: calc(200px / 9 * 16);
    background-color: #e5e5e5;
    border-radius: 12px;
}
</style>