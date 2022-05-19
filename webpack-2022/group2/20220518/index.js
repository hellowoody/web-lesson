// 构造器 
function CarPlugin(options){
    this.wheel = options.wheel
    this.type = options.type

    // 用观察者范式 注册webpack声明周期中的响应事件
    // xxx.on("build",()=>{
    //     // todo
    // })
}

CarPlugin.fourService = {
    address:"天津",
    tel:"21231234",
    site:"www.4s.com"
}

console.log("静态属性:",CarPlugin.fourService)
console.log("普通属性:",CarPlugin.wheel)

const car = new CarPlugin({
    wheel:"马牌",
    type:"电车"
})
console.log("car:",car)
console.log("普通属性:",car.wheel)