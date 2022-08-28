const list = [
  {
      "id":1,
      "name":"巨无霸套餐",
      "price":10.0,
      "status":1,
      "type":"hot",
      "img":"/assets/offline/burger.png",
      "category":"01",
      "rating":19,
      "commentNum":20,
      "todayFood":true
  },
  {
      "id":2,
      "name":"麦辣鸡腿汉堡",
      "price":20.0,
      "status":1,
      "type":"normal",
      "img":"/assets/offline/burger.png",
      "category":"01",
      "rating":19,
      "commentNum":20,
      "todayFood":false
      
  },
  {
      "id":3,
      "name":"披萨",
      "price":30.0,
      "status":1,
      "type":"normal",
      "img":"/assets/offline/pizza.png",
      "category":"02",
      "rating":19,
      "commentNum":20,
      "todayFood":true
  },
  {
      "id":4,
      "name":"美式披萨",
      "price":40.0,
      "status":1,
      "type":"hot",
      "img":"/assets/offline/pizza.png",
      "category":"02",
      "rating":19,
      "commentNum":20,
      "todayFood":false
  },
  {
      "id":5,
      "name":"薯条",
      "price":50.0,
      "status":1,
      "type":"hot",
      "img":"/assets/offline/pizza.png",
      "category":"03",
      "rating":19,
      "commentNum":20,
      "todayFood":false
  },
  {
      "id":6,
      "name":"可乐",
      "price":60.0,
      "status":1,
      "type":"normal",
      "img":"/assets/offline/pizza.png",
      "category":"03",
      "rating":19,
      "commentNum":20,
      "todayFood":false
  }
]

Page({
  data:{
    content:"",
    list:[]
  },
  onLoad(options){
    // console.log("入口页面传来的参数:",options)
    this.setData({
      content:options.content
    })
    this.search()
  },
  search(){
    const res = list.filter((item) => {
      if(item.name.indexOf(this.data.content) >= 0 ){
        return true
      }
      return false
    })

    this.setData({
      list: res
    })
  },
  goto(e){
    wx.navigateTo({
      url: e.currentTarget.dataset.url+"?id="+e.currentTarget.dataset.id,
    })
  }
})