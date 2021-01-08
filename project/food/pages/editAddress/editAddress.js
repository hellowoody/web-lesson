// pages/editAddress/editAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    userBase:{
      name:"",
      tel:"",
      address:""
    }
  },

  inputHandle(e){
    console.log(this.data.userBase)
    this.setData({
      // name:e.detail.value
      userBase:{
        name:e.detail.value,
      }
    })
    console.log(this.data.userBase)
  }
})