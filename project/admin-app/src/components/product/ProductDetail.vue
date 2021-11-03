<script setup>
import {reactive,ref,inject,computed,nextTick,watch} from "vue"
import {Gql,Http,ImgUrl} from "@/kits/HttpKit";
import locale from "ant-design-vue/es/date-picker/locale/zh_CN";
import moment from "moment";
import Cropper from "cropperjs";
import {useStore} from "vuex"
import "cropperjs/dist/cropper.css";

const store = useStore();
const message = inject("$message")
const formRef = ref(null);
const uploadRef = ref(null);
const img = ref(null);
const form = reactive({
    id:"",
    name:"",
    price:0.00,
    date1:moment(),
    type:"01",
    imgpath:"",
    imgpath_show:""
})
const visible = ref(false);
const confirmLoading = false;
const destroyOnClose = true;
const cropperImg = ref("")

watch(() => store.state.selectedGood,(curr) => {
    form.id = curr.id
    form.name = curr.name;
    form.price = curr.price;
    form.count = curr.count;
    if(curr.sysdate  === null){
        curr.date1 = moment();
    }else{
        const m = moment();
        const currDate = moment(curr.sysdate);
        form.date1 = m.set(currDate.toObject);
    }
    form.type = curr.type;
    form.imgpath = curr.imgpath ? curr.imgpath.substr(curr.imgpath.lastIndexOf("/")+1) : "";
    form.imgpath_show = curr.imgpath;
})

const validatePrice = (rule,value) => {
    if(!value || value.length <= 0 || value < 0){
        return Promise.reject("请输入正确的价格")
    }else{
        return Promise.resolve()
    }
}
const rules = {
    "name":[{required:true,message:"请输入商品",trigger:"blur"}],
    "price":[{validator:validatePrice}],
    "date1":[{required:true,message:"请选择日期",trigger:"change",type:"object"}]
} 

const onSubmit = () => {
    formRef.value.validate().then(async () => {
        console.log(form)
        const date = form.date1.format("YYYY-MM-DD HH:mm:ss")
        const p = {
            query:`
                mutation {
                    setGood (id:"${form.id}",name:"${form.name}",count:${form.count},price:${form.price},imgpath:"${form.imgpath}",publishDate:"${date}",type:"${form.type}") {
                        id
                    }
                }
            `
        }
        const res = await Gql(p)
        if(res.data.setGood.id && res.data.setGood.id !== ""){
            message.success("保存成功")
        }else{
            message.error("保存失败")
        }
    }).catch((err) => {
        console.log(err)
    })
}
const resetForm = () => formRef.value.resetFields();

const cropper = {
    value:"",
    imgName:""
}
const showModal = (img,imgName) => {
    cropper.imgName = imgName
    visible.value = true;
    // 保证js中一系列的操作，更新页面dom渲染
    nextTick(() => {
        // 使用cropper这个库进行操作
        cropper.value = new Cropper(img.value,{
            viewMode:1,
            aspectRatio:16 / 9,
            ready: () => console.log("cropperjs is ready")
        })
    })
}

const uploadImg = (e) => {
    cropperImg.value = "";
    const imgfile = e.target.files[0]
    cropperImg.value = URL.createObjectURL(imgfile)
    showModal(img,imgfile.name)
}

const ImgStyle = computed(() => {
    if(form.imgpath_show === "") {
        return {}
    }else {
        return {
            backgroundImage:`url(${form.imgpath_show})`,
            backgroundSize:"cover"
        }
    }
})

const handleOk = () => {
    cropper.value.getCroppedCanvas().toBlob(async (blob) => {
        const formData = new FormData();
        formData.append("file",blob,cropper.imgName);
        const res = await Http("/uploadImg",formData)
        if(res.code === 1){
            form.imgpath = res.data.filename
            form.imgpath_show = ImgUrl + res.data.filename
            visible.value = false;
        }else{
            message.error(res.msg)
        }
    })
}

const handleCancel = () => uploadRef.value.value = ""

const resetForInsert = () => store.commit("setSelectedGood",{})
</script>

<template>
    <a-button @click="resetForInsert" block>添加商品</a-button>
    <input type="file" ref="uploadRef" @change="uploadImg" style="margin:16px 0px;"/>
    <div class="show-imgpath" :style="ImgStyle"></div>
    <a-form ref="formRef" :rules="rules" :model="form" layout="vertical">
        <a-form-item label="商品名称" name="name">
            <a-input v-model:value="form.name"></a-input>
        </a-form-item>
        <a-form-item label="商品价格" name="price">
            <a-input type="number" v-model:value="form.price"></a-input>
        </a-form-item>
        <a-form-item label="库存" name="count">
            <a-select v-model:value="form.count" placeholder="请选择默认库存数">
                <a-select-option value="500">500</a-select-option>
                <a-select-option value="1000">1000</a-select-option>
            </a-select>
        </a-form-item>
        <a-form-item label="上架日期" name="date1">
            <a-date-picker 
                v-model:value="form.date1"
                show-time
                type="date"
                placeholder="选择日期"
                style="width:100%;"
                :locale="locale"
            ></a-date-picker>
        </a-form-item>
        <a-form-item>
            <a-radio-group v-model:value="form.type">
                <a-radio value="01">游戏主机</a-radio>
                <a-radio value="02">生活用品</a-radio>
                <a-radio value="03">潮鞋</a-radio>
                <a-radio value="04">潮服</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" @click="onSubmit">保存</a-button>
            <a-button style="margin-left:10px;" @click="resetForm">重置</a-button>
        </a-form-item>
    </a-form>
    <a-modal 
        title="裁切图片"
        v-model:visible="visible"
        :confirm-loading="confirmLoading"
        :destroyOnClose="destroyOnClose"
        @ok="handleOk"
        @cancel="handleCancel"
    >
        <p>裁切你的图片</p>
        <div style="height: 200px;margin:20px;border:dashed #cacaca 1px; text-align: center;">
            <img :src="cropperImg" ref="img" style="max-width:100%;">
        </div>
    </a-modal>
</template>

<style scoped>
.show-imgpath {
    background-color:#e5e5e5;
    border-radius: 12px;
    width:350px;
    height:200px;
    margin-bottom:12px;
}
</style>