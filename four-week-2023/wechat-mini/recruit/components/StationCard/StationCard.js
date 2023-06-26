import {fetch} from "../../utils/http.js"

Component({
  properties:{
    station:{
      type:Object,
      value:{
        "id":"",
        "station":"",
        "salary":"",
        "position":"",
        "experience":"",
        "degree":"",
        "welfare":[],
        "company":""
      }
    },
    userLikeStation:Array
  },
  attached(){
    console.log(this.data.userLikeStation)
    console.log(this.data.station)
    if(this.data.userLikeStation.indexOf(this.data.station.id) >= 0 ){
      this.setData({
        ifLike:true
      })
    }
  },
  data:{
    ifLike:false
  },
  methods:{
    async likeit(){
      console.log(1000)
      const res = await fetch("/likeit",{
        openid:wx.getStorageSync('user').openid,
        stationid:this.data.station.id
      })
      console.log(res)
      if(res.data.code === 1){
        this.setData({
          ifLike:true
        })
      }
    },
    async unlikeit(){
      const res = await fetch("/unlikeit",{
        openid:wx.getStorageSync('user').openid,
        stationid:this.data.station.id
      })
      console.log(res)
      if(res.data.code === 1){
        this.setData({
          ifLike:false
        })
      }
    },
    goto(e){
      /*
        e.target 手指首先"碰到"/"点击"的标签。
          如果是单标签，那就是它自身
          如果是嵌套的复杂的，那就是"离它最近的"

        e.currentTarget 绑定事件的那个标签
      */ 
      // console.log(e.currentTarget.dataset)
      wx.navigateTo({
        url: '/pages/detail/detail?id='+e.currentTarget.dataset.id,
      })
    }
  }
})