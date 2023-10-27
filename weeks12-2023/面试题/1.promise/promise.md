# Promise

    ```
    console.log(1000)
    new Promise((resolve,reject) => {
        // 同步代码
        // 这个方法里的代码在new Promise构造器调用时，同时被执行
         console.log(2000)
         console.log(3000)
    })
    console.log(4000)

    ```

    ```
    Promise.resolve()

    new Promise((resolve,reject) => {
        resolve()
    })
    ```

# 宏任务 微任务

    宏任务：setTimeout 的异步事件
    微任务：promise 的异步事件

    微任务的优先级高


# 语法

 ```
    // Promise.resolve("ok").then(res => {
    //     return "1"
    // }).then(res => {
    //     return "2"
    // })

    // const p = Promise.resolve("ok")
    // p.then(res => "1")
    // p.then(res => "2")

    // const p1 = Promise.resolve("ok")
    // const p2 = p1.then(res => "1")
    // const p3 = p2.then(res => "1")

 ```

# finally

  - finally可以看作是一个特殊的then()

  - finally()方法不管Promise对象最后的状态如何都会执行
   
  - finally方法的回调函数不接受任何的参数，也就是说你在.finally()函数中是没法知道Promise最终的状态是resolved还是rejected的
   
  - 它最终返回的默认会是一个上一次的Promise对象值，不过如果抛出的是一个异常则返回异常的Promise对象。


