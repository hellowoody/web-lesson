import WebSocket from 'ws';
import http from 'http';
import url from 'url';

export const wsclients : any = {}

const wsInstance = (server:http.Server)=>{
    const wss = new WebSocket.Server({
        path:"/ws",
        server
    });
    wss.on('connection',(ws,req) => {
        if(req.url){
            const {query} = url.parse(req.url!)
            let userid = query === "" ? "" : query!.substr(query!.indexOf("=")+1)
            console.log(userid)
            wsclients[userid] = ws
        }
        ws.on('message',message => {
            console.log('接收到的消息: %s', message);
            try {
                const m_jsonObj= JSON.parse(message.toString())
                if(m_jsonObj.hasOwnProperty("init")){
                    //第一次连接 先不做处理
                }else{
                    switch (m_jsonObj.to) {
                        case "ALL" :
                            wss.clients.forEach(client=>{
                                client.send(`${m_jsonObj.from === "" ? "匿名" : m_jsonObj.from} 对 ${m_jsonObj.to} 说: ${m_jsonObj.msg}`)
                            })
                            break;
                        default :
                            const msg = {
                                from:m_jsonObj.from ,
                                to:m_jsonObj.to,
                                msg:m_jsonObj.msg,
                            }
                            wsclients[m_jsonObj.to].send(JSON.stringify(msg)) //发给目标对象
                            ws.send(JSON.stringify(msg))     //发送给自己

                    }
                    // if(m_jsonObj.to === "ALL"){
                    //     wss.clients.forEach(client=>{
                    //         client.send(`${m_jsonObj.from === "" ? "匿名" : m_jsonObj.from} 对 ${m_jsonObj.to} 说: ${m_jsonObj.msg}`)
                    //     })
                    // }else{
                    //     wsclients[m_jsonObj.to].send(`${m_jsonObj.from === "" ? "匿名" : m_jsonObj.from} 对 ${m_jsonObj.to} 说: ${m_jsonObj.msg}`) //发给目标对象
                    //     ws.send(`${m_jsonObj.from === "" ? "匿名" : m_jsonObj.from} 对 ${m_jsonObj.to} 说: ${m_jsonObj.msg}`)  //发送给自己
                    // }
                }
            } catch (e) {
                console.log(e)
            }
        })
        ws.on('close',()=>console.log("当前在线人数减少一位."))

    })
}

export default wsInstance