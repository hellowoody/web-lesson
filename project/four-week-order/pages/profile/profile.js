Page({
  data:{
    hasUserInfo:false,
    userInfo:{}
  },
  onLoad(){
    this.setData({
      userInfo:wx.getStorageSync('userInfo'),
      hasUserInfo:wx.getStorageSync('hasUserInfo')
    })
  },
  login(){
    wx.getUserProfile({
      desc:"登陆",
      success:res => {
        console.log(res)
        this.setData({
          userInfo:res.userInfo,
          hasUserInfo:true
        })
        wx.setStorageSync('userInfo', res.userInfo)
        wx.setStorageSync('hasUserInfo',true)
      }
    })
  },
  logout(){

    /*
      普通函数/匿名函数 与 箭头函数的区别

      function(){
        this
      }

      () => {
        this
      }
    
    */ 
    const that = this
    wx.showModal({
        title: '退出登陆',
        content: '客官请留步',
        success :function(res){
          if (res.confirm) {
            that.setData({
              userInfo:{},
              hasUserInfo:false
            })
            wx.removeStorageSync('userInfo')
            wx.removeStorageSync('hasUserInfo')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
    })

  //   wx.showModal({
  //     title: '退出登陆',
  //     content: '客官请留步',
  //     success :(res) => {
  //       if (res.confirm) {
  //         this.setData({
  //           userInfo:{},
  //           hasUserInfo:false
  //         })
  //         wx.removeStorageSync('userInfo')
  //         wx.removeStorageSync('hasUserInfo')
  //       } else if (res.cancel) {
  //         console.log('用户点击取消')
  //       }
  //     }
  //   })
  },
  goto(e){
    // console.log(e.target)
    // console.log(e.currentTarget)
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },
})