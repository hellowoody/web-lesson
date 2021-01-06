Page({

  data: {
    showTarget:"slot",
    activeIndex : 1,
    tabs:[
      {
        id:1,
        name:"类型一",
        isActive:true,
        content:"类型一的内容"
      },
      {
        id:2,
        name:"类型二",
        isActive:false,
        content:"类型二的内容"
      },
    ]
  },

  showComp(e){
    // console.log(e)
    this.setData({
      showTarget : e.target.dataset.name
    })
  }
})