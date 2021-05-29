export const zhangsan = "张三"

export default {
    data(){
        return {
            buttonItemLayout:{
                wrapperCol: { span: 14, offset: 0 }
            }
        }
    },
    props:["formdata"],
    template:`
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
                </a-form-model-item>
            </a-form-model>
        </div>
    `,
    methods:{
        sub(){
            /*
                emit 发布-订阅范式
                第一个参数 事件名称
            */
            this.$emit("add")  
        },
        update(){
            this.$emit("on-update")
        }
    }
}