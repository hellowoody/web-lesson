<template>
    <div class="list">
        <a-input-search placeholder="请输入需要过滤的内容" v-model="searchContent" enter-button @search="onSearch" />
        <a-button @click="add" type="primary" block style="margin-top:8px;">新增</a-button>
        <div v-if="$store.state.initLoading" style="display:flex;justify-content:center">
            <a-spin />
        </div>
        <a-list v-else item-layout="horizontal" :data-source="$store.state.listData">
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
            searchContent:"",
            listData:[]
        }
    },
    created(){
        // this.$store.state.initLoading ? this.$store.dispatch("fetchList") : null; 
    },
    mounted(){
        // this.$store.dispatch("fetchList");  
    },
    methods:{
        getList(){
            // this.$store.commit("getList") // mutations
            this.$store.dispatch("fetchList") // actions
        },
        del(id){
            this.$store.commit("del",id) // mutation -> 同步方法
            this.$message.success("删除成功",2)
        },
        delByIndex(index){
            this.$store.commit("delByIndex",index)
        },
        detail(obj){
            /*
                通过路由进行跳转
            */
            // console.log(this.$router) // __proto__ 原型
            // console.log(this.$route)
            // this.$router.push({
            //     path:"detail", //跳转的路由
            //     query:{
            //         "formdata":obj
            //     }  //参数
            // })
            this.$router.push({
                path:"detail", //跳转的路由
                query:{
                    id:obj.id
                } 
            })
        },
        add(){
            this.$router.push({
                path:"detail", //跳转的路由
                query:{
                    id:"new"
                } 
            })
        },
        onSearch(){
            console.log(1000,this.searchContent)
            this.listData = this.listData.filter((item) => {
                if(item.title.indexOf(this.searchContent) < 0 && item.content.indexOf(this.searchContent) < 0 ){
                // if(!item.title.includes(this.searchContent) && !item.content.includes(this.searchContent)){
                    return false
                }else{
                    return true
                }
            })
        }
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