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

