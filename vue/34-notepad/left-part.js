const LeftPart = {
    props:["list"],
    template:`
        <div class="left-part">
            <ul>
                <li v-for="(item,index) in list" v-bind:key="item.id">
                    {{item.id + "-" + item.title}}
                    <a-radio-group >
                        <a-radio-button value="large" @click="del(item.id)">
                            删除
                        </a-radio-button>
                        <a-radio-button value="default" @click="delByIndex(index)">
                            删除(按索引删除)
                        </a-radio-button>
                        <a-radio-button value="small" @click="detail(item)">
                            查看
                        </a-radio-button>
                    </a-radio-group>
                </li>
            </ul>
        </div>
    `,
    methods:{
        del(id){
            /*
                emit  发布-订阅范式，广播
                目的：通过广播的方式触发父组件中某一个方法（sub）
                this.$emit("需要广播通知的事件名称",传递给父组件方法时的参数) 
            */
            this.$emit("on-del",id)
        },
        delByIndex(index){
            this.$emit("on-delbyindex",index)
        },
        detail(item){
            this.$emit("on-detail",item)
        }
    }
}