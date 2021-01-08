Page({
  searchInput:"",

  data: {
  },

  goSearch(){
    wx.navigateTo({
      url: '/pages/searchResult/searchResult?p='+this.searchInput
    })
  },
  
  searchHandle(e){
    this.searchInput = e.detail
  }
  
})