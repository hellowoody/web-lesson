import { fetch } from "../../utils/http.js"
Page({
  data:{
    user:{}
  },
  async onLoad(query){
    console.log(query)
    const res = await fetch("/getuser",{openid:query.openid})
    // console.log(res)
    this.setData({
      user:res.data.data
    })
  },
  async sub(){
    // console.log(this.data.user)
    const res = await fetch("/updateuser",this.data.user)
    wx.showToast({
      title: res.data.msg,
      icon:"none"
    })
    if(res.data.code === 1){
      wx.navigateBackMiniProgram()
      setTimeout(() => wx.reLaunch({
        url:"/pages/profile/profile"
      }),500)
    }
  },
  changeItem(e){
    // console.log(e.target.dataset.label,e.detail.value)
    switch (e.target.dataset.label) {
      case "name":
        this.setData({
          user:{
            ...this.data.user,
            name:e.detail.value
          }
        })
        break;
      case "experience":
        this.setData({
          user:{
            ...this.data.user,
            experience:e.detail.value
          }
        })
        break;
      case "age":
        this.setData({
          user:{
            ...this.data.user,
            age:e.detail.value
          }
        })
        break;
      case "degree":
        this.setData({
          user:{
            ...this.data.user,
            degree:e.detail.value
          }
        })
        break;
      default:
        break;
    }
  }
})