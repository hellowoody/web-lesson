export default {
    props:["formdata"],
    emits:["on-sub","on-update"],
    setup(props,ctx){
        // setup 不能使用this
        const sub = () => ctx.emit("on-sub")

        const update = () => ctx.emit("on-update")

        return {
            sub,
            update
        }
    },
    template:`
        <div class="card">
            <a-form layout="horizontal" :model="formdata" :label-col="{span:4}" :wrapper-col="{span:20}">
                <a-form-item label="Id">
                    {{formdata.id}}
                </a-form-item>
                <a-form-item label="标题">
                    <a-input v-model:value="formdata.title" />
                </a-form-item>
                <a-form-item label="内容">
                    <a-textarea v-model:value="formdata.content" />
                </a-form-item>
                <a-form-item :wrapper-col="{span:20,offset:4}">
                    <a-button type="primary" @click="sub" >新增</a-button>
                    <a-button type="default" @click="update" >修改</a-button>
                </a-form-item>
            </a-form>
        </div>
    `
}