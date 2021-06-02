<template>
    <div class="list">
        <a-list item-layout="horizontal" :data-source="listData">
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
</template>

<script>
export default {
    name:"LeftCard",
    data(){
        return {
            listData:[
                {
                    show:true,
                    id:"1",
                    title:"事项1",
                    content:"事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容"
                },
                {
                    id:"2",
                    title:"事项2",
                    content:"事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容"
                },
                {
                    id:"3",
                    title:"事项3",
                    content:"事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容事项1内容"
                },
            ]
        }
    },
    methods:{
        del(id){
            this.listData = this.listData.filter(item => item.id === id ? false : true)
        },
        delByIndex(index){
            this.listData.splice(index,1)
        },
        detail(obj){
            /*
                通过路由进行跳转
            */
            this.$router.push({path:"detail"})
        },
    }
}
</script>

<style scoped>
.list {
    width: 100%;
    background-color: #fff;
    padding:16px;
    box-sizing: border-box;
    border-radius: 16px;
    box-shadow: 0px 2px 8px rgb(10 10 10 / 0.2);
}
</style>