// 构造器
function CarPlugin(configs){
    this.wheel = configs.wheel
    this.type = configs.type

    /*
        伪代码
        xxx.on("声明周期事件名字",()=>{
            //todo code
        })
    */
}

CarPlugin.fourService = {
    address:"某某街道",
    site:"www.4s.com",
}

console.log("静态属性:",CarPlugin.fourService)
console.log("普通属性:",CarPlugin.wheel)

const car = new CarPlugin({
    wheel:"马牌",
    type:"电车"
})

console.log(car)
console.log("普通属性:",car.wheel)