<template>
    <div class="right-part">
        <a-form-model layout="horizontal" :model="formdata" >
            <a-form-model-item label="ID">
                <a-input disabled v-model="formdata.id" />
            </a-form-model-item>
            <a-form-model-item label="标题">
                <a-input v-model="formdata.title" placeholder="请输入title" />
            </a-form-model-item>
            <a-form-model-item label="内容">
                <a-textarea v-model="formdata.content" allow-clear placeholder="请输入内容" />
            </a-form-model-item>
            <a-form-model-item v-bind:wrapper-col="buttonItemLayout.wrapperCol">
                <a-button type="primary" v-on:click="sub">新增</a-button>
                <a-button v-on:click="update">修改</a-button>
                <a-button v-on:click="back">返回</a-button>
            </a-form-model-item>
        </a-form-model>
    </div>
</template>

<script>
export default {
    name:"RightCard",
    data(){
        return {
            buttonItemLayout:{
                wrapperCol: { span: 14, offset: 0 }
            },
            formdata:{}
        }
    },
    methods:{
        sub(){
        },
        update(){
        },
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.right-part {
    width:100%;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0px 1px 8px rgb(10 10 10 / 0.1);
    padding:16px;
    box-sizing: border-box;
}
</style>