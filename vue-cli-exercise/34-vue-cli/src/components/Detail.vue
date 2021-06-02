<template>
    <div class="right-part">
        <a-form-model layout="horizontal" :model="formdata" v-bind="formItemLayout">
            <a-form-model-item label="Id">
                {{formdata.id}}
            </a-form-model-item>
            <a-form-model-item label="标题">
                <a-input v-model="formdata.title" placeholder="请输入title" />
            </a-form-model-item>
            <a-form-model-item label="内容">
                <a-textarea v-model="formdata.content" placeholder="请输入content"  :auto-size="{ minRows: 3, maxRows: 5 }"/>
            </a-form-model-item>
            <a-form-model-item v-bind:wrapper-col="buttonItemLayout.wrapperCol">
                <a-button type="primary" v-on:click="sub">新增</a-button>
                <a-button v-on:click="updateForm">修改</a-button>
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
            buttonItemLayout : {
                wrapperCol: { span: 10, offset: 4 },
            },
            formItemLayout:{
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
            },
            formdata:{

            }
        }
    },
    methods:{
        sub(){
        },
        updateForm(){
        },
        back(){
            this.$router.go(-1)
        }
    }
}
</script>


<style scoped>
.right-part {
    width: 100%;
    background-color: #fff;
    padding:16px;
    box-sizing: border-box;
    border-radius: 16px;
    box-shadow: 0px 2px 8px rgb(10 10 10 / 0.2);
}
</style>