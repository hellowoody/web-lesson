import {fetch,assetsUrl} from "../../utils/http.js"

Page({
  data:{
    homeTopList:[],
    assetsUrl
  },
  onLoad(){
    this.initData()
  },
  goto(e){
    // console.log(e.target.dataset.url)
    // console.log(e.currentTarget.dataset.url)
    wx.navigateTo({
      url: e.target.dataset.url,
    })
  },
  initData(){
    fetch("/hometoplist")
      .then(res => {
        // console.log(res)
        this.setData({
          homeTopList:res.data
        })
      })
      .catch(reason => {
        wx.showToast({
          title:reason,
          icon:"none"
        })
      })
  }
})