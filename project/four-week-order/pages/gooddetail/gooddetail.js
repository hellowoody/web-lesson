import {fetch} from "../../utils/http.js"
Page({
  data:{
    food:{},
    count:1
  },
  onLoad(options) {
    // console.log(options)
    this.initData(options.id)
  },

  initData(id){
    fetch("/gooddetail",{
      id:parseInt(id,10)
    }).then(res => {
      // console.log(res)
      this.setData({
        food:res.data.data
      })
    }).catch(reason => {
      wx.showToast({
        title:reason,
        icon:"none",
        duration:3000
      })
    })
  },
  addCart(){
    fetch("/addcart",{
      tokenId:wx.getStorageSync('tokenId'),
      ...this.data.food,
      count:this.data.count,
    }).then(res => {
      // console.log(res)
      wx.showToast({
        title:res.data.data,
        icon:"none",
        duration:3000
      })
    }).catch(reason => {
      wx.showToast({
        title:reason,
        icon:"none",
        duration:3000
      })
    })
  },
  increase(){
    this.setData({
      count:this.data.count+1
    })
  },
  decrease(){
    this.setData({
      count:this.data.count-1
    })
  },
})