Page({
  goto(e){
    console.log(e)
    wx.navigateTo({
      url:e.target.dataset.url
    })
  }
})