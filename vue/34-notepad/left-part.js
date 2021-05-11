const LeftPart = {
    props:["list"],
    template:`
        <div class="left-part">
            <a-list item-layout="horizontal" :data-source="list">
                <a-list-item slot="renderItem" slot-scope="item, index">
                    <a slot="actions" @click="del(item.id)">删除</a>
                    <a slot="actions" @click="delByIndex(index)">删除(按索引删除)</a>
                    <a slot="actions" @click="detail(item)">查看</a>
                    <a-list-item-meta :description="item.content.substr(0,10) + '......' ">
                        <div slot="title" >{{item.id + "-" + item.title}}</div>
                    </a-list-item-meta>
                </a-list-item>
            </a-list>
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