Page({

  data:{
    activeIndex:0,
    tabs:[
      {
        id:1,
        name:"选项卡1",
        isActive:true,
        content:"内容一内容一内容一内容一内容一内容一内容一内容一"
      },
      {
        id:2,
        name:"选项卡2",
        isActive:false,
        content:"内容二"
      },
      {
        id:3,
        name:"选项卡3",
        isActive:false,
        content:"内容三"
      },
    ]
  },

  changeIndex(e){
    // console.log(e.detail.index)
    this.data.tabs.forEach((item,index) => {
      if(index === e.detail.index ){
        item.isActive = true
      }else{
        item.isActive = false
      }
    })
    this.setData({
      activeIndex:parseInt(e.detail.index,10),
      tabs:this.data.tabs
    })
  }
  
})