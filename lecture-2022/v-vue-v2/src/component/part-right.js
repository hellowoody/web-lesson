
export default {
    props:["formdata"],
    emits:["on-sub","on-update"],
    setup(props,ctx){

        const sub = () => {
            /*
                emit  观察者模式，广播
                目的：通过广播的方式触发父组件中某一个方法（sub）
                ctx.emit("需要广播通知的事件名称") 
            */
            ctx.emit("on-sub") 
        }
        const updateForm = () => {
            ctx.emit("on-update")
        }
        return {
            sub,
            updateForm
        }
    },
    template:`
        <div class="right-part">
            <a-form layout="horizontal" :model="formdata" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
                <a-form-item label="Id">
                    {{formdata.id}}
                </a-form-item>
                <a-form-item label="标题">
                    <a-input v-model:value="formdata.title" placeholder="请输入title" />
                </a-form-item>
                <a-form-item label="内容">
                    <a-textarea v-model:value="formdata.content" placeholder="请输入content"  :auto-size="{ minRows: 3, maxRows: 5 }"/>
                </a-form-item>
                <a-form-item :wrapper-col="{ offset: 4, span: 20 }">
                    <a-button type="primary" v-on:click="sub">新增</a-button>
                    <a-button v-on:click="updateForm">修改</a-button>
                </a-form-item>
            </a-form>
        </div>
    `,
}