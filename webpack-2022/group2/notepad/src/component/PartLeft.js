export default {
    props:["list"],
    emits:["on-edit","on-del"],
    setup(props,ctx){
        const edit = index => ctx.emit("on-edit",index)

        const del = id => ctx.emit("on-del",id)

        return {
            edit,
            del
        }
    },
    template:`
        <div class="part">
            <a-list :data-source="list">
                <template #renderItem="{ item,index }">
                    <a-list-item v-if="item.show">
                        <a-list-item-meta :description="item.content.substr(0,10) + '......'" >
                            <template #title>{{item.title}}</template>
                        </a-list-item-meta>
                        <template #actions>
                            <a key="edit" @click="edit(index)">编辑</a>
                            <a key="del" style="color:red;" @click="del(item.id)">删除</a>
                        </template>
                    </a-list-item>
                </template>
            </a-list>
        </div>
    `
}