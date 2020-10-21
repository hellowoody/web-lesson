import WebSocket from 'ws';
import http from 'http';
import url from 'url';

const wss = new WebSocket.Server({
    noServer:true
});

const userClients:any = {}

/*

userClients = {
  "zhangsan":client_ws,
  "lisi":client_ws,
  "wangwu":client_ws,
}

*/

const server = http.createServer((req,resp)=>{
  const pathname = req.url
  console.log("http url: ",pathname)
  if(pathname === "/send"){
    // console.log(wss.clients)

    // wss.clients.forEach(client=>{
    //   client.send("服务器主动发送消息！")
    // })
    if(userClients["wangwu"]){
      userClients["wangwu"].send("王武 给你发消息了")
    }else{
      console.log("没有找到相应的那个人")
    }
    
  }
  resp.end('服务器主动发送消息！')
})

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    if(message =="Hello World!"){
      ws.send("你好 世界!")
    }
  });
// console.log("client connection : ",ws)
  ws.send('后台已经知道连接成功了');
});

server.on("upgrade",function(req, socket, head){
  const {pathname,query} = url.parse(req.url)
  console.log(pathname)
  if (pathname === '/wss') {
    wss.handleUpgrade(req, socket, head, function done(ws) {
      let userid = query === null ? "" : query!.substr(query!.indexOf("=")+1)
      // console.log(userid)
      if(userid !== ""){
        userClients[userid] = ws;
      }else{
        console.log("无用户id链接")
      }
      wss.emit('connection', ws, req);
    });
  } 
})

server.listen(8081,()=>console.log("长连接服务启动了..."))