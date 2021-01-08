Page({
  searchInput:"",

  data: {
    searchHistory:[]
  },

  onLoad(){
    this.setData({
      searchHistory:wx.getStorageSync('searchHistory') ? wx.getStorageSync('searchHistory') : []
    })
  },

  goSearch(){
    if (this.searchInput === "") {
      wx.showToast({
        title:"请输入查询内容",
        icon:'none'
      })
    }else{
      const searchHistory = wx.getStorageSync("searchHistory");
      if (searchHistory){
        if (searchHistory.indexOf(this.searchInput) < 0) {
          searchHistory.push(this.searchInput)
          wx.setStorageSync('searchHistory', searchHistory)
        }
      }else{
        wx.setStorageSync('searchHistory', [this.searchInput])
      }
      this.setData({
        searchHistory:wx.getStorageSync('searchHistory') ? wx.getStorageSync('searchHistory') : []
      })
      wx.navigateTo({
        url: '/pages/searchResult/searchResult?p='+this.searchInput
      })
    } 
  },
  
  searchHandle(e){
    this.searchInput = e.detail
  }
  
})