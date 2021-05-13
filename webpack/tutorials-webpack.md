# Webpack 基础

## 1.安装

    ```
    npm init -y  //创建一个空项目
    npm install --save-dev webpack
    npm install --save-dev webpack-cli
    ```

## 2.目录结构

 - 按照我们之前了解vue项目的创建目录

    ```
    project
        - src
            - index.js
        - package.json
    ```

 - index.js文件内容

    ```
    const add = function(){
        return 1+2
    }


    console.log(add())
    ```

 - 在根目录创建webpack.config.js文件

    ```
    project
        - src
        - package.json
        - webpack.config.js
    ```

 - webpack的基础配置

    - 使用commonjs语法,将webpack配置文件内容暴露出去

        ```
        module.exports = {}
        ```
    - entry

        js的入口文件

        ```
        module.exports = {
            entry:"./src/index.js",
        }
        ```

    - output 

        js打包之后的信息内容

        ```
        module.exports = {
            output:{
                filename:"js/mod.js",
                //resolve是nodejs标准库的path库的方法，用来处理路径的。__dirname指的是当前的路径，
                path:resolve(__dirname,'build'),
                //publicPath会自动在输出的静态资源的路径前加上我们写的值，
                //而加上publicPath:'./'的原因就是让我们html中img标签的路径正确，
                //因为输出的图片是在build文件夹中，但不会创建新的文件夹
                publicPath:"./"
            }
        }
        ```
    
    - 打包

        - 直接使用webpack命令

            ```
            npx webpack
            ```
        
        - 通过修改package.json文件进行打包

            - 修改package.json文件

                ```
                 "scripts": {
                    "build": "npx webpack",
                },
                ```
            - 打包

                ```
                npm run build
                ```

    - 测试打包后的结果

        ```
        node build/js/mod.js
        ```
    
## 3.把html文件打包

 - 增加index.html文件

    ```
    project
        - src
        - index.htmls
        - package.json
        - webpack.config.js
    ```

 - index.html文件内容

    ```
    <html>
        <head>
            <meta charset="utf-8">
            <mata name="viewport" content="width=device-width,initial-scale=1.0">
            <title>webpack-demo</title>
        </head>
        <body>
            <h1>webpack demo </h1>
        </body>
    </html>
    ```

 - HtmlWebpackPlugin插件
    
    - 安装该插件

        ```
        npm i -D html-webpack-plugin
        ```
    - 修改webpack配置文件

        ```
        const HtmlWebpackPlugin = require("html-webpack-plugin");        //把html文件打包
        module.exports = {
            entry:...,
            output:...,
            plugins:[
                new HtmlWebpackPlugin({
                    template:"./index.html",
                    minify:{
                        collapseWhitespace:true, //移出空格
                        removeComments:true, //移出注释
                    }
                }),
            ],
        }

        ```

## 4.css样式的loader配置

    - 安装

        ```
        //将css文件编程commonjs模块加载到js中，里面内容是样式字符串
        npm i -D css-loader
        //创建<style>标签，将js中样式插入进行，添加到head中
        npm i -D style-loader
        ```

    - 修改配置文件

        ```
        //loader配置
        module:{
            rules:[
                {
                    test:/\.css$/,
                    //use数组中loader执行顺序，是从下到上依次执行
                    use:[
                        "style-loader", //创建<style>标签，将js中样式插入进行，添加到head中
                        "css-loader", //将css文件编程commonjs模块加载到js中，里面内容是样式字符串
                    ]
                },
            ]
        },
        ```
    - 创建css文件

        - src/common/common.css

        - common.css内容

            ```
            body {
                color:blue;
            }
            ```
        
    - 将common.css导入

        index.js

        ```
        import "./assets/common.css" 
        ```
    
    - 打包运行
        
## 5.将css样式单独打包出独立文件

 - 安装

    ```
    npm i -D mini-css-extract-plugin
    ```

- 修改webpack配置文件

    ```
    module:{
            rules:[
                {
                    test:/\.css$/,
                    //use数组中loader执行顺序，是从下到上依次执行
                    use:[
                        {
                            loader:MiniCssExtractPlugin.loader, //取代style-loader，作用:提取js中的css成单独文件
                            options:{
                                publicPath:"../../",
                            }
                        },
                        "css-loader", //将css文件编程commonjs模块加载到js中，里面内容是样式字符串
                    ]
                },
            ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html",
            minify:{
                collapseWhitespace:true, //移出空格
                removeComments:true, //移出注释
            }
        }),
        new MiniCssExtractPlugin({
            filename:'assets/css/build.[contenthash:10].css',
        }),
    ],
    ```

- 打包运行


## 6.打包图片

 - 在assets文件夹下创建imgs文件夹，并放入测试图片

    ```
    src
     - assets
        - imgs
            - 1.jpg
            - 2.png
            - 3.jpg
    ```
 
 - 修改css文件

    ```
    #img1 {
        width: 100px;
        height:100px;
        background-image: url('../imgs/1.jpg') ;
        background-repeat: no-repeat;
        background-size: cover;
    }
    #img2 {
        width: 100px;
        height:100px;
        background-image: url('../imgs/2.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    #img3 {
        width: 100px;
        height:100px;
        background-image: url('../imgs/3.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    ```

 - 修改index.html

    ```
    <div id="img1"></div>
    <div id="img2"></div>
    <div id="img3"></div>
    ```

 - 下载url-loader file-loader

    ```
    npm i -D url-loader file-loader
    ```

 - 修改配置文件

    ```
    module:{
        rules:[
            {
                test:/\.(jpg|png)$/, //处理图片资源
                //下载url-loader file-loader
                loader:'url-loader',
                //不配置options时 默认会把图片转为base64
                options:{
                    //图片大小小于8kb，就会被base64处理
                    //有点：减少请求数量（减轻服务器压力）
                    //缺点：图片体积会更大（文件请求速度变慢）
                    limit:8 * 1024,
                    //给图片重命名，【hash:10】取图片hash前10位，[ext]取文件原来扩展名
                    name:'[hash:10].[ext]',
                    outputPath:"assets/imgs",
                    // esModule:false,
                }
            },
        ]
    },
    ```

 - html中img标签打包图片

    - 修改index.html

        ```
        <img style="width:100px;height:auto;" src="./src/assets/imgs/3.jpg" />
        ```

    - 安装html-loader

        ```
        //处理html文件的img图片(负责引入img 从而被url-loader进行处理)
        npm i -D html-loader
        ```

    - 修改webpack配置文件

        ```
        //loader配置
        module:{
            rules:[
                {
                    test:/\.html$/,
                    //处理html文件的img图片(负责引入img 从而被url-loader进行处理)
                    loader:"html-loader"
                },
            ]
        },
        ```
    
## 7.开发服务器devServer:用来自动化编译，打开浏览器，自动刷新浏览器

 - 安装

    ```
    npm i -D webpack-dev-server
    ```

 - 修改webpack配置

    ```
    //开发服务器devServer:用来自动化编译，打开浏览器，自动刷新浏览器
    //特点:只会在内存中编译打包，不会有任何输出
    //注意!!!：如果你使用的webpack-cli的版本小于v4 启动devServer指令为:webpack-dev-server
    //注意!!!：如果你使用的webpack-cli的版本是v4 那么启动devServer的命令是：webpack serve 
    //webpack-cli v4 comes with out of box support of @webpack-cli/serve which means you can use webpack serve to invoke the webpack-dev-server.
    devServer:{
        contentBase:resolve(__dirname,'build'),
        compress:true,  //启动gzip压缩
        port:3000,
        // open:true, //自动开发默认浏览器
        hot:true //开启hmr服务
    },
    ```

 - 修改package.json中 脚本命令信息

    ```
    "scripts": {
        "start": "npx webpack serve",
        "build": "npx webpack"
    },
    ```

 - 运行测试

    ```
    npm start
    ```

## 8.模式

 - 开发环境

    ```
    mode:"development",
    ```

 - 生产环境

    ```
    mode:"production",
    ```

## 9.clean-webpack-plugin

 - 每次先清除上一次部署文件再编译
 
 - 安装
  
    ```
    npm i -D clean-webpack-plugin
    ```
 
 - 修改配置文件

    ```
    const { CleanWebpackPlugin } = require("clean-webpack-plugin");  //每次先清除上一次部署文件再编译
    plugins:[
        new CleanWebpackPlugin(),  //删除上一次build之后的文件
    ],
    ```

## 10.source-map

    ```
    devtool:'source-map'
    ```

## 11.alias别名

    ```
    resolve:{
        alias:{
            "@":resolve(__dirname,"./src")
        }
    },
    ```

## 12.js文件分割打包

 - 修改配置文件

    ```
    optimization:{
        //split 打包
        splitChunks:{
            chunks:'all',
        }
    },
    ```

 - 添加test.js文件

    ```
    export const fn = () => console.log(1000)
    ```

 - 在index.js文件引用

    ```
    import(/* webpackChunkName:'P' */"./test")
        .then(({fn})=>fn())
        .catch(e=>console.log(e))
    ```

 - 运行测试