import {fetch,assetsUrl} from "../../utils/http.js"

const getTotalPrice = (list) => {
  return list.reduce((acc,item) => {
    if(item.checked === true){
      return acc+item.price*item.count;
    }else{
      return acc;
    }
  },0)
}

Page({
  data:{
    list:[],
    totalPrice:0,
    assetsUrl
  },
  onShow(){
    this.initData(false)
  },
  initData(ifPullAction){
    fetch("/cart",{
      tokenId:wx.getStorageSync('tokenId'),
    }).then(res => {
      // console.log(res)
      const totalPrice = getTotalPrice(res.data.data)
      this.setData({
        list:res.data.data,
        totalPrice
      })
    }).catch(reason => {
      wx.showToast({
        title:reason,
        icon:"none",
        duration:3000
      })
    })
    .finally(() => {
      this.stopPullState(ifPullAction)
    })
  },
  onCount(e){
    // console.log(e)
    if(e.detail.num === 0){
      wx.showModal({
          title: '删除商品',
          content: '您确定移除该商品么？',
          success :res => {
            if (res.confirm) {
              this.data.list = this.data.list.filter(item => item.foodId !== e.detail.foodId)
              const totalPrice = getTotalPrice(this.data.list)
              fetch("/updatecart",{
                tokenId:wx.getStorageSync('tokenId'),
                list:this.data.list
              }).then(res => {
                this.setData({
                  list:this.data.list,
                  totalPrice
                })
              }).catch(reason => {
                wx.showToast({
                  title:reason,
                  icon:"none",
                  duration:3000
                })
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
              return
            }
          }
      })
    }else{
      this.data.list.forEach(item => {
        if(item.foodId === e.detail.foodId){
          item.count = e.detail.num
        }
      })
      const totalPrice = getTotalPrice(this.data.list)
      fetch("/updatecart",{
        tokenId:wx.getStorageSync('tokenId'),
        list:this.data.list
      }).then(res => {
        this.setData({
          list:this.data.list,
          totalPrice
        })
      }).catch(reason => {
        wx.showToast({
          title:reason,
          icon:"none",
          duration:3000
        })
      })
    }
  },
  checkboxChange(e){
    // console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.data.list.forEach(item => {
      item.checked = false
      for(const foodId of e.detail.value){
        const id = parseInt(foodId,10)
        if(item.foodId === id){
          item.checked = true;
          break;
        }
      }
    })
    const totalPrice = getTotalPrice(this.data.list)
    this.setData({
      list:this.data.list,
      totalPrice
    })
  },
  removeAll(){
    wx.showModal({
      title: '清空购物车',
      content: '您确定要移除所有商品么？',
      success :res => {
        if (res.confirm) {
          this.data.list = []
          const totalPrice = getTotalPrice(this.data.list)
          fetch("/updatecart",{
            tokenId:wx.getStorageSync('tokenId'),
            list:this.data.list
          }).then(res => {
            this.setData({
              list:this.data.list,
              totalPrice
            })
          }).catch(reason => {
            wx.showToast({
              title:reason,
              icon:"none",
              duration:3000
            })
          })
        } else if(res.cancel){
          return
        }
      }
    })
  },
  goto(e){
    wx.navigateTo({
      url: e.target.dataset.url,
    })
  },
  onPullDownRefresh(){
    this.initData(true)
  },
  stopPullState(flag){
    if(flag){
      wx.stopPullDownRefresh()
    }
  },
  order(){
    const list = this.data.list.filter(item => item.checked === true)
    if(list.length < 1){
      wx.showToast({
        title: '请选择购买的内容',
        icon:"none"
      })
      return
    }
    fetch("/createorder",{
      tokenId:wx.getStorageSync("tokenId"),
      list:list
    }).then(res => {
      wx.showToast({
        title: res.data.data,
        icon:"none"
      })
      const list_rest = this.data.list.filter(item => item.checked !== true)
      this.setData({
        list:list_rest,
        totalPrice:0,
      })
    }).catch(reason => {
      wx.showToast({
        title:reason,
        icon:"none",
        duration:3000
      })
    })
  }
})