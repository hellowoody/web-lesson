# node 学习

## 1.如何创建一个静态发布服务

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

## 2.在node项目里使用Typescript

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

## 3.使用node标准库创建一个http server


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



