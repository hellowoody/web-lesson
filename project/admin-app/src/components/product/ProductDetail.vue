<script setup>
import {reactive,ref} from "vue"
import locale from "ant-design-vue/es/date-picker/locale/zh_CN";
import moment from "moment";

const formRef = ref(null);
const form = reactive({
    id:"",
    name:"",
    price:0.00,
    date1:moment(),
    type:"01",
    imgpath:""
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
    formRef.value.validate().then(() => {
        
    }).catch((err) => {
        console.log(err)
    })
}
const resetForm = () => formRef.value.resetFields();
</script>

<template>
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
</template>