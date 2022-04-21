/*
    观察者模式 Observer-pattern

    主题（subject） - 观察者（observer）

    通知的方法 emit

    关注的方法 add
*/ 

// 主题
function Subject(){
    this.observers = []
}

Subject.prototype.add = function(observer){
    this.observers.push(observer)
}

Subject.prototype.emit = function(data){
    this.observers.forEach(callback => callback(data))
}   

const subject = new Subject()

subject.add(data => console.log(`张三 收到了主题的新消息:${data}`))
subject.add(data => console.log(`李四 收到了主题的新消息:${data}`))
subject.add(data => console.log(`王武 收到了主题的新消息:${data}`))

subject.emit("五一劳动节又来了")


