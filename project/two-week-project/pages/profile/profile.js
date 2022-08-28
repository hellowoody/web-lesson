Page({

  data: {
    isLogin:false,
    userInfo:{},
    list:[]
  },

  onShow(){
    console.log(wx.getStorageSync('isLogin'))
    const list = wx.getStorageSync('isLogin') ? wx.getStorageSync('order') : []
    list.map(item => {
      item.showTime = item.timestamp.substring(item.timestamp.indexOf("-")+1,item.timestamp.indexOf(" "))
      return item
    })
    this.setData({
      userInfo:wx.getStorageSync('userInfo'),
      isLogin:wx.getStorageSync('isLogin'),
      list
    })
  },

  login(){
    wx.getUserProfile({
      desc: '登陆',
      success: res => {
        // console.log(res)
        const list = wx.getStorageSync('isLogin') ? wx.getStorageSync('order') : []
        list.map(item => {
          item.showTime = item.timestamp.substring(item.timestamp.indexOf("-")+1,item.timestamp.indexOf(" "))
          return item
        })
        this.setData({
          userInfo:res.userInfo,
          isLogin:true,
          list
        })
        wx.setStorageSync('userInfo', res.userInfo)
        wx.setStorageSync('isLogin', true)
      }
    })
  },

  logout(){

    const that = this
    wx.showModal({
      title:"退出登陆",
      content:"客官请留步",
      success:function(res){
        if(res.confirm){
            that.setData({
              isLogin:false,
              userInfo:{},
              list:[]
            })
            wx.removeStorageSync('userInfo')
            wx.removeStorageSync('isLogin')
        }else if(res.cancel){
          console.log("取消")
        }
      }
    })
  }
})