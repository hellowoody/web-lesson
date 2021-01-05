// pages/tab/tab.js
Page({

  data: {
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
    activeIndex : 1
  },

  changeTab(e){
    // console.log(e)
    let {tabs} = this.data
    tabs.forEach((item,index) => index===e.target.dataset.index-1 ? item.isActive = true : item.isActive = false
    )
    this.setData({
      activeIndex : e.target.dataset.index,
      tabs
    })
  }
  
})