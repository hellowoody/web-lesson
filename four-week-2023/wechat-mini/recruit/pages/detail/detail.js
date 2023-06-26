import {fetch} from "../../utils/http.js"

Page({
  data:{
    station:{}
  },
  async onLoad(query){
    console.log(query)
    const res = await fetch("/detail",{id:query.id})
    console.log(res)
    this.setData({
      station:res.data.data
    })
  },
  goChat(){
    wx.navigateTo({
      url:"/pages/chat/chat?openid=" + wx.getStorageSync('user').openid,
    })
  },
})