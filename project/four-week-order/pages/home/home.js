import {fetch,assetsUrl} from "../../utils/http.js"

Page({
  data:{
    homeTopList:[],
    homeCards:[],
    assetsUrl
  },
  onLoad(){
    this.initData(false)
  },
  goto(e){
    // console.log(e.target.dataset.url)
    // console.log(e.currentTarget.dataset.url)
    wx.navigateTo({
      url: e.target.dataset.url,
    })
  },
  initData(ifPullAction){
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
      .finally(() => {
        this.stopPullState(ifPullAction)
      })

    fetch("/homecards")
      .then(res => {
        this.setData({
          homeCards:res.data
        })
      })
      .catch(reason => {
        wx.showToast({
          title:reason,
          icon:"none"
        })
      })
      .finally(() => {
        this.stopPullState(ifPullAction)
      })
  },
  onPullDownRefresh(){
    this.initData(true)
  },
  stopPullState(flag){
    if(flag){
      wx.stopPullDownRefresh()
    }
  }
})