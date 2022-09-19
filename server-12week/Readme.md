# nodemon

  ```
    "dev":"nodemon ./src/main.js"
    "dev":"nodemon --watch *.* --exec ./src/main.js"
    "dev":"nodemon --watch src --exec ts-node ./src/main.ts"
  ```

# Grapql

  GraphQL 实际上将多个 HTTP 请求聚合成了一个请求，
  它只是将多个 RESTful 请求的资源变成了一个从根资源 Post 访问变成多个请求变成了一个请求的不同字段，
  从原有的分散式请求变成了集中式的请求。

  RESTful
  /login
  /register
  /search
  /cart

  GraphQL
  /gql  将login...search众多的接口变成属性

# mongo数据库

  ## 安装

  ## 启动

    - windows系统，可以从服务窗口，找到安装的mongo启动
    - 打开cmd，执行mongo
 
  ## 选中或者创建一个数据库

    - 查看一共有多少数据库

       show databases;

    - 创建数据库

        use twelve_weeks;
     
    - 创建一张测试表，并插入一条记录

        db.表名.insert({name:"张三"})

        db.test.insert({name:"张三"})

    - 验证刚才这几步是否成功

        查看数据库是否创建
        show databases;

        use twelve_weeks;
        查看表是否创建
        show tables;
        查看记录是否创建
        db.test.find();





  
  ## 将初始化脚本中的两行插入命令执行

# 如何解决跨域

  ## 跨域和跨站不同

  ## 跨域是和浏览器安全校验有关

  ## 如何解决

   - 1.绕开浏览器，简单的说就是访问网站本身的服务器，然后在网站服务器后台通过代码再请求接口
   - 2.反向代理。一般用nginx处理比较多
   - 3.手动修改后台代码，解决跨域问题（推荐）
   - 4.jsonp （不推荐），有长度限制，兼容性不好。

# Typescript

 ## ts是什么

  > ts的目的就是做到各种编辑器中的自动提示。

 ## 安装ts

  ```
   npm i -D typescript
  ```

 ## 验证是否安装成功

   ```
   npx tsc -v
   ```

 ## 初始化一个ts配置文件
 
    ```
    npx tsc --init
    ```

 ## 修改配置文件

    ```
    "target": "es5", 
    "rootDir": "./src", 
    "outDir": "./dist"
    ```

 ## 执行编译命令

   ```
   npx tsc
   ```
  
 ## 安装第三方库的ts语法包

   ```
   npm i -D @types/第三方库名
   npm i -D @types/express
   ```

 ## 手动编译方式

    ```
      "type":"commonjs",
      "scripts": {
        "build":"tsc",
        "start":"node ./dist/main.js"
      },
    ```

   - 通过npm run build 将ts转成js
   - 通过npm run start 运行后台的启动文件


 ## 自动热部署编译方式

  - 因为nodemon只能运行js文件

  - 所以我们需要在使用nodemon时将ts转js
  
    ```
    npm i -D ts-node
    ```

  - 修改package.json文件

    ```
    "scripts": {
      "build": "tsc",
      "start": "node ./dist/main.js",
      "dev": "nodemon --watch src/*.ts --exec ts-node src/main.ts"
    },
    ```