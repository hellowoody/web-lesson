Page({
  data:{
    tabList:[
      {
        id:1,
        name:"选项卡1",
        content:"内容一内容一内容一内容一内容一内容一内容一",
        isActive:true,
      },
      {
        id:2,
        name:"选项卡2",
        content:"内容二",
        isActive:false,
      },
      {
        id:3,
        name:"选项卡3",
        content:"内容三",
        isActive:false,
      },
    ],
    activeIndex:0
  },
  changeTab(e){
    // console.log(1000,e.detail.index)
    this.data.tabList.forEach((item,index) => {
      if(index === e.detail.index){
        item.isActive = true
      }else{
        item.isActive = false
      }
    })

    this.setData({
      tabList:this.data.tabList,
      activeIndex:e.detail.index
    })
  }
})