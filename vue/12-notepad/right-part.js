const RightPart = {
    props:["formdata"],
    template:`
        <div class="right-part">
            <span>id:{{formdata.id}}</span>
            <br>
            <input placeholder="请输入title" v-model="formdata.title">
            <br>
            <textarea cols="30" rows="10" placeholder="请输入content" v-model="formdata.content"></textarea>
            <br>
            <button v-on:click="sub">新增</button>
            <button v-on:click="update">修改</button>
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