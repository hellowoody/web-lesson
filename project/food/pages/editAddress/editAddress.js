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
        ...this.data.userBase,
        name:e.detail.value,
      }
    })
    console.log(this.data.userBase)
  },
  inputHandle2(e){
    console.log(this.data.userBase)
    this.setData({
      // name:e.detail.value
      userBase:{
        ...this.data.userBase,
        tel:e.detail.value,
      }
    })
    console.log(this.data.userBase)
  },
  inputHandle3(e){
    console.log(this.data.userBase)
    this.setData({
      // name:e.detail.value
      userBase:{
        ...this.data.userBase,
        address:e.detail.value,
      }
    })
    console.log(this.data.userBase)
  }
})