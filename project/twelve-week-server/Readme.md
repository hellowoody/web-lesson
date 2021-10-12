# 存在的问题和需要优化的事项

 ## 1.require / import , 能不能使用ES6 语法导入导出(TS 语法中不是问题)

 ## 2.修改代码后，每次有需要重启 ctrl c 和 npm start

  - nodemon (其中之一)

 ## 3.引入typescript,因为未来ts会是硬性指标 

  - 安装typescript 

    npm i -D typescript

  - 查看是否安装成功

    npx tsc -v

  - 初始化ts配置文件

    npx tsc --init

  - 执行编译命令

    npx tsc or npx tsc -p .

  - 安装express 对应的type的包

    npm i -D @types/express

# 通过命令回顾如何创建后台服务

  - 1.创建文件夹             mkdir project_name
  - 2.进入项目文件夹          cd project_name
  - 3.初始化项目             npm init -y
  - 4.安装express web框架    npm i --save express
  - 5.安装typescript        npm i --save-dev typescript (类比成之前的webpack) 
  - 6.验证ts是否安装成功      npx tsc -v 
  - 7.初始化ts的配置文件      npx tsc --init
  - 8.安装在ts环境下支持你用到的第三方库的工具包  npm i --save-dev @types/express
  - 9.通过ts命令编译项目      npx tsc / npx tsc -p .
  - 10.安装热部署的工具包      npm i --save-dev nodemon ts-node
  - 11.执行启动命令       npx nodemon --watch src/**/*.ts --exec ts-node src/main.ts


# post请求中application/json （json）和 application/x-www-form-urlencoded （form）区别

  json:参数就一定是json格式
  form:参数字符串格式

  最早:application/x-www-form-urlencoded
  之后才有:application/json 
  结论:form的方式更兼容

  如果你是按“form”请求，前端只向后台请求一次 post 200
  如果你是按“json”请求，前端向后台请求了两次：第一次是预请求 http options  code 20X
                                        第二次请求    post 200

  你是使用哪一个

  如果新的“json”能满足所有的场景，就用新的“json”，如果满足不了只能“form”。

# 前后台交互时需要注意点

1.前端请求数据的时间点，如果是页面自动请求，需要用到生命周期的回调函数

（onload-只在加载时执行 onshow-每次显示都是执行 onready）| (onhide onunload)

2.前端调用封装fetch方式时，注意语法async / await，正常处理和错误异常的捕获
3.后端你需要掌握如何接受参数，和如何返回结果
4.js array 分割或截取某一部分的数据的方法 slice
5.后台使用了ts语法，是不是ts中每一个声明变量/对象都需要给定类型？

# 如何加入graqhql

 - 安装

  npm i --save apollo-server-express
  npm i --save-dev @types/graphql

# 安装mongodb的驱动

  - 安装

    npm i --save mongodb
    npm i --save-dev @types/mongodb



