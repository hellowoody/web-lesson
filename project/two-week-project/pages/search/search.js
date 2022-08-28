Page({
  data:{
    content:"",
    searchHistory:[]
  },
  onShow(){
    const history = wx.getStorageSync('history')
    this.setData({
      searchHistory:history,
      content:""
    })
  },
  goto(e){
    wx.navigateTo({
      url: e.target.dataset.url+"?content="+this.data.content,
    })
  },

  search(e){
    if(this.data.content === ""){
      wx.showToast({
        title: '请输入查询的内容',
        icon: "none"
      })
      return 
    }
    // todo 
    const history = wx.getStorageSync('history')
    if(history){
      const index = history.indexOf(this.data.content)
      if(index >= 0 ){
        history.splice(index,1)
      }
      history.unshift(this.data.content)
      wx.setStorageSync('history', history)
    }else{
      // 第一次使用
      wx.setStorageSync('history', [this.data.content])
    }
    this.goto(e)
  },

  clear(){
    wx.removeStorageSync('history')
    this.setData({
      searchHistory:[]
    })
  }
})