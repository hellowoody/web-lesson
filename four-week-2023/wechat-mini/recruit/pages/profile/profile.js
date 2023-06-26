import { fetch } from "../../utils/http.js"

Page({
  data:{
    menus:[
      {id:1,name:"投递历史",icon_class:"iconfont icon-daojishi",url:""},
      {id:2,name:"咨询",icon_class:"iconfont icon-chat",url:"/pages/chat/chat?openid=" + wx.getStorageSync('user').openid},
      {id:3,name:"收藏",icon_class:"iconfont icon-aixin",url:""},
      {id:4,name:"已面试记录",icon_class:"iconfont icon-jingliren_o",url:""},
      {id:5,name:"设置",icon_class:"iconfont icon-shezhi",url:""},
    ],
    avatar:"",
    openId:"",
    name:"",
    msg:"",
    msgList:[]
  },
  onLoad(){
    console.log(20000)
    wx.login({
      success: (res) => {
        console.log(res)
        fetch("/wxlogin",{
          code:res.code
        },"GET").then(data => {
          console.log(data)
          if(data.data.code === 1){
            this.setData({
              openId:data.data.data.openid,
              name:data.data.data.name,
              avatar:data.data.data.avatar,
              age:data.data.data.age,
              degree:data.data.data.degree,
              experience:data.data.data.experience,
            })
            wx.setStorageSync('user', data.data.data)
          }else{
            wx.showToast({
              title: '微信登录失败',
              icon:"none"
            })
          }
          
        })
      },
    })
  },
  uploadFile(){
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      async success (res) {
        console.log(res)
        const tempFiles = res.tempFiles
        wx.uploadFile({
          url: 'http://localhost:3000/upload', 
          filePath: tempFiles[0].path,
          name: 'file',     // 后端接口用此属性拿文件
          formData: {
            'openid': wx.getStorageSync('user').openid,
            "a":1
          },
          success (res){
            console.log(res)
            //do something
          }
        })
      }
    })
  },
  uploadAvatar(){
    wx.chooseMessageFile({
      count: 1,
      type: 'image',
      success: async (res) => {
        console.log(res)
        const tempFiles = res.tempFiles
        wx.uploadFile({
          url: 'http://localhost:3000/uploadimage', 
          filePath: tempFiles[0].path,
          name: 'file',     // 后端接口用此属性拿文件
          formData: {
            'openid': wx.getStorageSync('user').openid,
          },
          success:(res) => {
            // console.log(res)
            // console.log(res.data)
            const resData = JSON.parse(res.data)
            // console.log(resData)
            this.setData({
              avatar:resData.data.avatar
            })
            const user = wx.getStorageSync('user')
            user.avatar = resData.data.avatar
            wx.setStorageSync('user', user)
          }
        })
      }
    })
  },
  onPullDownRefresh(){
    // post
  },
  goto(e){
    console.log(e.target.dataset.url)
    wx.navigateTo({
      url: e.target.dataset.url + "?openid=" + wx.getStorageSync('user').openid,
    })
  },
})