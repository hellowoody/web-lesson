/*
    Promise 期约 (承诺)

    JS 原本的异步处理方式或是说异步语法太过复杂或不易用

    setTimeout(callback,sleeping)
        setTimeout(callback,sleeping)
            setTimeout(callback,sleeping)

    所以Promise是为了解决上面的问题，而推出的。

    Promise的核心就是维护3种状态的变化

    三个状态：
        Pending:    初始状态，等待期
        Fulfilled:  兑现状态
        Rejected:   拒绝状态，失信状态 

    Promise 构造器
        这个构造器需要传入一个参数，而个参数是一个函数，而这个函数都个名字：执行函数
        重点：执行函数是一个同步函数！！！
        这个执行函数有两个参数
                第一个参数我们习惯命名为：resolve， 而调用这个参数(方法), 将Pending -> Fulfilled
                第二个参数我们习惯命名为：reject，  而调用这个参数(方法), 将Pending -> Rejected
                注意：这两个参数（方法），是排他性的.原因是这个Promise的状态一旦改变就不会再改变

*/

// new是操作符
// Promise是构造器
// function(resolve,reject){} 是执行函数
// p是实例

const p = new Promise(function(resolve,reject){

    if(2>1){
        resolve()  // resolve或者reject 不是break 也不是return
        // todo
        // todo
        // todo
        // todo
        // todo
        // todo
        reject()
    }else{
        reject()
    }
    
})




