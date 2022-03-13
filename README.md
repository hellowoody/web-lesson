# Node.js

## 安装

 - 官方下载地址：https://nodejs.org/zh-cn/

 - 下载LTS （长期维护版本）

 - 安装目录放在非中文不含空格的目录即可

## 什么是I/O操作

 - Input/Output (输入/输出) 简称I/O

 - 输入/输出一般指的的是访问磁盘或网络，注意访问内存不算I/O !

 - I/O操作是计算机操作中速度最慢的一类

 - I/O操作一般不太占CPU资源

## 工作原理

 - 市面上大部分编程语言对I/O操作都是阻塞的，下面以网络请求为例

    ![image](./assets/imgs/sync_io.png)


 - Node.js的I/O操作是异步的，或者说Node.js的I/O操作是非阻塞的，下面还是以网络请求为例

    ![image](./assets/imgs/async_io.png)

    ```
    //上图的伪代码实现，尝试体会
    //这种方式叫做busy-waiting

    resources = [socketA,socketB,socketC]

    while(! resources.isEmpty()){
        for(resource of resources){
            //尝试读取
            data = resource.read()
            if(data === NO_DATA_AVAILABLE){
                //目前没有数据可以读取
                continue
            }

            if(data === RESOURCE_CLOSED){
                //资源已关闭，把它从列表中移除
                resources.remove(i)
            }else{
                //收到了数据，处理该数据
                consumeData(data)
            }
        }
    }
    ```

 - 事件多路分离

    上面的busy-waiting绝对不是处理非阻塞资源的理想方式，好在目前大多数操作系统，都提供了一种原生机制，能够高效处理并发式的非阻塞资源。这指的就是同步事件多路分离器(synchronus event demultiplexer)。
    下面使用事件多路分离技术实现刚才的busy-waiting方案,注意是伪代码实现。

    ```

    resources = [socketA,socketB,socketC]

    // 注意： demultiplexer.watch(resources) 是同步阻塞的，这是操作系统支持的
    while(events = demultiplexer.watch(resources)){
        // 事件轮询 event-loop
        for(event of events){
            // 这项读取操作绝不会阻塞，他总是能返回数据
            data = event.resource.read()
            if(data === RESOURCE_CLOSED){
                //资源已关闭，把它从列表中移除
                demultiplexer.unwatch(event.resource)
            }else{
                //收到了数据，处理该数据
                consumeData(data)
            }
        }
    }

    ```
 - 事件轮询 Event-loop

    下面的图是解释在Node.js中如何实现事件轮询的，同时也解释了如何与事件多路分离相配合

    ![image](./assets//imgs//eventloop.png)


## Node.js的宏观结构

 - 结构图
   
   ![image](./assets//imgs/nodeskelton.png)

## 开始使用(创建项目)

 > 打开终端

 > 通过cd命令进入你要创建项目的目录

 > npm init 或者 npm init -y

 > 执行上述命令会自动生成package.json文件

## 模块系统

 - revealing module模块（闭包-立即执行函数）

    典型的例子如Jquery

    ```
    const myModule = (function(){
        const _foo = () => {}
        const _bar = []

        const exported = {
            foo:_foo,
            bar:_bar
        }

        return exported
    })()

    console.log(myModule)
    console.log(myModule._bar,myModule.bar)
    ```

 - CommonJS

    CommonJs是首个内置于Node.js平台的模块系统。

    - require 导入

        自己实现require

        ```
        function loadModule(filename,module,require){
            const wrappedSrc = 
            `
            (function(module,exports,require){
                ${fs.readFileSync(filename,"utf8")}
            })(module,module.exports.require)
            `
            eval(wrappedSrc)
        }

        function require(moduleName){
            console.log("require invoked for module:${moduleName}")
            const id = require.resolve(moduleName)
            if(require.cache[id]){
                return require.cache[id].exports
            }
            //模块的元数据
            const module = {
                exports:{},
                id
            }
            //更新缓存
            require.cache[id] = module

            //载入模块
            loadModule(id,module,require)
            //返回导出的变量
            return module.exports
        }

        require.cache = {}

        require.resolve = (moduleName) => {
            /*
                根据moduleName解析出完整的模块id
                这块是require解决“依赖地狱”的核心
            */
        }

        ```

    - exports 与 module.exports 导出

        许多刚接触Node.js的开发者，经常搞不清exports 和 module.exports之间的区别。

        ```
        //正确写法
        exports.hello = () => {
            console.log("hello")
        }

        //错误写法
        exports =  () => {
            console.log("hello")
        }

        ```

        ```
        module.exports = () => {
            console.log("hello")
        }
        ```
     
    
    - CommonJS如何处理“依赖地狱”情况

        ![image](./assets/imgs/commonjs-dependencyhell01.png)

        ```
        //a.js

        exports.loaded = false
        const b = require("./b")
        module.exports = {
            b,
            loaded:true
        }

        ```

        ```
        //b.js
        exports.loaded = false
        const a = requre("./a")
        module.exports = {
            a,
            loaded:true
        }
        ```

        ```
        //问题:下面打印的结果是什么

        const a = require("/a")
        const b = require("/b")
        console.log("a->",JSON.stringify(a,null,2))
        console.log("b->",JSON.stringify(b,null,2))  
        ```

        ```
        //打印结果
        a-> {
            loaded:true,
            b:{
                loaded:true,
                a:{
                    loaded:false
                }
            }
        }

        b-> {
            loaded:true,
            a:{
                loaded:false
            }
        }
        ```

        图解

        ![image](./assets/imgs/commonjs-dependencyhell02.png)


        总结：虽然CommonJS可以支持“依赖地狱”的情况，但是运行的结果取决于加载的顺序，这对于大型项目有一定的影响。

 - ESM

    ECMAScript模块也叫作ES模块，或简称为ESM。ESM的语法相当简洁，它也支持循环依赖，而且能够异步加载模块（CommonJS的加载是同步的）。
    ESM与CommonJS的一项重要的区别，在于ES模块是静态的（static），也就是说，引入这种模块的那些语句，必须写在最顶层，而且要置于控制语句之外。
    另外，受引用的模块只能使用常量字符串，而不能依赖那种需要在运行期动态求值的表达式。

    比如，我们不能用下面这种方式来引入ES模块

    ```
    if(condition){
        import module1 from 'module1'
    }else{
        import module2 from 'module2'
    }
    ```

    与ES模块相比，之前讲的CommonJS模块，则可以根据条件来引入

    ```
    let module = null
    if(condition){
        module = require("module1")
    }else{
        module = require("module2")
    }
    ```

    这种看似过于严格的ESM规则，其实可以实现CommonJS无法实现的功能，比如优化代码的tree shaking。

    - 在Node.js中如何使用

        Node.js平台中默认会将.js后缀结尾的文件，当成CommonJS语法所写的文件。因此，如果你直接在.js文件中使用ESM语法是会报错的。
        有两种办法，让Node.js解释器把模块当成ESM，而不是CommonJS

        > 把模块文件的后缀名改成.mjs

        > 给最近的上级package.json文件添加名为“type”的字段，并将字段值设为“module”

    - 导出命令 export

        ```
        // a.js
        export const msg = "hello node";

        export const log = str => console.log(str);
        ```

    - 引入命令 import

        ```
        // b.js
        import {msg,log} from "./a.js";

        import {msg,log as myLog} from "./a.js";

        import * as A from "./a.js";
        ```

    - 默认导出  export default

        和CommonJS的module.exports类似，ESM也有只公布一个对象的特性，叫做默认导出 export default。
        一个文件中可以有多个export，但只能有一个default export。

        ```
        // a.js
        export default {
            a:1,
            b:2
        }
        ```

        ```
        // b.js
        import aModule from "./a.js"

        console.log(aModule.a)
        console.log(aModule.b)
        ```
  

    - 模块加载过程

        这个过程可以细分成三个阶段

        - 第一阶段构造[Construction，也叫做刨析（Parsing）]

            寻找所有的引入语句，并递归地从相关文件里加载每个模块内容。

        - 第二阶段实例化（Instantiation）

            针对每个导出的实体，在内存中保留一个带名称的引用，但暂且不给他赋值。另外，还要针对所有的import语句及export语句创建引用，以记录他们之间的依赖关系。这一阶段不执行任何JavaScript代码。

        - 第三阶段执行（Evaluation）

            到了这一阶段，Node.JS终于可以开始执行代码了，这样能够让早前已经实例化的那些实体，获得实际的取值。在这一阶段，Node.JS可以从入口点开始，顺畅地往下执行，因为其中有待解析的那些地方，已经全部解析清楚了。

        简单的说，第一阶段的任务是找到依赖图之中所有的点，第二阶段的任务是在有依赖关系的点之间创建路径，第三阶段则是按照正确的顺序遍历这些路径。

    - 解析循环依赖

        ![image](./assets/imgs/commonjs-dependencyhell01.png)

        ```
        //a.js
        import * as bModule from "./b.js";
        export let loaded = false;
        export const b = bModule
        loaded = true
        ```

        ```
        //b.js
        import * as aModule from "./a.js";
        export let loaded = false;
        export const a = aModule;
        loaded = true;
        ```

        ```
        //main.js
        import * as a from "./a.js";
        import * as b from "./b.js";
        console.log("a->",a)
        console.log("b->",b)
        ```

        ```
        //输出

        a -> <ref *1>[Module]{
            b:[Module]{a:[Circular*1],loaded:true},
            loaded:true
        }

        b -> <ref *1>[Module]{
            a:[Module]{b:[Circular*1],loaded:true},
            loaded:true
        }
        ```

        ![image](./assets/imgs/esm-dependencyhell01.png)

        ![image](./assets/imgs/esm-dependencyhell02.png)

        ![image](./assets/imgs/esm-dependencyhell03.png)

## 正则表达式Regex

 - 声明

    > let expression = /pattern/flags;

    > let expression = new RegExp(pattern,flags)
    ```
    let pattern1 = /at/g
    console.log(pattern1)
    let pattern2 = new RegExg("at","g")
    console.log(pattern2)
    ```
- 使用

    - exec

        调用者：正则表达式

        ```
        let pattern = /o/g;
        console.log(pattern.exec("hello world"));
        console.log(pattern.exec("hello world"));
        ```

    - test

        调用者：正则表达式
        返回布尔值：true匹配成功，false匹配失败

        ```
        let pattern = /o/g
        console.log(pattern.test("hello world"))
        console.log(pattern.test("hello world"))
        ```

    - match

        调用者：字符串

        ```
        let pattern = /o/g
        console.log("hello world".match(pattern))
        ```

## 核心模块

 - 全局变量

    JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。在浏览器 JavaScript 中，通常 window 是全局对象，而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global对象的属性。我们在 Node.js 中能够直接访问到对象通常都是 global 的属性，如 console、process 等。

    - process

        process 是一个全局变量，即 global 对象的属性。它用于描述当前 Node.js 进程状态的对象，提供了一个与操作系统的简单接口。通常在你写本地命令行程序的时候，少不了要和它打交道。下面将会介绍 process 对象的一些最常用的成员方法。

        - process.argv是命令行参数数组，第一个元素是 node，第二个元素是脚本文件名，从第三个元素开始每个元素是一个运行参数。

            ```
            
            node argv.js 1991 name=byvoid --v "Carbo Kuo" 

            console.log(process.argv); 

            [ 'node', 
            '/home/byvoid/argv.js', 
            '1991', 
            'name=byvoid', 
            '--v', 
            'Carbo Kuo' ]
            ```
        - process.stdout是标准输出流，通常我们使用的 console.log() 向标准输出打印字符，而 process.stdout.write() 函数提供了更底层的接口。

            ```
            process.stdout.write("1000\n")
            ```

        - process.stdin是标准输入流

            初始时它是被暂停的，要想从标准输入读取数据，你必须恢复流，并手动编写流的事件响应函数。

            ```
            process.stdin.resume(); 
            process.stdin.on('data', function(data) { 
                process.stdout.write('read from console: ' + data.toString()); 
            });
            ```
    

    - console
  
        console 用于提供控制台标准输出，它是由 Internet Explorer 的 JScript 引擎提供的调试工具，后来逐渐成为浏览器的事实标准。Node.js 沿用了这个标准，提供与习惯行为一致的console 对象，用于向标准输出流（stdout）或标准错误流（stderr）输出字符。

       > console.log()

       > console.error()

       > console.trace()

 - 文件系统 fs

    fs 模块是文件操作的封装，它提供了文件的读取、写入、更名、删除、遍历目录、链接等 POSIX 文件系统操作。与其他模块不同的是，fs 模块中所有的操作都提供了异步的和同步的两个版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的fs.readFileSync()。我们以几个函数为代表，介绍 fs 常用的功能，并列出 fs 所有函数的定义和功能。

    - fs.readFile 

        fs.readFile(filename,[encoding],[callback(err,data)])是最简单的读取文件的函数。它接受一个必选参数 filename，表示要读取的文件名。第二个参数 encoding是可选的，表示文件的字符编码。callback 是回调函数，用于接收文件的内容。如果不指定 encoding，则 callback 就是第二个参数。回调函数提供两个参数 err 和 data，err 表示有没有错误发生，data 是文件内容。如果指定了 encoding，data 是一个解析后的字符串，否则 data 将会是以 Buffer 形式表示的二进制数据。

        例如以下程序，我们从 content.txt 中读取数据，但不指定编码：

        ```
        fs.readFile('content.txt', function(err, data) { 
            if (err) { 
                console.error(err); 
            } else { 
                console.log(data); 
            } 
        });
        ```

        假设 content.txt 中的内容是 UTF-8 编码的 Text 文本文件示例，运行结果如下：

        ```
        <Buffer 54 65 78 74 20 e6 96 87 e6 9c ac e6 96 87 e4 bb b6 e7 a4 ba e4 be 8b>
        ```

        这个程序以二进制的模式读取了文件的内容，data 的值是 Buffer 对象。如果我们给fs.readFile 的 encoding 指定编码：

        ```
        var fs = require('fs'); 
        fs.readFile('content.txt', 'utf-8', function(err, data) { 
            if (err) { 
                console.error(err); 
            } else { 
                console.log(data); 
            } 
        });
        ```

        那么运行结果则是：

        ```
        Text 文本文件示例
        ```

        当读取文件出现错误时，err 将会是 Error 对象。如果 content.txt 不存在，运行前面的代码则会出现以下结果：

        ```
        { [Error: ENOENT, no such file or directory 'content.txt'] errno: 34, code: 'ENOENT', path: 'content.txt' }
        ```
    
    - fs.readFileSync
        fs.readFileSync(filename, [encoding])是 fs.readFile 同步的版本。它接受的参数和 fs.readFile 相同，而读取到的文件内容会以函数返回值的形式返回。如果有错误发生，fs 将会抛出异常，你需要使用 try 和 catch 捕捉并处理异常。

    - fs.open

        fs.open(path, flags, [mode], [callback(err, fd)])是 POSIX open 函数的封装，与 C 语言标准库中的 fopen 函数类似。它接受两个必选参数，path 为文件的路径，flags 可以是以下值。

        > r ：以读取模式打开文件。

        > r+ ：以读写模式打开文件。

        > w ：以写入模式打开文件，如果文件不存在则创建。

        > w+ ：以读写模式打开文件，如果文件不存在则创建。

        > a ：以追加模式打开文件，如果文件不存在则创建。

        > a+ ：以读取追加模式打开文件，如果文件不存在则创建。

        mode 参数用于创建文件时给文件指定权限，默认是 0666。回调函数将会传递一个文件描述符 fd。
    
    - fs.read

        fs.read(fd, buffer, offset, length, position, [callback(err, bytesRead, buffer)])是 POSIX read 函数的封装，相比 fs.readFile 提供了更底层的接口。fs.read的功能是从指定的文件描述符 fd 中读取数据并写入 buffer 指向的缓冲区对象。offset 是buffer 的写入偏移量。length 是要从文件中读取的字节数。position 是文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。回调函数传递bytesRead 和 buffer，分别表示读取的字节数和缓冲区对象。

        以下是一个使用 fs.open 和 fs.read 的示例。

        ```
        var fs = require('fs'); 
        fs.open('content.txt', 'r', function(err, fd) { 
            if (err) { 
                console.error(err); 
                return; 
            } 
        
            var buf = new Buffer(8); 
            fs.read(fd, buf, 0, 8, null, function(err, bytesRead, buffer) { 
                if (err) { 
                    console.error(err); 
                    return; 
                } 
            
                console.log('bytesRead: ' + bytesRead); 
                console.log(buffer); 
            }) 
        });
        ```

        运行结果则是：

        ```
        bytesRead: 8 
        <Buffer 54 65 78 74 20 e6 96 87>
        ```

        一般来说，除非必要，否则不要使用这种方式读取文件，因为它要求你手动管理缓冲区和文件指针，尤其是在你不知道文件大小的时候，这将会是一件很麻烦的事情。

    - 其他方法

        ![image](./assets/imgs/fs.png)

## 回调和事件

 - 回调Callback

    - 闭包（closure）

        通过闭包，我们可以引用某个函数在刚刚创建的时候所处的那套环境。这意味着，我们可以把程序请求执行异步操作时所处的情境（context，也叫做上下文）保留起来，无论系统以后在什么时间与什么场合触发回调，我们都能得知程序当初发起这项异步操作时的情况。

    - continuation-passing风格（CPS）

        CPS是一个通用的理念，未必总是针对异步操作而言。凡是不把操作结果直接传给调用方，而是将其播报给另一个函数（即回调函数）的做法，无论同步还是异步，都可以叫做CPS式做法。

        - 同步的CPS

            ```
            function add(a,b){
                return a+b
            }
            ```

            ```
            function addCps(a,b,callback){
                callback(a+b)
            }
            ```

            ```
            console.log("start")
            addCps(1,2,result => console.log(`result:${result}`))
            console.log("end")
            ```

            ```
            start
            result:3
            end
            ```
        - 异步的CPS

            ```
            function addAsync(a,b,callback){
                setTimeout(() => callback(a+b),100)
            }
            ```

            ```
            console.log("start")
            addAsync(1,2,result => console.log(`result:${result}`))
            console.log("end")
            ```

            ```
            start
            end
            result:3
            ```
        - 并非所有的回调都是CPS

            有些函数虽然可以通过参数接受回调，但这并不意味这函数一定是异步函数，也不意味着它必定是采用CPS编写的。比如，Array对象的map（）方法就是个例子：

            ```
            const result = [1,5,7].map(item => item -1)
            console.log(result) // [0,4,6]
            ```
 

 - Observer(观察者)模式

    Observer模式定义了一个对象（这叫做主题，subject），它会在状态改变的时候通知一组观察者（或者说监听者）。
    Observer模式与Callback模式之间的主要区别在于，它可以通知多个监听器（也就是观察者），而采用CPS（接续传递风格）所实现的普通Callback模式，通常只会把执行结果传给一个监听器，也就是用户在提交执行请求时传入的那个回调。

    - EventEmitter

        ![image](./assets/imgs/eventemitter.png)

        ```
        import {EventEmitter} from "events";
        const emitter = new EventEmitter();
        ```

        > on(event,listener):这个方法可以为某种事件注册一个新的监听器。（事件用字符串表示，监听器用函数表示。）

        > once(event,listener):这个方法也能注册监听器，但是触发完一次事件后，这个监听器就会遭到移除。

        > emit(event,args...):这个方法用来触发新事件，并且能够传一些参数给监听器。

        > removeListener(event,listener):这个方法用来移除某种事件的监听器。
    
    - 创建并使用EventEmitter

        ```
        import {EventEmitter} from "events"
        import {readFile} from "fs";

        function findRegex(files,regex){
            const emitter = new EventEmitter();
            for(const file of files){
                readFile(file,"utf8",(err,content) => {
                    if(err){
                        return emitter.emit("error",err)
                    }
                    emitter.emit("fileread",file)
                    const match = content.match(regex)
                    if(match){
                        match.forEach(item => emitter.emit("found",file,item))
                    }
                })
            }
            return emitter
        }
        ```

        ```
        findRegex(["fileA.txt","fileB.json"],/hello\w+/g)
            .on("fileread",file => console.log(`${file} was read`))
            .on("found",(file,match) => console.log(`matched ${match} in ${file}`))
            .on("error",err => console.log(`error emitted ${err.message}`))
        ```

    - 让任何一个对象都能为监听器所观察

        ```
        import {EventEmitter} from "events";
        import {readFile} from "fs";

        class FindRegex extends EventEmitter {
            constructor(regex){
                super()
                this.regex = regex;
                this.files = []
            }

            addFile(file){
                this.files.push(file);
                return this
            }

            find(){
                for(const file of this.files){
                    readFile(file,"utf8",(err,content) => {
                        if(err){
                            return this..emit("error",err)
                        }
                        this.emit("fileread",file)
                        const match = content.match(this.regex)
                        if(match){
                            match.forEach(item => this.emit("found",file,item))
                        }
                    })
                }
                return emitter
            }
        }
        ```

        ```
        const findRegexInstance = new FindRegex(/a\w+/)

        findRegexInstance
            .addFile("fileA.txt")
            .addFile("fileB.json")
            .find()
            .on("fileread",file => console.log("fileread: ",file))
            .on("found",(file,content) => console.log("found: ",file,content))
            .on("error",err => console.log("err: ",err))
        ```

## 一个基础的HTTP服务器

 让我们先从服务器模块开始。在你的项目的根目录下创建一个叫server.js的文件，并写入以下代码：

 ```
    var http = require("http");

    http.createServer(function(req, resp) {
        resp.writeHead(200, {"Content-Type": "text/plain"});
        resp.write("Hello World");
        resp.end();
    }).listen(3000,() => console.log("server starting ... "));
 ```
 
 用这样的代码也可以达到同样的目的：

 ```
    var http = require("http");

    function onRequest(req, resp) {
        resp.writeHead(200, {"Content-Type": "text/plain"});
        resp.write("Hello World");
        resp.end();
    }
    http.createServer(onRequest).listen(3000,() => console.log("server starting ... "));
 ```

 你刚刚完成了一个可以工作的HTTP服务器。为了证明这一点，我们来运行并且测试这段代码。首先，用Node.js执行你的脚本：

 ```
    node server.js
 ```

 接下来，打开浏览器访问http://localhost:3000，你会看到一个写着“Hello World”的网页。

 接下来我们简单分析一下我们服务器代码中剩下的部分，也就是我们的回调函数 onRequest() 的主体部分。

 当回调启动，我们的 onRequest() 函数被触发的时候，有两个参数被传入： request 和 response 。

 - response

     它们是对象，你可以使用它们的方法来处理HTTP请求的细节，并且响应请求（比如向发出请求的浏览器发回一些东西）。

     所以我们的代码就是：当收到请求时，使用 response.writeHead() 函数发送一个HTTP状态200和HTTP头的内容类型（content-type），使用 response.write() 函数在HTTP相应主体中发送文本“Hello World"。

     最后，我们调用 response.end() 完成响应。

 - request

     我们从request获取请求的URL和其他需要的GET及POST参数。

     我们需要的所有数据都会包含在request对象中，该对象作为onRequest()回调函数的第一个参数传递。
     
     但是为了解析这些数据，我们需要额外的Node.JS模块，它们分别是url和querystring模块。


     ```  
     
          http://localhost:3000/a?b=1&c=2

          const urlObj = new URL(`http://localhost:3000${req.url}`);
          urlObj.search             // ?b=1&c=2
          urlObj.pathname           // /a
          urlObj.searchParams       // b=1&c=2

     ```
 
 - 增加路由校验和返回一个html页面

     ```

        var http = require("http");
        var { URL } = require("url")

        // http://localhost:3000/a?b=1&c=2

        http.createServer(function(req, resp) {

            if(req.url === "/favicon.ico"){
                resp.end()
                return
            }

            const urlObj = new URL(`http://localhost:3000${req.url}`);
            console.log("searchParams b " + urlObj.searchParams.get("b") );
            console.log("searchParams c " + urlObj.searchParams.get("c") );
            resp.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
            resp.write("Hello World");
            resp.write("<br>")
            resp.write("<h1>你好</h1>")
            resp.end();
        }).listen(3000,() => console.log("server starting ... "));

     ```