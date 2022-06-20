Page({

  data: {
    content:"",
    searchHistory:[]
  },

  onShow(){
    const history = wx.getStorageSync('history')
    this.setData({
      searchHistory:history,
      content:"",
    })
  },

  changeText(e){
    this.setData({
      content: e.detail.value
    })
  },

  search(e){
    if(this.data.content === ""){
      wx.showToast({
        title: '请输入查询的内容',
        icon:"none",
      })
      return
    }

    const history = wx.getStorageSync('history')
    if(history){
      const index = history.indexOf(this.data.content)
      if(index >= 0) {
        history.splice(index,1)
      }
      history.unshift(this.data.content)
      wx.setStorageSync('history', history)
    }else{
      wx.setStorageSync('history', [this.data.content])
    }

    this.goto(e)

  },

  goto(e){
    wx.navigateTo({
      url: e.target.dataset.url+"?content="+this.data.content,
    })
  },

  clearHistory(){
    wx.removeStorageSync('history')
    this.setData({
      searchHistory:[]
    })
  },

  quickSearch(e){
    this.setData({
      content:e.target.dataset.content
    })

    const history = wx.getStorageSync('history')
    const index = history.indexOf(this.data.content)
    history.splice(index,1)
    history.unshift(this.data.content)
    wx.setStorageSync('history', history)

    this.goto(e)
  }

  
})