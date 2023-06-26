Component({
  options:{
    multipleSlots:true,
    statusBarHeight:0,
    menuHeight:0
  },
  created(){
    const that = this
    wx.getSystemInfoAsync({
      success(res) {
        console.log(res)
        that.setData({
          statusBarHeight:res.statusBarHeight,
          menuHeight:wx.getMenuButtonBoundingClientRect().bottom
        })
      }
    }) 
    
  }
})