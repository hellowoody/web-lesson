Page({

  goto(e){
    // console.log(e.target.dataset.url)
    // console.log(e.currentTarget.dataset.url)
    wx.navigateTo({
      url: e.target.dataset.url,
    })
  }
})