
import {format} from "../../utils/formatDate.js"

const getTotalPrice = list => {
  return list.reduce((acc,item) => {
    if(item.checked === true){
      return acc+item.price*item.count
    }else{
      return acc
    } 
  },0)
}

Page({
  data:{
    list:[],
    totalPrice:0
  },

  onShow(){
    const list = wx.getStorageSync('cart') === "" ? [] : wx.getStorageSync('cart')
    this.setData({
      list ,
      totalPrice:getTotalPrice(list)
    })
  },

  onCount(e){
    // console.log(e)
    switch (e.detail.num) {
      case 10:
        wx.showToast({
          title: '超过单品购买上限',
          icon:"none"
        })
        break;
      case 0:
        wx.showModal({
          title:"移除",
          content:"确定要移除该商品么？",
          success:res => {
            if(res.confirm){
              // 处理移除商品
              const cart = wx.getStorageSync('cart')
              const list = cart.filter(item => item.id === e.detail.foodId ? false : true)
              this.setData({
                // 增强语法
                list,
                totalPrice:getTotalPrice(list)
              })
              wx.setStorageSync('cart', list)
            }
          }
        })
        break;
      default:
        this.data.list.forEach(item => {
          if(item.id === e.detail.foodId){
            item.count = e.detail.num
          }
        })
    
        this.setData({
          list:this.data.list,
          totalPrice:getTotalPrice(this.data.list)
        })
        wx.setStorageSync('cart', this.data.list)
        break;
    }
  },

  order(){

    if(this.data.totalPrice === 0){
      wx.showToast({
        title: '请选择一个商品',
        icon:"none"
      })
      return
    }

    const orderList = wx.getStorageSync('order') === "" ? [] : wx.getStorageSync('order')

    const id = Date.now().toString().substr(-6);

    const timestamp = format(new Date()) // yyyy-MM-dd HH:mm:ss
    
    const nickName = wx.getStorageSync('userInfo').nickName

    const status = "创建成功"

    const order = {
      id,
      nickName,
      status,
      timestamp,
      list:this.data.list.filter(item => item.checked == true ? true : false)
    }

    orderList.unshift(order)
    const list = this.data.list.filter(item => item.checked == true ? false : true)
    wx.setStorageSync('order', orderList)
    wx.setStorageSync('cart', list)

    this.setData({
      totalPrice:0,
      list,
    })
  },

  checkboxChange(e){
    // console.log(e.detail.value)
    this.data.list.forEach(item => {
      item.checked = false
      for(const foodId of e.detail.value){
        if(item.id == foodId){
          item.checked = true
          break;
        }
      }
    })

    const totalPrice = getTotalPrice(this.data.list)
    this.setData({
      list:this.data.list,
      totalPrice
    })
  }
})