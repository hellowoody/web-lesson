<template>
  <a-layout>
      <a-layout-header class="header">
          <div>{{title}}</div>
          <div class="header-nav">
              <router-link to="/counter">计步器</router-link>
              <router-link to="/login">登陆</router-link>
          </div>
      </a-layout-header>
      <a-layout-content class="content">
          <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>
          <a-input-search placeholder="需要过滤的内容" v-model="searchContent" enter-button @search="onSearch" />
      </a-layout-footer>
  </a-layout>
</template>

<script>

export default {
  name: 'Notepad',
  data(){
    return {
      title:"单页面记事本应用-Vue",
        
        formData:{
            id:"",
            title:"",
            content:""
        },
        searchContent:"",
        old_list :[]
    }
  },
  methods:{
    sub(){
        console.log("我接受到了子组件的广播")
        this.formData.id = Date.now().toString().substr(-3)
        this.list.push(this.formData)
        this.formData = {
            id:"",
            title:"",
            content:""
        }
    },
    
    update(){
        const flag = this.list.some((item) => {
            return item.id === this.formData.id
        })
        if(flag){
            // todo update
            this.list = this.list.map((item) => {
                if(item.id === this.formData.id){
                    item = this.formData
                }
                return item
            })
        }else{
            alert("该id不存在于左侧列表中，请点击新增按钮进行添加")
        }
    },
    onSearch(){
        console.log(this.searchContent)
        this.list = this.list.filter((item) => {
            if(item.title.indexOf(this.searchContent) < 0 && item.content.indexOf(this.searchContent) < 0  ){
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
.header {
    display:flex;
    justify-content:space-between;
    color:#fff
}

.header-nav {
    width:100px;
    display:flex;
    justify-content:space-between;
}

.content {
    display:flex;
    justify-content: space-between; 
    padding:0px 24px;
    margin-top:24px;
    height: calc(100vh - 64px - 80px - 24px);
}
</style>

