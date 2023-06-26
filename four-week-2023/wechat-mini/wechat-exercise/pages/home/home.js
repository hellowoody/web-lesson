Page({
  /**
   * 页面的初始数据
   * 页面“跟踪”的数据
   */
  data: {
    msg:"HELLO HOME"
  },
  update(){
    this.setData({
      msg:"你好 首页"
    })
  },
  goto(p){
    console.log(p)
    wx.navigateTo({
      url: p.detail.url,
    })
  }
})