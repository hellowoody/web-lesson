// app.js
App({
  onLaunch:function(){
    console.log("小程序启动了" , this.abc)
  },
  abc:{
    a:1,
    b:2
  },
  globalData:{
    userInfo:{
      name:"zhangsan"
    }
  }
})