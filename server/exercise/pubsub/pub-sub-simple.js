/*
发布订阅模式 简单场景
模仿js中listener 事件监听
*/


function myEvent(){
    const cache = {}
    const on = (name,callback)=>{
        cache[name] = callback
    }
    const trigger = (name)=>{
        cache[name]()
    }
    return {
        on,
        trigger
    }
}

let e = myEvent()

e.on("clickEvent",()=>console.log("点击事件被触发了"))

e.trigger("clickEvent")





