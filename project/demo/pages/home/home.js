Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    msg:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(2000)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(3000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
      console.log(4000)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log(5000)
  },
})