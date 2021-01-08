Page({

  data: {
    searchContent:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      searchContent:options.p
    })
  },
  
})