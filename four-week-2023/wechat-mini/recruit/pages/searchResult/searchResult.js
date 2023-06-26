import {fetch} from "../../utils/http"

const PAGE_SIZE = 3

Page({
  data:{
    searchWord:"",
    list:[],
    userLikeStation:[],
    startIdx:0
  },
  onPullDownRefresh(){
    console.log(1000)
  },
  onLoad(options){
    console.log("LOAD!!!",options)
    this.setData({
      searchWord:options.content
    })
  },
  // onShow(){
  //  fetch("/list").then(res => console.log(res))
  // },
  async onShow(){
    this.search()
  },
  async search(){
    const res = await fetch("/list",{
      content:this.data.searchWord,
      openid:wx.getStorageSync('user').openid,
      pageSize:PAGE_SIZE,
      startIdx:this.data.startIdx
    })
    console.log(res)
    if(res.data.list.length > 0 ){
      this.setData({
        list:this.data.list.concat(res.data.list),
        userLikeStation:res.data.userLikeStation,
        startIdx:this.data.startIdx + res.data.list.length
      })
    }else{
      wx.showToast({
        title: '没有更多数据了...',
        icon:"none"
      })
    }
  },
  async loadmore(){
    this.search()
  }

})