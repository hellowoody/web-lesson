Page({
  data:{
    searchContent:"",
    searchHistory:[]
  },
  onShow(){
    // console.log(wx.getStorageSync('searchHistory'))
    this.setData({
      searchHistory:wx.getStorageSync('searchHistory')
    })
  },
  search(){
    if(this.data.searchContent === ""){
      wx.showToast({
        title: '请输入要搜索的内容',
        icon:"none",
        duration:2000
      })
      return false
    }
    const searchHistory = wx.getStorageSync('searchHistory')
    if(searchHistory && searchHistory.length > 0){
      const idx = searchHistory.indexOf(this.data.searchContent)
      if(idx >= 0){
        searchHistory.splice(idx,1)
      }
      searchHistory.unshift(this.data.searchContent)
      wx.setStorageSync('searchHistory',searchHistory)
    }else{
      wx.setStorageSync('searchHistory', [this.data.searchContent])
    }
    wx.navigateTo({
      url: '/pages/searchResult/searchResult?content='+this.data.searchContent,
    })
  },
  clearHistory(){
    wx.removeStorageSync('searchHistory')
    this.setData({
      searchHistory:[]
    })
  },
  quickSearch(e){
    // console.log(e.target.dataset.content)
    wx.navigateTo({
      url: '/pages/searchResult/searchResult?content='+e.target.dataset.content,
    })
  }
})