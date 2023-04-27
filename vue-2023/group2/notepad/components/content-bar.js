const ContentBar = {
    setup(){
        const sty0 = {
            height:"calc(100vh - 5rem - 2rem)",
            padding:"2rem 1rem",
            boxSizing:"border-box",
            background:"#F3F4FD",
        }

        const sty1 = {
            display:"flex",
            gap:"2rem",
        }

        const list = Vue.ref([
            {
                id:1,
                title:"标题1",
                content:"事项1事项1事项1",
                show:true,
            },
            {
                id:2,
                title:"标题2",
                content:"事项2事项2事项2",
                show:true,
            },
            {
                id:3,
                title:"标题3",
                content:"事项3事项3事项3",
                show:true,
            },
        ])

        const selectedItem = Vue.ref({})

        const addItem = item => list.value.push(item)

        const delItem = id => list.value = list.value.filter(item => item.id === id ? false : true )
        
        const delItemBatch = batch => {
            list.value = list.value.filter(item => batch.indexOf(item.id) >= 0 ? false : true)
        }

        const editItem = item => {
            // selectedItem.value = Object.assign({},item) // 把proxy代理的“外衣”脱掉
            selectedItem.value = {...item}                 // 把proxy代理的“外衣”脱掉
        }

        const updateItem = newItem => {
            console.log(newItem)
            list.value = list.value.map(item => {
                if(item.id === newItem.id){
                    return newItem
                }else{
                    return item
                }
            })
        }

        const changeSearchCotnent = e => {
            list.value.forEach(item => {
                if(item.title.indexOf(e.target.value) >= 0 || item.content.indexOf(e.target.value) >= 0 ){
                    item.show = true
                }else{
                    item.show = false
                }
            })
        }

        return {
            selectedItem,
            sty0,
            sty1,
            list,
            addItem,
            delItem,
            delItemBatch,
            editItem,
            updateItem,
            changeSearchCotnent
        }
        
    },
    template:`
        <div :style="sty0">
            <div style="height:60px;">
                <input class="my-search" @input="changeSearchCotnent" />
            </div>
            <div :style="sty1">
                <left-wrapper 
                    :listData="list.filter(v => v.show)" 
                    @deldata="delItem" 
                    @deldatabatch="delItemBatch"
                    @editdata="editItem" 
                />  
                <right-wrapper 
                    @insertdata="addItem" 
                    @savedata="updateItem" 
                    :selected="selectedItem"
                />  
            </div>
        </div> 
    `,
    components:{
        LeftWrapper,
        RightWrapper,
    }
}