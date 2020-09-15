# node 学习

## 1.官网地址

https://nodejs.org/zh-cn/

## 2.安装

在官网上安装stable版本，一般都是图形化界面进行安装

## 3.什么是nodejs

- 起源是浏览器大战，导致B/S的应用逐渐霸占市场
- 编写web应用服务，web服务的基本原则是高性能，异步IO、事件驱动
- 之前基本上高级编程语言开发web服务，虽然同时提供了同步IO和异步IO，但是开发人员一旦用了同步IO，他们就再也懒得写异步IO了
- 因为JavaScript是单线程执行，根本不能进行同步IO操作。Ryan Dahl这个人，用javascirpt编写的nodejs，其目的就是用js作为web服务开发语言，同时天然只能支持异步IO。

## 4.什么是I/O操作

线程在执行中如果遇到磁盘读写或者网络通信(统称为I/O操作)，通常要耗费较长的时间。

## 5.nodejs，express优势，为什么要学这个（在Node上运行的JavaScript相比其他后端开发语言有何优势？）

- 最大的优势是借助JavaScript天生的事件驱动机制加V8高性能引擎，使编写高性能Web服务轻而易举。
- 因为js可以使用回调函数函数，这样的话，在只请求无需cpu（逻辑计算）的接口场景中，nodejs可以发挥巨大优势。可以接口“无限的”的请求。
- 那为什么传统后端语法没有这个优势呢，拿java，golang举例，一般情况是一个请求对应后台一个全生命周期，直到后台response后才算完成，为了解决并发问题会使用“信号量”，“load balancer负载均衡”解决，其实就是用队列和多线程解决，但是多线程会收到内存大小的限制

## 6.npm

- nodejs和npm是分不开的，因为nodejs本身只是提供了异步io读写和简单的http请求等标准库，如果在标准库的基础上做开发，实际上丧失了使用nodejs的出发点。所以我们使用nodejs开发一般是使用不同的模块（官方库或第三方库）。
- npm就是用来安装管理不同的模块的工具。例如：如果我们要使用模块A，而模块A又依赖于模块B，模块B又依赖于模块X和模块Y，npm可以根据依赖关系，把所有依赖的包都下载下来并管理起来。否则，靠我们自己手动管理，肯定既麻烦又容易出错。

## 7.带来的改变（便捷性）

- 在之前学习前段时，我们编写的JavaScript代码都是在浏览器中运行的，因此，我们可以直接在浏览器中敲代码，然后直接运行（或是创建一个html文件，让浏览器打开它）。
- 使用nodejs之后，我们编写的JavaScript代码可以不在浏览器环境中执行，而是在Node环境中执行（因为nodejs使用的V8引擎），因此，JavaScript代码将直接在你的计算机上以命令行的方式运行。

## 8.编写hello world

- 创建一个文件hello-world.js

  ```
  'use strict'; // 第一行总是写上'use strict';是因为我们总是以严格模式运行JavaScript代码,毕竟是后端语言了，还是“严格”一点好
  console.log("hello woody")
  ```

- 运行这个文件
  ```
  node hello-world.js
  ```

- 你可以把nodejs“简单”当成浏览器F12时的console控制台来使用

## 9.使用严格模式

除了在文件开头写'use strict'之外，还可以在执行命令是带着参数执行。

```
node --use_strict hello-world.js
```

## 10.基本模块(nodejs中标准模库)

- global
  在前面的JavaScript课程中，我们已经知道，JavaScript有且仅有一个全局对象，在浏览器中，叫window对象。而在Node.js环境中，也有唯一的全局对象，但不叫window，而叫global，这个对象的属性和方法也和浏览器环境的window不同。

  ```
  console.log(global)
  //or
  console.log(global.console)
  ```
- process
  process也是Node.js提供的一个对象，它代表当前Node.js进程。通过process对象可以拿到许多有用信息：
  ```
  // console.log(process)
  console.log(process.version) //node 版本
  console.log(process.platform) //当前操作系统
  console.log(process.arch) //32位 64位
  console.log(process.cwd()) //返回当前工作目录

  // process.nextTick()将在下一轮事件循环中调用:
  process.nextTick(function () {
      console.log('nextTick callback!');
  });
  console.log('nextTick was set!');

  //Node.js进程本身的事件就由process对象来处理。如果我们响应exit事件，就可以在程序即将退出时执行某个回调函数

  process.on('exit', function (code) {
      console.log('about to exit with code: ' + code);
  });
  ```

- fs 文件系统模块，负责读写文件

  Node.js内置的fs模块，和所有其它JavaScript模块不同的是，fs模块同时提供了异步和同步的方法。
  - 异步读文件
  异步读取时，传入的回调函数接收两个参数，当正常读取时，err参数为null，data参数为读取到的String。当读取发生错误时，err参数代表一个错误对象，data为undefined。这也是Node.js标准的回调函数：第一个参数代表错误信息，第二个参数代表结果。后面我们还会经常编写这种回调函数。
  ```
  'use strict'

  let fs = require('fs');

  fs.readFile('file.txt','utf-8',(err,data)=>{
      if(err){
          console.log(err)
      }else{
          console.log(data)
      }
  })

  ```
  - 同步读文件
  除了标准的异步读取模式外，fs也提供相应的同步读取函数。同步读取的函数和异步函数相比，多了一个Sync后缀，并且不接收回调函数，函数直接返回结果。
  ```
  'use strict';

  var fs = require('fs');

  var data = fs.readFileSync('file.txt', 'utf-8');
  console.log(data);
  ```

  - 异步方式写文件
  ```
  'use strict';

  var fs = require('fs');

  var data = 'Hello, Node.js';
  fs.writeFile('output.txt', data, function (err) {
      if (err) {
          console.log(err);
      } else {
          console.log('ok.');
      }
  });
  ```
  - 同步方式写文件
  ```
  'use strict'

  let fs = require("fs")

  let data = "穿主流装喝骨头汤带斧头帮的楚留香"

  fs.writeFileSync("output1.txt",data)
  ```

  - stat 能告诉我们文件或目录的详细信息

  ```
  'use strict'

  let fs = require("fs")

  fs.stat('file.txt',(err,stat)=>{
      if (err){
          console.log(err)
      }else{
          console.log(stat.isFile()) //是否是文件
          console.log(stat.isDirectory()) //是否是目录
          if (stat.isFile()){
              console.log(stat.size)       // 文件大小
              console.log(stat.birthtime)  // 创建时间
              console.log(stat.mtime)      // 修改时间
          }
      }
  })
  ```

  ```
  let fs = require("fs")

  let stat = fs.statSync("file.txt")

  console.log(stat)
  ```
- stream 是Node.js提供的又一个仅在服务区端可用的模块，目的是支持“流”这种数据结构

  - 读取

  ```
  'use strict'
  let fs = require("fs")

  let rs = fs.createReadStream("file.txt",'utf-8')

  rs.on('data',chunk =>{
      console.log('DATA:')
      console.log(chunk)
  })

  rs.on('end',()=>{
      console.log("read end")
  })

  rs.on('error',err =>{
      console.log('err:',err)
  })
  ```
  - 写入
  ```
  let fs = require('fs')

  let ws1 = fs.createWriteStream('output2.txt','utf-8')

  ws1.write('我是\n')
  ws1.write('穿主流装')
  ws1.write('喝骨头汤')
  ws1.write('带斧头帮')
  ws1.write('的楚留香')
  ws1.end()
  ```

  - pipe

  pipe()把一个文件流和另一个文件流串起来，这样源文件的所有数据就自动写入到目标文件里了，所以，这实际上是一个复制文件的程序：

  ```
  'use strict';

  let fs = require('fs');

  let rs = fs.createReadStream('file.txt');
  let ws = fs.createWriteStream('output5.txt');

  rs.pipe(ws);
  ```
  注：默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。如果我们不希望自动关闭Writable流，需要传入参数：
  ```
  readable.pipe(writable, { end: false });
  ```
- http 
  要开发HTTP服务器程序，从头处理TCP连接(第四层)，解析HTTP(第七层)是不现实的。这些工作实际上已经由Node.js自带的http模块完成了。应用程序并不直接和HTTP协议打交道，而是操作http模块提供的request和response对象。
  
  ![image](https://static.oschina.net/uploads/img/201805/19212614_AGK8.png)
  
  request对象封装了HTTP请求，我们调用request对象的属性和方法就可以拿到所有HTTP请求的信息；

  response对象封装了HTTP响应，我们操作response对象的方法，就可以把HTTP响应返回给浏览器。

  - 用Node.js实现一个HTTP服务器程序非常简单。我们来实现一个最简单的Web程序hello.js，它对于所有请求，都返回Hello world!

  ```
  'use strict';

  // 导入http模块:
  let http = require('http');

  // 创建http server，并传入回调函数:
  let server = http.createServer(function (request, response) {
      // 回调函数接收request和response对象,
      // 获得HTTP请求的method和url:
      console.log(request.method + ': ' + request.url);
      // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
      response.writeHead(200, {'Content-Type': 'text/html'});
      // 将HTTP响应的HTML内容写入response:
      response.end('<h1>Hello world!</h1>');
  });

  // 让服务器监听8080端口:
  server.listen(8080);

  console.log('Server is running at http://127.0.0.1:8080/');
  ```

  - 文件服务器

  ```
  'use strict';

  var
      fs = require('fs'),
      url = require('url'),
      path = require('path'),
      http = require('http');

  // 从命令行参数获取root目录，默认是当前目录:
  var root = path.resolve(process.argv[2] || '.');

  console.log('Static root dir: ' + root);

  // 创建服务器:
  var server = http.createServer(function (request, response) {
      // 获得URL的path，类似 '/css/xxx.css':
      var pathname = url.parse(request.url).pathname;
      // 获得对应的本地文件路径，类似 '/static/css/xxx.css':
      var filepath = path.join(root, pathname);
      // 获取文件状态:
      fs.stat(filepath, function (err, stats) {
          if (!err && stats.isFile()) {
              // 没有出错并且文件存在:
              console.log('200 ' + request.url);
              // 发送200响应:
              response.writeHead(200);
              // 将文件流导向response:
              fs.createReadStream(filepath).pipe(response);
          } else {
              // 出错了或者文件不存在:
              console.log('404 ' + request.url);
              // 发送404响应:
              response.writeHead(404);
              response.end('404 Not Found');
          }
      });
  });

  server.listen(8080);

  console.log('Server is running at http://127.0.0.1:8080/');
  ``` 

## 11.搭建标准Node开发环境

开发环境一般有一下特点：
- 有package.json配置文件
  需要在项目根路径执行 npm init or npm init -y
- 有入口文件，入口文件的名字一般在packge.json中定义
- 可以Debug(可以增加断点)
  - 点击vs code编辑器上方菜单中【run】或是【启动】,然后点击“添加配置”
  - 会在项目根目录自动创建一个.vscode的隐藏文件夹，并在其文件夹中自动创建了一个launch.json（启动的配置文件）
  - 最简单的情况launch.json不需要修改，但后面涉及到ts，热部署时需要修改这个文件
  - 使用方式很简单
    - 先在index.js(可以是任何文件)需要设置断点那行点一下左侧行号的位置，可以看到有一个红点出现说明设置断点成功
    - 然后点击上方菜单【run】或是【启动】中的“启动调试”
- 测试/单元测试
  一般推荐使用mocha

## 12.模块

- 在上面刚创建的标准开发环境中，创建一个文件夹modules
- 在modules文件夹中创建一个js文件，如./modules/math.js
  ```
  //math.js
  'use strict'

  function Add(a,b){
      return a+b
  }
  function Mul(a,b){
      return a*b
  }

  module.exports = {
      Add,
      Mul
  }
  ```
- 在入口文件index.js文件中导入
  ```
  //index.js

  'use strict'

  let math = require("./modules/math")
  let res = math.Add(1,2)
  console.log(res)
  console.log(math.Mul(2,3))

  ```


## 13.如何创建一个静态发布服务

```
mkdir express-staticweb

cd express-staticweb

npm init -y

npm i --save express

touch index.js

```

index.js 里

```
const express = require('express')

const app = express()

app.use(express.static("./static"))

app.listen(3000,function(){
    console.log("static web server listening port 3000... ")
})
```

## 14.在node项目里使用Typescript

- 安装typescript和node的typescript的解释器

```
npm i --save-dev typescript
npm i --save-dev @types/node
```
- typescript的配置文件

```
tsc --init
//or
npx tsc --init
```

- 配置tsconfig.json

```
{
  "compilerOptions": {
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "outDir": "./build",                        /* Redirect output structure to the directory. */
    "rootDir": "./src",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    "strict": true,                           /* Enable all strict type-checking options. */
    "esModuleInterop": true,                  
    "skipLibCheck": true,                     /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  }
}

```

- 编译ts -> js

  ```
  npx tsc
  ```

## 15.在ts语法下，使用node标准库创建一个http server

```

import http from 'http';
import url from 'url';

http.createServer((req,resp)=>{
    if (req.url !== "/favicon.ico"){
        const url_parse : url.UrlWithParsedQuery= url.parse(req.url !== undefined ? req.url : "",true)
        console.log(url_parse.query)
        resp.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
        resp.write("你好 hello woody")
    }
    resp.end()
}).listen(3000)

```

## 16.使用express,ts搭建一个最终的开发环境

- 创建express-app文件夹

- 进入express-app文件夹，执行项目初始化命令
  ```
  npm init
  or
  npm init -y
  ```
- 安装epxress，typescript,以及其他相关库
  ```
  npm i --save express
  npm i --save-dev typescript @types/node @types/express nodemon ts-node
  ```
- 创建ts配置文件，可参考上面的14小结
- 创建src文件夹,以及./src/index.ts
  ```
  import express from 'express';

  const app = express()

  app.listen(3000,function(){
      console.log("static web server listening port 3000... ")
  })
  ```
- 修改package.json文件
  ```
  "main": "./build/index.js",
  "scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch src/**/*.ts --exec ts-node src/index.ts"
  },
  ```
- 增加debug配置文件，可参考第11小结
  .vscode/launch.json
  ```
  "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "express-app",
            "runtimeArgs": [
                "-r",
                "ts-node/register"
            ],
            "args": [
                "${workspaceFolder}/src/index.ts",
            ],
        }
    ]
  ```
- 启动项目 支持热部署
  ```
  npm start
  ```
- 编译打包项目
  ```
  npm run build
  ```
  
## 17.typescript

- 网址
  ```
  https://www.typescriptlang.org/zh/ //官网网址 推荐

  https://www.tslang.cn/   //翻译网址
  ```

## 18.express

- 官方文档

  ```
  https://expressjs.com/zh-cn/starter
  ```

- hello world

    ```
    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
      res.send('Hello World!')
    })

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
    ```
- 路由

  - get
  ```
  app.get('/', function (req, res) {
    res.send('Hello World!');
  });
  ```
  - post
  ```
  app.post('/', function (req, res) {
    res.send('Got a POST request');
  });
  ```

- 静态文件

  ```
  app.use(express.static('public'));
  //or
  app.use('/static', express.static('public'));
  ```

- GraphQL

  - 官网

  ```
  https://graphql.org/

  https://graphql.cn/code/#javascript 
  ```

  - apollo-server
  ```
    https://github.com/apollographql/apollo-server

    https://www.apollographql.com/docs/apollo-server/
  ```

## 19.安装chrome的插件Talend

- 网址

  ```
  https://chrome.google.com/webstore/detail/talend-api-tester-free-ed/aejoelaoggembcahagimdiliamlcdmfm?hl=zh-CN // 官网

  //如果官网无法访问，可以在百度中进行搜索，下面是两个链接，当然也可以自行搜索下载
  
  https://huajiakeji.com/web-development/2020-03/3129.html

  https://www.mscto.com/mobile/564848.html
  ```

- Talend是什么？

  - Talend API Tester使调用、发现和测试HTTP和restapi变得容易。
  - 可视化地与REST、SOAP和HTTP api交互
  - 比postman更好用，更轻量级

