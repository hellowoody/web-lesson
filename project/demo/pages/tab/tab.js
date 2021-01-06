// pages/tab/tab.js
Page({

  data: {
    activeIndex : 1,
    tabs:[
      {
        id:1,
        name:"选项卡一",
        isActive:true,
        content:"内容一"
      },
      {
        id:2,
        name:"选项卡二",
        isActive:false,
        content:"内容二"
      },
      {
        id:3,
        name:"选项卡三",
        isActive:false,
        content:"内容三"
      },
      {
        id:4,
        name:"选项卡四",
        isActive:false,
        content:"内容四"
      },
    ],
  },

  handleTabsItemChange(e){
    // console.log(e)
    let {tabs} = this.data
    tabs.forEach(function(item,index){
      return index === e.detail.index-1 ? item.isActive = true : item.isActive = false
    })
    this.setData({
      activeIndex:e.detail.index,
      tabs
    })
  }
  
})