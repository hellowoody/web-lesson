const LeftCard = {
    props:{
        listData:{
            type:Array,
            default:[]
        }
    },
    setup(props,ctx){
        const checkedList = Vue.ref([])
        const delBtnShow = Vue.ref(false)

        const del = id => {
            ctx.emit("removeitem",id)
        }

        const delBatch = () => {
            ctx.emit("removebatch",checkedList.value)
        }

        Vue.watchEffect(() => {
            console.log(checkedList.value)
            if(checkedList.value.length > 1){
                delBtnShow.value = true
            }else{
                delBtnShow.value = false
            }
        })

        const changeCheckedList = obj => {
            // console.log(obj)
            if(obj.checked){
                checkedList.value.push(obj.id)
            }else{
                checkedList.value = checkedList.value.filter(v => v !== obj.id)
            }
        }

        const edit = item => {
            ctx.emit("edithandle",item)
        }

        return {
            edit,
            del,
            delBatch,
            checkedList,
            delBtnShow,
            changeCheckedList
        }
    },
    template:`
        <div class="card">
            <div style="height:30px;">
                <a v-if="delBtnShow" class="btn btn-warn" href="#" @click="delBatch">批量删除</a>
            </div>
            <list-item v-for="item in listData" :key="item.id">
                <template v-slot:left>
                    <div style="display:flex;align-items:center;">
                        <my-checkbox 
                            @mchandle="changeCheckedList"
                            :itemId="item.id" 
                            :checkedParam="checkedList" />
                        <div style="display:flex;flex-direction:column;margin-left:12px;">
                            <span style="font-weight:bold;">{{item.title}}</span>
                            <span style="font-size:13px;">{{item.content.substring(0,30)+"..."}}</span>
                        </div>
                    </div>
                </template>
                <template v-slot:right>
                    <a class="btn btn-warn" href="#" @click="del(item.id)">删除</a>
                    <a class="btn" href="#" @click="edit(item)">编辑</a>
                </template>
            </list-item>
        </div>
    
    `,
    components:{
        ListItem,
        MyCheckbox
    }
}