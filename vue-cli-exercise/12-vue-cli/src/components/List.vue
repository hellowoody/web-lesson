<template>
    <div class="left-part">
        <a-list item-layout="horizontal" :data-source="list">
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
</template>

<script>
export default {
    name:"LeftCard",
    data(){
        return {
            list:[
                {
                    id:"1",
                    title:"事项1",
                    content:"内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1"
                },
                {
                    id:"2",
                    title:"事项2",
                    content:"内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1"
                },
                {
                    id:"3",
                    title:"事项3",
                    content:"内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1"
                },
            ],
        }
    },
    methods:{
        del(index){
            this.list.splice(index,1)
        },
        delById(id){
            this.list = this.list.filter(item => item.id === id ? false : true)
        },
        detail(item){
            this.$router.push({
                path:"detail"
            })
        },
    }
}
</script>

<style scoped>
.left-part {
    width:100%;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0px 1px 8px rgb(10 10 10 / 0.1);
    padding:16px;
    box-sizing: border-box;
}
</style>