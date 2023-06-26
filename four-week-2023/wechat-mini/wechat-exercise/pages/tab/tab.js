Page({
  data:{
    activeIdx: 0,
    tabs:[
      {id:1,name:"选项卡一",content:"11111111111",active:true},
      {id:2,name:"选项卡二",content:"22222222222222",active:false},
      {id:3,name:"选项卡三",content:"333333333",active:false},
    ]
  },
  changeItem(e){
    console.log(e)
    let activeIdx = -1
    const tabs = this.data.tabs.map((item,idx) => {
      if(e.detail.id === item.id){
        item.active = true
        activeIdx = idx
      }else{
        item.active = false
      }
      return item
    })

    this.setData({
      tabs,
      activeIdx
    })
  }
})