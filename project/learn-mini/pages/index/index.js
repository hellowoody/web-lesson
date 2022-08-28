// index.js
const app = getApp()

Page({
  onLoad:function(){
    console.log("页面加载",app)
    console.log("获取全局对象",app.abc)
    console.log("获取全局对象",app.globalData.userInfo.name)
  },
  // goto:function(){
  //   console.log(1000)
  // }
  // 增强语法 syntax sugar 语法糖
  goto(){
    console.log(2000)
    wx.navigateTo({
      // url:"../../pages/demo/demo" // 相对路径
      // url:"/pages/demo/demo?参数的名字=参数的值&参数的名字=参数的值"          // 绝对路径
      url:"/pages/demo/demo?id=1&status=01"          // 绝对路径
    })
  }
})
