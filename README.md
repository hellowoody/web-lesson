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

   ```
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

      ```
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

      ```
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

      ```
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

      ```
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

## Module 配置处理模块的规则

## Resolve 配置寻找模块的规则

## Plugins 配置扩展插件

## DevServer 配置 DevServer
