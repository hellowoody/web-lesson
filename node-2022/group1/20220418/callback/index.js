// 闭包

// function closure(){
//     let msg = ""
//     const inner = () => {
//         console.log(msg)
//     }
//     return inner
// }

// 声明时
function myEvent(msg,callback){
    this.name = "myEvent"
    this.sum = (a,b) => a+b
    this.args = arguments
    // this 是声明时的作用域变量
    callback(this)
}

// 调用时
myEvent.call({},"hello",function(a){console.log(a)})

/*
    将一个函数当作参数传入某一个函数
    callback优点：可以在调用时 获取到历史某一时刻的值
            缺点: 滥用/乱用回调函数（闭包），导致内存不足

*/ 
