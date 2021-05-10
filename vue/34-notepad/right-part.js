const RightPart = {
    data(){
        return {
            list:[]
        }
    },
    props:["formdata"],
    template:`
        <div class="right-part">
            <span>id:{{formdata.id}}</span>
            <br>
            <input placeholder="请输入title" v-model="formdata.title">
            <br>
            <textarea cols="50" rows="10" placeholder="请输入content" v-model="formdata.content"></textarea>
            <br>
            <a-button type="primary" v-on:click="sub">新增</a-button>
            <a-button v-on:click="sub">修改</a-button>
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