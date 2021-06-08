<template>
    <div class="left-part">
        <a-input-search placeholder="需要过滤的内容" v-model="searchContent" enter-button @search="onSearch" />
        <a-button type="primary" block style="margin-top:8px;" @click="add">新增</a-button>
        <a-list item-layout="horizontal" :data-source="$store.state.dataList">
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
    name:"List",
    data(){
        return {
            list:[],
            searchContent:"",
        }
    },
    methods:{
        del(index){
            this.$store.commit("del",index)
            this.$message.success("删除成功",1)
        },
        delById(id){
            this.$store.commit("delById",id)
            this.$message.success("删除成功（by id）",1)
        },
        add(){
            this.$router.push({
                path:"detail",
                // query:{
                //     // formdata:item
                //     // id:item.id
                // }
            })
        },
        detail(item){
            // console.log(this.$router)
            // console.log(this.$route)
            // this.$router.push({
            //     name:"detailname",
            //     params:{
            //         a:1,
            //         b:2
            //     }
            // })
            this.$router.push({
                path:"detail",
                query:{
                    // formdata:item
                    id:item.id
                }
            })
        },
        onSearch(){
            this.$store.commit("onSearch",this.searchContent)
        }
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