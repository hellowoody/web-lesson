Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    msg:""
  },

  test(){
    console.log(this.data.msg)
    this.setData({
      msg:"hello 2021"
    })
  }

})