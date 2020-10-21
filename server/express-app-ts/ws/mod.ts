import WebSocket from 'ws';
import http from 'http';
import url from 'url';

const wss = new WebSocket.Server({
    noServer:true
});

const server = http.createServer((req,resp)=>{
  const pathname = req.url
  console.log("http url: ",pathname)
  if(pathname === "/send"){
    // console.log(wss.clients)
    wss.clients.forEach(client=>{
      client.send("服务器主动发送消息！")
    })
  }
  resp.write("服务器主动发送消息！")
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
  const pathname = url.parse(req.url).pathname
  console.log(pathname)
  if (pathname === '/wss') {
    wss.handleUpgrade(req, socket, head, function done(ws) {
      wss.emit('connection', ws, req);
    });
  } 
})

server.listen(8081,()=>console.log("长连接服务启动了..."))