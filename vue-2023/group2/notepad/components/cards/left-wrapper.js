const LeftWrapper = {
    props:{
        listData:{
            type:Array,
            default:[]
        }
    },
    setup(props,ctx){

        const checkedList = Vue.ref([])

        const del = id => {
            ctx.emit("deldata",id)
        }

        const delBatch = () => ctx.emit("deldatabatch",checkedList.value)

       

        const changeCheckedList = obj => {
            if(obj.checked){
                checkedList.value.push(obj.id)
            }else{
                checkedList.value = checkedList.value.filter(id => id !== obj.id)
            }
        }

        // Vue.watchEffect(() => {
        //     console.log(checkedList.value)
        // })
        Vue.watch(() => [...checkedList.value],(curr) => {
            console.log(curr)
        })

        const edit = item => {
            ctx.emit("editdata",item)
        }

        return {
            checkedList,
            del,
            delBatch,
            edit,
            changeCheckedList
        }
    },
    template:`<div class="card" >
        <div style="height:2rem;">
            <a v-if="checkedList.length > 1" @click="delBatch" href="#" class="btn btn-warn">批量删除</a>
        </div>
        <list-item v-for="item in listData" :key="item.id">
            <template v-slot:left>
                <div style="display:flex;align-items:center;">
                    <my-checkbox 
                        :itemId="item.id"  
                        @mcchange="changeCheckedList"
                    />
                    <div style="display:flex;flex-direction:column;margin-left:12px;">
                        <span style="font-weight:bold;">{{item.title}}</span>
                        <span style="font-size:13px;">{{item.content.substring(0,20)+"..."}}</span>
                    </div>
                </div>
            </template>
            <template v-slot:right>
                <a class="btn btn-warn" @click="del(item.id)" href="#">删除</a>
                <a class="btn" href="#" @click="edit(item)">编辑</a>
            </template>
        </list-item>
    </div>`,
    components:{
        ListItem,
        MyCheckbox
    }
}