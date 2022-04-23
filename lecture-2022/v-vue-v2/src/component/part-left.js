export const PartLeft = {
    props:["list"],
    emits:["on-del","on-delbyindex","on-detail"],
    setup(props,ctx){

        const del = id => {
            /*
                emit  观察者范式，广播
                目的：通过广播的方式触发父组件中某一个方法（sub）
                ctx.emit("需要广播通知的事件名称",传递给父组件方法时的参数) 
            */
            ctx.emit("on-del",id)
        }
        const delByIndex = index => {
            ctx.emit("on-delbyindex",index)
        }
        const detail = item => {
            ctx.emit("on-detail",item)
        }

        return {
            del,
            delByIndex,
            detail,
        }
    },
    template:`
        <div class="left-part">
            <a-list item-layout="horizontal" :data-source="list">
                <template #renderItem="{item,index}">
                    <a-list-item>
                        <a slot="actions" @click="del(item.id)">删除</a>
                        <a slot="actions" @click="delByIndex(index)">删除(按索引删除)</a>
                        <a slot="actions" @click="detail(item)">查看</a>
                        <a-list-item-meta :description="item.title + '-' + item.content.substr(0,10) + '......' ">
                        </a-list-item-meta>
                    </a-list-item>
                </template>
            </a-list>
        </div>
    `
}