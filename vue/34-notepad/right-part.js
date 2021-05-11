const RightPart = {
    data(){
        return {
            buttonItemLayout : {
                wrapperCol: { span: 10, offset: 4 },
            },
            formItemLayout:{
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
            }
        }
    },
    props:["formdata"],
    template:`
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
                </a-form-model-item>
            </a-form-model>
        </div>
    `,
    methods:{
        sub(){
            /*
                emit  发布-订阅范式，广播
                目的：通过广播的方式触发父组件中某一个方法（sub）
                this.$emit("需要广播通知的事件名称") 
            */
            this.$emit("on-sub") 
        },
        updateForm(){
            this.$emit("on-update")
        }
    }
}