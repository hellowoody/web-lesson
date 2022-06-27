import {fetch} from "../../utils/http.js"
Page({
  data:{
    food:{}
  },
  onLoad(options) {
    console.log(options)
    this.initData(options.id)
  },

  initData(id){
    fetch("/gooddetail",{
      id:parseInt(id,10)
    }).then(res => {
      console.log(res)
      this.setData({
        food:res.data.data
      })
    }).catch(reason => {
      wx.showToast({
        title:reason,
        icon:"none",
        duration:3000
      })
    })
  }

})