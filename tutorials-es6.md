# "ES6"语法

## 1.导入导出

    ```
    import xxx from 'xxx'

    export  //一个文件可以多次调用

    export default  //一个文件只能调用一次
    ```

## 2.箭头函数-arrow funtion

    ```

    const foo = () => {
        console.log("hello woody")
    }

    const foo = () => console.log("hello woody")

    const foo = (msg) => console.log(msg)

    const foo = msg => console.log(msg) 

    ```
## 3.Proxy代理

 - 语法
    
    ```
    const p = new Proxy(target, handler)
    ```

- 参数

    - target：要使用 Proxy 包装的目标对象（可以是对象类型，比方原生数组，函数，甚至另一个代理，但是不能是字面量）。

    - handler：一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。

- handler 对象的方法

    handler 对象是一个容纳一批特定属性的占位符对象。它包含有 Proxy 的各个捕获器（trap）。
    所有的捕捉器是可选的。如果没有定义某个捕捉器，那么就会保留源对象的默认行为。

    - handler.get() 属性读取操作的捕捉器。
    - handler.set() 属性设置操作的捕捉器。
    - handler.getPrototypeOf() Object.getPrototypeOf 方法的捕捉器。
    - handler.setPrototypeOf() Object.setPrototypeOf 方法的捕捉器。
    - handler.isExtensible() Object.isExtensible 方法的捕捉器。
    - handler.preventExtensions()  Object.preventExtensions 方法的捕捉器。
    - handler.getOwnPropertyDescriptor()  Object.getOwnPropertyDescriptor 方法的捕捉器。
    - handler.defineProperty() Object.defineProperty 方法的捕捉器。
    - handler.has() in 操作符的捕捉器。
    - handler.deleteProperty()  delete 操作符的捕捉器。
    - handler.ownKeys() Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的捕捉器。
    - handler.apply() 函数调用操作的捕捉器。
    - handler.construct() new 操作符的捕捉器。

- 使用proxy可以自定义set，get方法

    ```
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8"></meta>
        <meta content="width=device-width,initial-scale=1" name="viewport">
        <title>proxy 代理demo</title>
      </head>
      <body>
            <input id="inputid" ><button onclick="p()">将左侧的内容用proxy代理</button>
            <br/>
            <button onclick="get()">获取被代理的值</button>
            <br/>
            <input id="newval" ><button onclick="set()">将左侧的内容设置为新值</button>
      </body>
    </html>
    <script>
    function proxyObj(target){
        return new Proxy(target,{
            get(obj,prop){
                console.log(obj,prop) //每次获取属性 进行一次打印
                return obj[prop]
            },
            set(obj, prop, value){
                console.log("this is set method")
                // console.log(obj,prop,value)
                obj[prop] = value
                return
            },
        })
    }
    let obj = {}
    let obj_proxy
    function p(){
        obj.value = document.getElementById("inputid").value  // 注意proxy 只能代理object类型
        obj_proxy = proxyObj(obj)
        console.log("代理成功")
    }

    function get(){
        console.log(obj_proxy.value)
    }

    function set(){
        obj_proxy.value = document.getElementById("newval").value
    }

    </script>
    ```
- 使用proxy实现双向绑定

    ```
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8"></meta>
        <meta content="width=device-width,initial-scale=1" name="viewport">
        <title>proxy 双向绑定</title>
      </head>
      <body>
            <input id="inputid" oninput="onHandle(this)">
            <br/>
            <div id="showdiv"></div>
      </body>
    </html>
    <script>
    function proxyObj(target){
        return new Proxy(target,{
            get(obj,prop){
                return obj[prop]
            },
            set(obj, prop, value){
                obj[prop] = value
                document.getElementById("showdiv").innerText = obj[prop] 
                return
            },
        })
    }

    let obj = {
        value:"hello world"
    }

    let obj_proxy = proxyObj(obj)

    ;(function(){
        document.getElementById("showdiv").innerText = obj_proxy.value
    })()

    function onHandle(e){
        obj_proxy.value = e.value
    }

    </script>
    ```

## 4.计算型属性名(ES6)

   如果你需要将一个计算表达式作为一个键名称，那么刚刚描述的 myObject[..] 属性访问语法是十分有用的，比如 myObject[prefix + name]。但是当使用字面对象语法声明对象时则没有什么帮助。
   ES6 加入了计算型属性名，在一个字面对象声明的键名称位置，你可以指定一个表达式，用 [ ] 括起来：
   ```
   var prefix = "foo";

    var myObject = {
        [prefix + "bar"]: "hello",
        [prefix + "baz"]: "world"
    };

    myObject["foobar"]; // hello
    myObject["foobaz"]; // world
    
   ```
   计算型属性名的最常见用法，可能是用于 ES6 的 Symbol。
   ```
   let data = {
        a:1,
        b:2
    }

    const setValByKeyFromData = function(key,val){
        data = {
        ...data,
        [key]:val
        }
    }
    console.log(data)
    setValByKeyFromData('a',10)
    console.log(data)
   ```

## 5.Promise

    Promise 对象用于表示一个异步操作的最终完成 (或失败), 及其结果值.
    Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由JavaScript引擎提供，不用自己部署。
      resolve作用是将Promise对象状态由“未完成”变为“成功”，也就是Pending -> Fulfilled，在异步操作成功时调用，并将异步操作的结果作为参数传递出去；而reject函数则是将Promise对象状态由“未完成”变为“失败”，也就是Pending -> Rejected，在异步操作失败时调用，并将异步操作的结果作为参数传递出去。

    ```
    const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 300);
    });

    promise1.then((value) => {
    console.log(value);
    // expected output: "foo"
    });

    console.log(promise1);
    ```

    ![image](https://mdn.mozillademos.org/files/8633/promises.png)

    一个 Promise有以下几种状态: 
    - pending: 初始状态，既不是成功，也不是失败状态。
    - fulfilled: 意味着操作成功完成。
    - rejected: 意味着操作失败。

    pending 状态的 Promise 对象可能会变为fulfilled 状态并传递一个值给相应的状态处理方法，也可能变为失败状态（rejected）并传递失败信息。当其中任一种情况出现时，Promise 对象的 then 方法绑定的处理方法（handlers ）就会被调用（then方法包含两个参数：onfulfilled 和 onrejected，它们都是 Function 类型。当Promise状态为fulfilled时，调用 then 的 onfulfilled 方法，当Promise状态为rejected时，调用 then 的 onrejected 方法， 所以在异步操作的完成和绑定处理方法之间不存在竞争）。

    因为 Promise.prototype.then 和  Promise.prototype.catch 方法返回promise 对象， 所以它们可以被链式调用。
    then()方法用于指定当前实例状态发生改变时的回调函数。它返回一个新的Promise实例。
    ```
    Promise.prototype.then(onFulfilled, onRejected);
    ```