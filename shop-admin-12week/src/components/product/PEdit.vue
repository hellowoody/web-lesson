<script setup>
import { reactive,ref,computed,getCurrentInstance,nextTick,watch,inject,toRaw } from "vue"
import { useState } from "@/store/product"
import { restHttp,formDataHttp } from "@/kits/HttpKit"
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import dayjs from 'dayjs';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

const dateFormat = "YYYY-MM-DD HH:mm:ss"
const initForm = () => {
    return {
        id:"",
        name:"",
        price:0.00,
        imgpath:"",
        count:0,
        status:0,
        status_show:false,
        date_show:dayjs(dayjs(), dateFormat),
        date:dayjs().format(dateFormat),
        gooddesc:"",
        type:"01",
        imgpath_filename:"",
        imgpath_blob:""
    }
} 
const form = reactive(initForm())
const visible = ref(false)
const cropperImg = ref("")
const productState = useState()
const instance = getCurrentInstance()
const message = inject("$message")

const validPrice = (rule,value) => {
    if(value && value.length > 0 && value > 0 ){
        return Promise.resolve()
    }else{
        return Promise.reject("请输入正确的价格")
    }
}

const rules = {
    name:[
        {required:true,message:"请输入账号",trigger:"blur"},        // 必填的校验规则
    ],
    price:[{validator:validPrice}]
}

watch(() => productState.selected,(curr) => {
    form.id = curr.id
    form.name = curr.name
    form.price = curr.price
    form.imgpath = curr.imgpath
    form.count = curr.count
    form.gooddesc = curr.gooddesc
    form.type = curr.type.id
    form.status = curr.status >= 0 ? curr.status : 1
    form.status_show = form.status === 1 ? true : false
    form.date = curr.date ? curr.date : dayjs().format(dateFormat)
    form.date_show = dayjs(form.date, dateFormat)
})

const uploadImg = e => {
    const imgFile = e.target.files[0]
    cropperImg.value = URL.createObjectURL(imgFile)
    form.imgpath_filename = imgFile.name
    showModal()
}
const cropper = {
    value:null
}
const showModal = () => {
    // 浏览器会将Modal动态插入到现有页面，而这一步也是异步（宏任务）
    visible.value = true
    // nexTick 将参数作为微任务插入到event-loop队列中
    // 通俗解释 让参数中的代码 从同步变为异步，目的是延后执行
    // 为什么不用setTimeout 而使用nextTick，是因为setTimeout是宏任务，会将回调函数错后太晚执行
    nextTick(() => {
        const image = instance.refs.image
        // console.log(image)
        cropper.value = new Cropper(image, {
            aspectRatio: 16 / 9,
            ready:() => console.log("cropperjs is ready!")
        });
    })
}

const imgStyle = computed(() => {
    return {
        backgroundImage:`url(${form.imgpath})`,
        "background-size": "contain"
    }
})

const modalOk = () => {
    cropper.value.getCroppedCanvas().toBlob((blob) => {
        form.imgpath_blob = blob
        form.imgpath = URL.createObjectURL(blob)
        // console.log("form:",form)
        visible.value = false
    })
    cropper.value.destroy()
}

// 点取消按钮或点模态窗口的空白处都会触发cancel事件
const modalCancel = () => {
    cropper.value.destroy()
}

const sub = async () => {
    const formRef = instance.refs.productForm
    try {
        await formRef.validate()
        const key = "loading"
        message.loading({
            key,
            content:"操作中..."
        })

        const formData = new FormData()
        formData.append('file', form.imgpath_blob,form.imgpath_filename);
        const formObj = toRaw(form)
        for(const key in formObj){
            if(key.indexOf("_") < 0 ){
                if(key === "status"){
                    formData.append(key, form.status_show ? 1 : 0);
                }else{
                    formData.append(key, formObj[key]);
                }
            }
        }
        const resData = await formDataHttp("/api/modifyproduct",formData)
        console.log("resData:",resData)
        if(resData.code === 1){
            message.success({
                key,
                content:resData.msg,
                duration:2
            }) 
            // 修改 store 中的 selected ！！！！！
        }else{
            message.error({
                key,
                content:resData.msg,
                duration:2
            })
        }
    } catch (e) {
        console.log(3000,e)
    }
}

const resetForm = () => {
    instance.refs.productForm.resetFields()
    productState.setSelected(initForm())
}

const dateChange = (obj) => {
    // console.log(obj.format(dateFormat))
    form.date = obj.format(dateFormat)
}

</script>
<template>
    <div style="display:flex;justify-content: space-between;">
        <div class="upload-btn">
            <input id="fileId" class="myfile" type="file" @change="uploadImg"/>
            <label for="fileId" class="diyfile">+</label>
        </div>
        <div class="show-img" :style="imgStyle"></div>
    </div>
    <a-form 
        ref="productForm"
        :model="form" 
        layout="horizontal" 
        style="margin-top:50px;"
        :rules="rules"
    >
        <a-form-item label="商品名称" name="name">
            <a-input v-model:value="form.name" size="large" placeholder="请输入名称"></a-input>
        </a-form-item>
        <a-form-item label="商品价格" name="price">
            <a-input v-model:value="form.price" type="number"  size="large" placeholder="请输入价格"></a-input>
        </a-form-item>
        <a-form-item label="商品库存" >
            <a-select v-model:value="form.count" >
                <a-select-option value="500">500</a-select-option>
                <a-select-option value="1000">1000</a-select-option>
            </a-select>
        </a-form-item>
        <a-form-item label="商品类型" >
            <a-radio-group v-model:value="form.type">
                <a-radio value="01">游戏主机</a-radio>
                <a-radio value="02">游戏大作</a-radio>
                <a-radio value="03">鞋类</a-radio>
                <a-radio value="04">潮服</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item label="商品状态" >
            <a-switch v-model:checked="form.status_show" checked-children="上架" un-checked-children="下架" />
        </a-form-item>
        <a-form-item label="上架日期" >
            <a-date-picker 
                v-model:value="form.date_show" 
                placeholder="选择日期"
                :locale="locale"
                :format="dateFormat"
                style="width:100%;"
                @change="dateChange"
            />
        </a-form-item>
        <a-form-item label="商品描述" >
            <a-textarea v-model:value="form.gooddesc" placeholder="请填写商品描述" :rows="3" />
        </a-form-item>

        <a-form-item style="margin-top:45px;" >
            <a-button v-if="form.id === ''" type="primary" @click="sub" >新增</a-button>
            <a-button v-else type="primary" @click="sub" >修改</a-button>
            <a-button style="margin-left:8px;"  @click="resetForm">重置/新增</a-button>
        </a-form-item>
    </a-form>
    <a-modal 
        v-model:visible="visible" 
        title="裁切图片" 
        @ok="modalOk" 
        @cancel="modalCancel"
    >
        <div class="cut-img">
            <img style="width:100%;" ref="image" id="image" :src="cropperImg" />
        </div>
    </a-modal>
</template>

<style scoped>
.show-img {
    flex:2;
    height:200px;
    background-color: #e5e5e5;
    border-radius: 12px;

}

.upload-btn {
    flex:1;
    border:1px dotted #e5e5e5;
    border-radius: 15px;
    text-align: center;
    margin-right:24px;
}

.myfile {
    opacity: 0;
    width:0;
    height:0;
}
.diyfile {
    display: inline-block;
    border-radius: 12px;
    line-height: 200px;
    color:#e5e5e5;
    font-size: 64px;
}

.cut-img {
    height:200px;
    border:1px dashed #cacaca;

}
</style>