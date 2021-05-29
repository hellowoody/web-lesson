// const LeftPart = Vue.extend({})
export const LeftPart = {
    props:["listdata"],
    template:`
        <div class="left-part">
            <a-list item-layout="horizontal" :data-source="listdata">
                <a-list-item slot="renderItem" slot-scope="item, index">
                    <a slot="actions" @click="del(index)">删除</a>
                    <a slot="actions" @click="delById(item.id)">删除(id方式删除)</a>
                    <a slot="actions" @click="detail(item)">查看</a>
                    <a-list-item-meta :description="item.content.substr(0,10)+'......'">
                        <div slot="title">{{item.id + "-" + item.title}}</div>
                    </a-list-item-meta>
                </a-list-item>
            </a-list>
        </div>
    `,
    methods:{
        del(index){
            /*
                emit 发布-订阅范式
                第一个参数 事件名称
                第二个参数 触发父组件方法时传的参数
            */
            this.$emit("on-del",index)
        },
        delById(id){
            this.$emit("on-delbyid",id)
        },
        detail(item){
            this.$emit("on-detail",item)
        }
    }
}