import {fetch} from "../../utils/http.js"

Page({
  data:{
    content:"",
    list:[]
  },
  onLoad(options){
    console.log("入口页面传来的参数:",options)
    this.setData({
      content:options.content
    })
    this.search()
  },
  search(){

    fetch("/queryfood",{
      keyword:this.data.content
    }).then((res) => {
      console.log("后端服务接口返回信息：",res)
      this.setData({
        list:res.data
      })
    }).catch(reason => {
      wx.showToast({
        title:reason,
        icon:"none",
        duration:3000
      })
    })
  }
})