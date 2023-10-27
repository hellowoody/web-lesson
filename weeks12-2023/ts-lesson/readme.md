# Typescript

 ## 相关知识

    可以把ts先当成webpack

 ## 安装

    ```
    1. 创建一个nodejs项目

    mkdir project-name
    cd project-name
    npm init -y

    2. 安装ts
    
    npm i -D typescript
    npm i -D typescript --registry https://registry.npm.taobao.org

    ```

 
 ## 基础命令

   ```
   tsc 就是ts命令行的对象

   查看版本
   npx tsc -v

   初始化配置文件
   npx tsc --init

   修改配置文件

   "target": "ES5"
   "rootDir":"./src"
   "outDir":"./dist"

   编译ts文件
   npx tsc filename // 编译某一个文件，生成一个js同名文件，在当前目录下

   npm tsc          // 读取tsconfig.json配置文件，按配置的规则进行编译
   ```