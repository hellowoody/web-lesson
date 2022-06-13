// index.js
const app = getApp()
// 小程序中 可以认为Page就是Component
Page({
  onLoad(){
    console.log("index page onload")
    console.log(app)
  },
  data:{
    name:"index page",
    count:0
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
  goto(){
    wx.navigateTo({
      // url:"../demo/demo"   // 相对路径跳转
      url:"/pages/demo/demo"  // 绝对路径跳转
    })
  }
})
