import WebSocket from 'ws';

const wss = new WebSocket.Server({ 
    port: 8080 
});

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