import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  // 全局变量/状态 -> data
  state:{
    count:10,
    listTest:[],
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
    ],
    initLoading:false, // 是否第一次
  },
  // 改变 同步处理 -> methods
  mutations:{
    increment(state){
      state.count++
    },
    decrement(state){
      state.count--
    },
    getList(state,list){
      // 禁止有异步操作 (网络请求) 
      // state.listTest = [1,2,3,4,5]
      state.listTest = list
    },
    initListData(state,initData){
      state.listData = initData
    },
    updateIsLoading(state,val){
      state.initLoading = val
    },
    del(state,id){
      state.listData = state.listData.filter(item => item.id === id ? false : true)
    },
    delByIndex(state,index){
      
      state.listData.splice(index,1)
    },
    updateForm(state,obj){
      state.listData.map(function(item){
        return item.id === obj.id ? item = obj : null
      })
    },
    sub(state,obj){
      state.listData.push(obj)
    }
  },
  // 是异步处理的mutation -> methods
  actions:{
    fetchList(content){
      new Promise((reslove) => {
        // setTimeout(callback,duraing) 隔了duraing之后，要出发callback
        setTimeout(()=>{
          reslove([
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
          ])  // 相当于对方兑现了当时承诺
        },2000) // 模拟网络请求的时间差
      }).then((res) => {
          console.log(res) // [1,2,3,4,5]
          // content.commit("getList",res)
          content.commit("initListData",res)
          content.commit("updateIsLoading",false)
      })
    }
  },
  getters:{
    globalNewVal(state){
      return state.count**2
    },
    selected(state){
      return (id) => {
        return state.listData.filter(item => item.id === id)[0]
      }
    }
  }
})

export default store;