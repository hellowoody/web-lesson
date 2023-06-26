let mySocket;
Page({
  data:{
    list:[],
    msg:""
  },
  onLoad(query){
    // console.log(query)
    mySocket = wx.connectSocket({
      url: 'ws://127.0.0.1:3000?id='+query.openid,
      success(){
        console.log("websocket 发起连接")
      },
      fail(e){
        console.log("websocket 发起失败",e)
      }
    })

    mySocket.onOpen((res) => {
      // 表示连接准备好，可以发送数据了。
      console.log("WebSocket 已连接", res);
    });

    mySocket.onMessage((res) => {
      this.data.list.push(res.data)
      this.setData({
        list:this.data.list
      })
      console.log( res);
    });
  },
  send(){
    mySocket.send({
      data:JSON.stringify({
        fromId:"张三",
        toId:"hr",
        content:this.data.msg
      })
    })
  }
})