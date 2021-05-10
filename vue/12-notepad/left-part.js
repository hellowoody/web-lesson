// const LeftPart = Vue.extend({})
const LeftPart = {
    props:["listdata"],
    template:`
        <div class="left-part">
            <ul>
                <li v-for="(item,index) in listdata" :key="index">
                    {{item.id + "-" + item.title}}
                    <button @click="del(index)">删除</button>
                    <button @click="delById(item.id)">删除(id方式删除)</button>
                    <button @click="detail(item)">查看</button>
                </li>
            </ul>
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