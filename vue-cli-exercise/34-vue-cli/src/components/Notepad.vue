<template>
  <div>
    <a-layout>
        <a-layout-header class="top-bar">
            <div>{{title}} </div>
            <div class="top-bar-menus">
                <router-link to="/counter">计步器</router-link>
                <router-link to="/login">登陆</router-link>
            </div>
        </a-layout-header>
        <a-layout-content class="content">
            <!-- 二级路由 -->
            <router-view></router-view>
        </a-layout-content>
        <a-layout-footer>
            <a-input-search placeholder="请输入需要过滤的内容" v-model="searchContent" enter-button @search="onSearch" />
        </a-layout-footer>
    </a-layout>
  </div>
</template>
<script>

export default {
  name: 'App',
  data(){
    return {
        title:"vue 记事本练习",
        listData:[],
        formData:{
            id:"",
            title:"",
            content:"",
        },
        searchContent:"",
    }
  },
  methods:{
    
    sub(){
        
        this.formData.id = Date.now().toString().substr(-5)
        this.listData.push(this.formData)
        this.formData = {
            id:"",
            title:"",
            content:""
        }
    },
    updateForm(){
        let flag = this.listData.some((item)=>{
            return item.id === this.formData.id
        })
        if(flag){
            this.listData = this.listData.map((item) => {
                // this -> vue
                if(item.id === this.formData.id){
                    item = this.formData
                }
                return item
            })
        }else{
            alert("该表单的id不存在在原有list中，请点击新增按钮")
        }
        
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
  },
}
</script>

<style scoped>

.top-bar {
    color:#fff;
    display: flex;
    justify-content: space-between;
}

.top-bar-menus {
    width:100px;
    display: flex;
    justify-content: space-between;
}

.content {
    display:flex;
    justify-content: space-between;
    padding:0px 24px;
    box-sizing: border-box;
    margin-top:16px;
    height: calc(100vh - 64px - 80px - 16px);
}
</style>