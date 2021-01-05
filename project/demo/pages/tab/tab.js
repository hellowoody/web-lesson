// pages/tab/tab.js
Page({

  data: {
    activeIndex : 1
  },

  changeTab(e){
    // console.log(e)
    this.setData({
      activeIndex : e.target.dataset.index
    })
  }
  
})