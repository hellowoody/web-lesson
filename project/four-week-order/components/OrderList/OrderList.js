import {fetch,assetsUrl} from "../../utils/http.js"

Component({
  data: {
    list:[],
    assetsUrl
  },

  methods: {

  },

  lifetimes:{
    attached(){
      fetch("/order",{
        tokenId:wx.getStorageSync('tokenId')
      }).then(res => {
        // console.log(res)
        const list = res.data.data.map(item => {
          item.createTimeShow = item.createTime.substring(5,10)
          return item
        })
        this.setData({
          list
        })
      }).catch(() => {})
    }
  }
})
