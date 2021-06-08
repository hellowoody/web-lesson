import Vue from "vue";
import Vuex from "vuex";

/*
  1.$store
*/ 
Vue.use(Vuex);

const store = new Vuex.Store({
  // 全局状态 -》 data
  state:{
    count:10, // 全局状态的变量count 计数器
    dataList:[
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
    ]
  },
  // 转变/改变 -》 methods
  mutations:{
    add(state){
      state.count++ 
    },
    sub(state){
      state.count--
    },
    del(state,index){
      state.dataList.splice(index,1)
    },
    delById(state,id){
      state.dataList = state.dataList.filter(item => item.id === id ? false : true)
    },
    onSearch(state,searchContent){
        state.dataList = state.dataList.filter((item) => {
            if(item.title.indexOf(searchContent) < 0 && item.content.indexOf(searchContent) < 0  ){
                return false
            }else{
                return true
            }
        })
    },
    updateFormdata(state,obj){
      /*
          将本页面的表单更新到数据源
          1.找到数据源 this.$store.state.dataList
          2.获取本页面的表单对象 this.formdata
          3.将第二步更新到第一步
      */
      state.dataList.map(item => {
          if(item.id === obj.id){
              return item = obj
          }
          return 
      })
    },
    subFormdata(state,obj){
      state.dataList.push(obj)
    }
  },
  actions:{

  },
  // computed
  getters:{
    newName(){
      return "1"+"2"  //12
    },
    formdata(state){
      return function(id){
        return state.dataList.filter(item => item.id === id ? true : false )[0]
      }
    }
  }
})

export default store;

