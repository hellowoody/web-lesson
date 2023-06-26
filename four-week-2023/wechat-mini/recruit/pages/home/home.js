import {fetch} from "../../utils/http.js"

Page({
  data:{
    tabs:[],
    activeIdx:0,
    userLikeStation:[]
  },
  async onShow(){
    const {data:{list,userLikeStation}} = await fetch("/hometopstation",{openid:wx.getStorageSync('user').openid})
    this.setData({
      tabs:[
        {
          id:1,
          name:"全职",
          active:true,
          list:list.filter(item => item.type === "full-time")
        },
        {
          id:2,
          name:"兼职",
          active:false,
          list:list.filter(item => item.type === "part-time")
        },
      ],
      userLikeStation
    })
  },
  changeTab(e){
    console.log(e.target.dataset.idx)
    let activeIdx = 0
    this.data.tabs = this.data.tabs.map((item,i) => {
      if(item.id === e.target.dataset.idx){
        item.active = true
        activeIdx = i
      }else{
        item.active = false
      }
      return item
    })

    this.setData({
      tabs : this.data.tabs,
      activeIdx
    })
  }
})