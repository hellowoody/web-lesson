Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    msg:"",
    age:10,
    flag:false
  },

  test(e){
    console.log(e)
    this.setData({
      flag:!this.data.flag
    })
    // console.log(this.data.msg)
    // this.setData({
    //   msg:"hello 2021"
    // })
  }

})