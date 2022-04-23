# Webpack v5

## 官网地址

   > https://webpack.js.org/

## 安装

   > https://webpack.js.org/guides/getting-started/  

   ```
    npm init -y  //创建一个空项目
    npm install --save-dev webpack
    npm install --save-dev webpack-cli
   ```

## 在根目录创建webpack.config.js文件

   ```
   npx webpack 

   npx webpack --config webpack.config.js
   ```

## 通过修改package.json文件进行打包

   ```
   "scripts": {
      "build": "webpack",
   },
   ```

   > npm run build  

## Entry 配置模块的入口

   > entry 是配置模块的入口，可抽象成输入， Webpack 执行构建的第 步将从入 口开始，搜寻及递归解析出所有入口依赖的模块。  
   > entry 配置是必填的，若不填则将导致 Webpack 报错、退出 。

   ```js
   const path = require('path');

   module.exports = {
      // js执行入口文件
      entry: './src/index.js',
      output: {
         // 将所有依赖的模块合并输出到 main.js 文件
         filename: 'main.js',
         // 将输出文件都放到 dist 目录下
         path: path.resolve(__dirname, 'dist'),
      },
   };
   ```

   - context

      > Webpack 在寻找相对路径的文件时会以 context 为根目录， context 默认为执行启动Webpack 时所在的当前工作目录。如果想改变 context 的默认配置，则可以在配置文件里这样设置它  

      > 注意， context 须是一个绝对路径的字符串 除此之外，还可以通过在启动 Webpack时带上参 webpack --context 来设置 context  

      ```
      const path = require('path');

      module.exports = {
         // js执行入口文件
         context:path.resolve(__dirname,"src"),
         entry: './index.js',
         output: {
            // 将所有依赖的模块合并输出到 main.js 文件
            filename: 'main.js',
            // 将输出文件都放到 dist 目录下
            path: path.resolve(__dirname, 'dist'),
         },
      };
      ```
   
   - entry

      > Entry 类型可以 以下 种中的 种或者相互组合  

      |  类型   | 例子                                  |  含义                              |
      |  ----   | ----                                  | ----                               |
      | string  | './src/index.js'                      | 入口模块的文件路径，可以是相对路经 |
      | array   | [ './src/home.js','./src/about.js']   | 入口模块的文件路径，可以是相对路径 |
      | object  | {home:"./home.js",about:"./about.js"} | 配置多个入口，每个入口生成 Chunk   |

      ```
      export default {
         // js执行入口文件
         entry:  [ './src/home.js','./src/about.js'],
      };
      ```

      ```
      export default {
         // js执行入口文件
         entry:{
            home:"./src/home.js",
            about:"./src/about.js"
         }
      };
      ```

      > Chunk 的名称  
      >> Webpack 会为每个生成的 Chunk 取一个名称， Chunk 的名称和 Entry的配置有关。  
      >>> 如果 entry 是一个 string 或 array ，就只会生成一个 Chunk ，这时 Chunk 的名称为 main
      >>> 如果 entry object ，就可能会出现多个 Chunk ，这时 Chunk 的名称是object 键值对中键的名称。


      > 配置动态 Entry  
      >> 假如项目里有多个页面需要为每个页面的入口配置一个 Entry，但这些页面的数量可能会不断增长，则这时 Entry 的配置会受到其他因素的影响，导致不能写成静态的值。其解决方法是将 Entry 设置成一个函数动态地返回上面所说的配置，代码如下：


      ```
      export default {
         entry:() => {
            return {
               home:"./src/home.js",
               about:"./src/about.js"
            }
         }
      };
      ```

      ```
      export default {
         entry:() => {
            return Promise.resolve({
               home:"./src/home.js",
               about:"./src/about.js"
            })
         }
      };   
      ```  
   
   - Output filename

      > 默认情况下，输出文件名是从output中提取的。但您可以为特定chunk指定自定义输出文件名.  

      ```
      export default {
         entry:{
            home:{
               import:"./src/home.js",
               filename:"pages/home.js"
            },
            about:"./src/about.js"
         }
      }
      ```

## Mode 模式

   > 提供模式配置选项会告诉webpack相应地使用其内置优化。  
   > production | development | none  

   ```
   module.exports = {
      mode: 'development',
   };
   ```

   ```
   webpack --mode=development
   ```

   > 如果未设置，webpack将production设置为模式的默认值。   

## Output 配置如何输出最终想要的代码

   > output 配置如何输出最终想要的代码.output是一个object ，里面包含一系列配置项，下面分别介绍它们.  

   - filename

      > output.filename 配置输出文件的名称，为 string 类型。如果只有一个输出文件，则可以将它写成静态不变的：  

      ```
      export default {
         // js执行入口文件
         entry:  [ './src/home.js','./src/about.js'],
         output: {
            filename:"main.js"
         }
      };
      ```

      > 但是在有多个 Chunk 要输出时，就需要借助模板和变量了。前面讲到， Webpack 会为每Chunk 每个名称，所以我们可以根据 Chunk 的名称来区分输出的文件名：

      ```
      export default {
         // js执行入口文件
         entry:{
            home:"./src/home.js",
            about:"./src/about.js"
         },
         output: {
            filename:"[name].js",
         }
      };
      ```

      > 代码里的［ name ］代表用内置的 name 变量去替换［ name ］，这时我们可以将它看作一个字符串模块函数，每个要输出的 Chunk 都会通过这个函数去拼接出输出的文件名称。内置变量除了包括 name ，还包括如表所示的变量。


      |  变量名    |  含义                              |
      |  ----      | ----                               |
      | id         | Chunk 的唯一标识，从 0 开始        |
      | name       | Chunk 的名称                       |
      | hash       | 所有文件哈希值相同，只要改变内容跟之前的不一致，所有哈希值都改变，没有做到缓存意义   |
      | chunkhash  | 当有多个chunk，形成多个bundle时，如果只有一个chunk和一个bundle内容变了，其他的bundle的hash都会发生变化，因为大家都是公用的一个hash，这个时候chunkhash的作用就出来了。它根据不同的入口文件(Entry)进行依赖文件解析、构建对应的 chunk，生成对应的哈希值。   |

      > 其中 hash 和 chunkhash 的长度是可指定的，［ hash:BJ 代表取 Hash 值，默认是20位

   
   - chunkFilename

      > output.chunkFilename 配置无入口的 Chunk 在输出时的文件名称。 chunkFilename和上面的 filename 非常类似，但 chunkFilename 只用于指定在运行过程中生成的 Chunk 在输出时的文件名称。会在运行时生 Chunk 的常见场景包括：使用 CommonChunkPlugin 、使用import （"path/to/module"） 动态加载等。 chunkFilename 支持和 filename 一致的内置变量。  

      ```js
      export default {
         // js执行入口文件
         entry:{
            home:"./src/home.js",
            about:"./src/about.js"
         },
         output: {
            filename:"[name].js",
            chunkFilename: '[id].js',
         },
         mode:"none"
      };
      ```

      ```js
      import(/* webpackChunkName:"common" */"./common.js").then(res => console.log(res.name))
      ```

   - path

      > output path 配置输出文件存放在本地的目录，必须是 string 类型的绝对路径。通常通过Node.js path 模块去获取绝对路径  

      ```
      import path from "path";
      import {fileURLToPath} from "url";

      const __dirname = path.dirname(fileURLToPath(import.meta.url))

      export default {
         // js执行入口文件
         entry:{
            home:"./src/home.js",
            about:"./src/about.js"
         },
         output: {
            filename:"[name].js",
            chunkFilename: '[id].js',
            // 将输出文件都放到 dist 目录下
            path: path.resolve(__dirname, 'dist_[hash:8]'),
         },
         mode:"none"
      };
      ```

   - publicPath

      > output.publicPath 配置发布到线上资源的 URL 前缀，为 string 类型。默认值是空字符串 ，即使用相对路径。  

      ```
      output: {
         filename:"[name].js",
         publicPath:"./"
      },
      ```

      > 配合HtmlWebpackPlugin插件使用

   - library

      > 将你的项目当作一个模块导出
      >> name 模块名称  
      >> type: var | this | window | global | commonjs | module | commonjs2

      ```js
      export default {
         // js执行入口文件
         entry: "./src/index.js",
         output: {
            filename:"[name].js",
            library:{
               name:"demo",
               type:"var"
            }
         },
         mode:"none"
      };
      ```

      ```html
      <!DOCTYPE html>
      <html>
         <head>
            <meta charset="utf-8" />
            <title>Getting Started</title>
         </head>
         <body>   
            <script src="./main.js"></script>
         </body>
      </html>
      <script>
      console.log(demo)
      </script>
      ```
   
   - clean

      > 每次编译前先删除上一次的编译记录

      ```js
      output: {
         clean: true, // Clean the output directory before emit.
      }
      ```

## Module 配置处理模块的规则

   > module 配置处理模块的规则

   - 配置 Loader

      rules 配置模块的读取和解析规则，通常用来配置 Loader 。其类型是一个数组，数组的每一项都描述了如何处理部分文件。配置一项 rules 时大致可通过以下方式来完成。

      > 条件匹配: 通过 test include exclude 三个配置项来选中 Loader 要应用则的文件。  
      > 应用规则: 对选中的文件通过 use 配置项来应用 Loader ，可以只应用 Loader或者按照从后往前的顺序应用一组 Loader ，同时可以分别向 Loader 传入参数。     

      ```js
      export default {
         entry:"./src/main.js",
         output:{
            filename:"built.js",
         },
         module:{
            rules:[
                  {
                     test:/\.css$/,
                     //include:path.resolve(__dirname,"./src/css"),
                     //use数组中loader执行顺序，是从下到上依次执行
                     use:[
                        "style-loader", //创建<style>标签，将js中样式插入进行，添加到head中
                        "css-loader",   //将css文件加载到js中，里面内容是样式字符串
                     ]
                  }
            ]
         },
         mode:"none"
      }
      ```

## Resolve 配置寻找模块的规则

   > Webpack 在启动后会从配置的入口模块出发找出所有依赖的模块， Resolve 配置 Webpack如何寻找模块所对应的文件。 Webpack 内置 JavaScript 模块化语法解析功能，默认会采用模块化标准里约定的规则去寻找，但我们也可以根据自己的需要修改默认的规则。

   - alias 别名

      ```js
      import path from "path";
      import {fileURLToPath} from "url";

      const __dirname = path.dirname(fileURLToPath(import.meta.url))

      export default {
         entry:"./src/main.js",
         output:{
            filename:"built.js",
         },
         module:{
            rules:[
                  {
                     // test:/\.css$/,
                     include:path.resolve(__dirname,"./src/css"),
                     //use数组中loader执行顺序，是从下到上依次执行
                     use:[
                        "style-loader", //创建<style>标签，将js中样式插入进行，添加到head中
                        {
                              loader:"css-loader",
                        }
                     ]
                  }
            ]
         },
         resolve:{
            alias:{
                  "@":path.resolve(__dirname,"./src")
            }
         },
         mode:"none"
      }
      ```

      ```js
      import "@/css/common.css"

      function component(){
         const el = document.createElement("div");

         el.innerHTML = "hello webpack"

         return el
      }

      document.body.appendChild(component())
      ```


   - extensions 扩展名

      > 在导入语句没带文件后缀时， Webpack 会自动带上后缀后去尝试访问文件是否存在。resolve.extensions 用于配置在尝试过程中用到的后缀列表，默认是：

      ```
      extensions: ['.js','.json']
      ```

      > 注意：如果package.json中type设置是“module”,import语句还是需要后缀名的，但是在webpack.config.js中的后缀可以省略。


## Plugins 配置扩展插件

   > Plugin 用于扩展 Webpack 的功能 各种各样的 Plugin 几乎可以让 Webpack 做任何与构建相关的事情。  
   > Plugin 的配置很简单， plugins 配置项接收一个数组，数组里的每一项都是一个要使用Plugin 的实例， Plugin 需要的参数通过构造函数传入。  
   > 使用 Plugin 难点在于掌握 Plugin 本身提供的配置项 而不是如何在 Webbpack中接入Plugin。  

   - 把html文件打包

      ```
      npm i -D html-webpack-plugin
      ```

      ```js
      import path from "path";
      import {fileURLToPath} from "url";
      import HtmlWebpackPlugin from "html-webpack-plugin";        //把html文件打包

      const __dirname = path.dirname(fileURLToPath(import.meta.url))

      export default {
         entry:"./src/main",
         output:{
            filename:"built.js"
         },
         module:{
            rules:[
                  {
                     test:/\.css$/,
                     //use数组中loader执行顺序，是从下到上依次执行
                     use:[
                        "style-loader", //创建<style>标签，将js中样式插入进行，添加到head中
                        {
                              loader:"css-loader",
                        }
                     ]
                  }
            ]
         },
         plugins:[
            new HtmlWebpackPlugin({
                  template:"./public/index.html",
                  minify:{
                     collapseWhitespace:false, //移出空格
                     removeComments:false, //移出注释
                  }
            }),
         ],
         resolve:{
            alias:{
                  "@":path.resolve(__dirname,"./src")
            },
            extensions:[".js",".json"]
         },
         mode:"none"
      }
      ```
   
   - 将css样式单独打包出独立文件

      ```
      npm i -D mini-css-extract-plugin
      ```

      ```js
      import path from "path";
      import {fileURLToPath} from "url";
      import HtmlWebpackPlugin from "html-webpack-plugin";        //把html文件打包
      import MiniCssExtractPlugin from "mini-css-extract-plugin"

      const __dirname = path.dirname(fileURLToPath(import.meta.url))

      export default {
         entry:"./src/main",
         output:{
            filename:"built.js"
         },
         module:{
            rules:[
                  {
                     test:/\.css$/,
                     //use数组中loader执行顺序，是从下到上依次执行
                     use:[
                        {
                              loader:MiniCssExtractPlugin.loader, //取代style-loader，作用:提取js中的css成单独文件
                              options:{
                                 publicPath:"../",
                              }
                        },
                        "css-loader"
                     ]
                  }
            ]
         },
         plugins:[
            new HtmlWebpackPlugin({
                  template:"./public/index.html",
                  minify:{
                     collapseWhitespace:false, //移出空格
                     removeComments:false, //移出注释
                  }
            }),
            new MiniCssExtractPlugin({
                  filename:'css/build.[contenthash:10].css',
            }),
         ],
         resolve:{
            alias:{
                  "@":path.resolve(__dirname,"./src")
            },
            extensions:[".js",".json"]
         },
         mode:"none"
      }
      ```
   
   - 打包图片

      > 在assets文件夹下创建imgs文件夹，并放入测试图片  

      ```
      src
        - imgs
           - 1.jpg
           - 2.png
           - 3.jpg
      ```

      > 修改css文件  

      ```css
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

      > 修改index.html  

      ```html
      <div id="img1"></div>
      <div id="img2"></div>
      <div id="img3"></div>
      ```

      > 之前的处理方式
      >> 下载url-loader file-loader

      ```
      npm i -D url-loader file-loader
      ```

      > 修改配置文件

      ```js
      import path from "path";
      import {fileURLToPath} from "url";
      import HtmlWebpackPlugin from "html-webpack-plugin";        //把html文件打包
      import MiniCssExtractPlugin from "mini-css-extract-plugin"

      const __dirname = path.dirname(fileURLToPath(import.meta.url))

      export default {
         entry:"./src/main",
         output:{
            filename:"built.js"
         },
         module:{
            rules:[
                  {
                     test:/\.css$/,
                     //use数组中loader执行顺序，是从下到上依次执行
                     use:[
                        {
                              loader:MiniCssExtractPlugin.loader, //取代style-loader，作用:提取js中的css成单独文件
                              options:{
                                 publicPath:"../",
                              }
                        },
                        "css-loader"
                     ]
                  },
                  {
                     test:/\.(jpg|png)$/, //处理图片资源
                     //下载url-loader file-loader
                     loader:'url-loader',
                     //不配置options时 默认会把图片转为base64
                     options:{
                        //图片大小小于8kb，就会被base64处理
                        //有点：减少请求数量（减轻服务器压力）
                        //缺点：图片体积会更大（文件请求速度变慢）
                        limit:5 * 1024,
                        //给图片重命名，【hash:10】取图片hash前10位，[ext]取文件原来扩展名
                        name:'[hash:10].[ext]',
                        outputPath:"./imgs",
                        esModule:false,
                     },
                     type:"javascript/auto"
                  },
            ]
         },
         plugins:[
            new HtmlWebpackPlugin({
                  template:"./public/index.html",
                  minify:{
                     collapseWhitespace:false, //移出空格
                     removeComments:false, //移出注释
                  }
            }),
            new MiniCssExtractPlugin({
                  filename:'css/build.[contenthash:10].css',
            }),
         ],
         resolve:{
            alias:{
                  "@":path.resolve(__dirname,"./src")
            },
            extensions:[".js",".json"]
         },
         mode:"none"
      }
      ```

      > webpack v5 推荐写法
      >> 使用内置的assets-module

      ```js
      import path from "path";
      import {fileURLToPath} from "url";
      import HtmlWebpackPlugin from "html-webpack-plugin";        //把html文件打包
      import MiniCssExtractPlugin from "mini-css-extract-plugin"

      const __dirname = path.dirname(fileURLToPath(import.meta.url))

      export default {
         entry:"./src/main",
         output:{
            filename:"built.js",
            // assetModuleFilename:"./imgs/[name][ext]"
         },
         module:{
            rules:[
                  {
                     test:/\.css$/,
                     //use数组中loader执行顺序，是从下到上依次执行
                     use:[
                        {
                              loader:MiniCssExtractPlugin.loader, //取代style-loader，作用:提取js中的css成单独文件
                              options:{
                                 publicPath:"../",
                              }
                        },
                        "css-loader"
                     ]
                  },
                  {
                     test:/\.(jpe?g|png)$/,
                     type:"asset",
                     parser: {
                        //转base64的条件
                        dataUrlCondition: {
                           maxSize: 8 * 1024, //8kb
                        }
                     },
                     generator:{ 
                        //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
                        filename:'./imgs/[name].[hash:6][ext]',
                     },
                  },
                  {
                     test:/\.txt$/,
                     type:"asset/source"
                  }
            ]
         },
         plugins:[
            new HtmlWebpackPlugin({
                  template:"./public/index.html",
                  minify:{
                     collapseWhitespace:false, //移出空格
                     removeComments:false, //移出注释
                  }
            }),
            new MiniCssExtractPlugin({
                  filename:'css/build.[contenthash:10].css',
            }),
         ],
         resolve:{
            alias:{
                  "@":path.resolve(__dirname,"./src")
            },
            extensions:[".js",".json"]
         },
         mode:"none"
      }
      ```



   - 打包html引入图片

      > 修改index.html

      ```html
      <img style="width:100px" src="../src/imgs/3.png">
      ```

      > 安装html-loader

      ```
      //处理html文件的img图片(负责引入img 从而被url-loader进行处理)
      npm i -D html-loader
      ```

      > 修改webpack配置文件

      ```js
      module:{
         rules:[
               {
                  test:/\.html$/,
                  //处理html文件的img图片(负责引入img 从而被url-loader进行处理)
                  loader:"html-loader"
               },
         ]
      }
      ```

## DevServer 配置 DevServer

   > 开发服务器devServer:用来自动化编译，打开浏览器，自动刷新浏览器  

   > 安装   

   ```
   npm install -D webpack-dev-server
   ```

   > 修改配置文件

   ```js
   devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
        open:true, //自动开发默认浏览器
        hot:true //开启hmr服务
   }
   ```

   ```js
   if (import.meta.webpackHot) {
      console.log("===============================")
      import.meta.webpackHot.accept(() => console.log('Accepting the updated printMe module!'));
      console.log("===============================")
   }
   ```

   > 修改package.json

   ```json
   "scripts": {
    "build": "webpack",
    "dev": "npx webpack serve"
   }
   ```

## Devtool

   > dev tool 配置 Webpack 如何生成 Source Map 默认值是 false ，即不生成 SourceMap ，若想为构建出的代码生成 Source Map 以方便调试，则可以这样配置：

   ```js

   {
      devtool:'source-map'
   }

   ```

   > 在开发环境下将 devtool 设置成 cheap-module-eval-source-map 因为生成这种 Source Map 的速度最快，能加速构建。由于在开发环境下不会做代码压缩，所以在 Source Map 中即使没有列信息，也不会影响断点调试。  

   > 在生产环境下将 devtool 设置成 hidden-source-map ，意思是生成最详细的Source Map ，但不会将 Source Map 暴露出去。由于在生产环境下会做代码压缩，一个JavaScript 文件只有一行，所以需要列信息。  