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
    good:{},
    count:1
  },
  onLoad(options){
    console.log(options)
    console.log(list.filter(item => item.id == options.id)[0])
    this.setData({
      good:list.filter(item => item.id == options.id)[0]
    })
  },
  addCart(){

    const cart = wx.getStorageSync('cart') === "" ? [] : wx.getStorageSync('cart') 
    let flag = false
    for(const item of cart){
      if(item.id === this.data.good.id){
        // item.count = item.count + this.data.count
        item.count += this.data.count
        flag = true
        break;
      }
    }
    if(!flag){
      // js 增强语法
      cart.push({
        ...this.data.good,
        count:this.data.count
      })
    }
    wx.setStorageSync('cart', cart)
    wx.showToast({
      title: '加入成功',
      icon:"none"
    })
  },
  decrease(){
    if(this.data.count === 1){
      wx.showToast({
        title: '1为最小值',
        icon:"none"
      })
      return
    }

    this.setData({
      count:this.data.count-1
    })
  },
  increase(){
    if(this.data.count === 9){
      wx.showToast({
        title: '已到达最大购买量',
        icon:"none"
      })
      return
    }
    this.setData({
      count:this.data.count+1
    })
  },
})