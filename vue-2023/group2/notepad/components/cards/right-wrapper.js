const RightWrapper = {
    props:{
        selected:{
            type:Object,
            default:{
                id:"",
                title:"",
                content:""
            },
        }
    },
    setup(props,context){
        console.log(1000000000)
        const subject = Vue.ref({
            id:"",
            title:"",
            content:""
        })

        const add = () => {
            const id = Date.now()
            context.emit("insertdata",{
                id,
                title:subject.value.title,
                content:subject.value.content,
                show:true,
            })
            subject.value.id = id
        }

        // Vue.onUpdated(() => {
        //     subject.value = props.selected
        // })

        Vue.watchEffect(() => {
            console.log("侦听的方式")
            subject.value = props.selected
        })

        const save = () => {
            context.emit("savedata",{...subject.value})
        }

        const reset = () => subject.value = {}

        return {
            add,
            save,
            reset,
            subject
        }
    },
    template:`<div class="card" >
        <div style="display:flex;flex-direction:column;margin-bottom:1rem;">
            <input v-model="subject.title" class="myform-input" />
            <textarea v-model="subject.content" rows="20" class="myform-textarea"/>
        </div>
        <a v-if="subject.id" class="btn" href="#" @click="save">保存</a>
        <a v-else class="btn" href="#" @click="add">新增</a>
        <a class="btn btn-secondary" href="#" @click="reset">重置</a>
    </div>`
}