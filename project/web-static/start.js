// commonjs的语法 把express导入进来
const express = require("express");

const app = express()
// express 框架里 use 加载中间件（可以是第三方的中间件，也可以是本框架自己的）
app.use("/",express.static("./pages")) // 把当前目录下的pages文件夹中所有的文件发布到 :3000/

app.use("/vue3",express.static("./dist"))

app.listen(3000,() => console.log("listening port 3000 ... "))