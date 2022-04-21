/*
    观察者范式

    主题 (subject)  -  观察者 (observer)

    emitt
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

subject.add(data => console.log(`观察者1 收到了关注主题的新消息:${data}`))
subject.add(data => console.log(`观察者2 收到了关注主题的新消息:${data}`))
subject.add(data => console.log(`观察者3 收到了关注主题的新消息:${data}`))

subject.emit("五一劳动节又来了")
