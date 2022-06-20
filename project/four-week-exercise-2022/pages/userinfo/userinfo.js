const app = getApp()

Page({
  onLoad(){
    // console.log(app.globalData)
    this.setData({
      nickname:app.globalData.userInfo.name,
      avatar:app.globalData.userInfo.avatar
    })
  },
  data:{
    nickname:"",
    avatar:""
  },
  getUserProfile(){
    wx.getUserProfile({
      desc: '获取用户信息',
      success: (res) => {
        console.log(res)
        this.setData({
          avatar: res.userInfo.avatarUrl,
          nickname:res.userInfo.nickName
        })
        app.globalData.userInfo.name = res.userInfo.nickName
        app.globalData.userInfo.avatar = res.userInfo.avatarUrl
      }
    })
  }
})