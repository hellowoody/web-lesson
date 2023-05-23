/*

    1.使用插件时需要注意什么

        A.和loader不同的点：不仅需要安装插件，还需要require引用，因为是构造器，所以首字母大写
        B.webpack配置文件的options名字，也就是key值
            配置loader时是：module  {}
            配置plugin时是：plugins []

        C.配置loader时，use是个数组，webpack按倒序一个一个拿出进行翻译
          配置plugin时是，plugins就是一个数组，不所谓顺序，观察者模式（发布-订阅模式）

        D.插件引入后 需要用new修饰符进行创建实例，并把实例放进plugins的数组中 new Xxx()

        E.有的插件也有loader的功能，MiniCssExtractPlugin.loader
        
    2.如何设置别名

        const path = require("path")
        path.resolve() 

        {
            entry
            module,
            plugins
            resolve:{
                alias:{
                    key:value
                    "@":path.resolve src绝对路径，
                    “name”：“xxxx”
                    “arr”：[]
                }
            }
        }
       

    3.导入模块时可以省略后缀名么
        
        {
            resolve:{
                alias:{

                },
                extensions:[".js",".json",".wasm"]
                //  webassembly c c++  <script src="./xxx.wasm">
            }
        }
       
*/


// 序列化 反序列化
// serialize 序列化
// 序列化：将内存对象 转成一个可存储的字符串
// 反序列化：将字符串 转成一个可编辑的内存对象

// JSON : JavaScript struct object notion
// javascript  json
// xml    安全 文件稍大
// json 不安全 小巧 天生适应网络
/* <student>张三</student> */
/* <score>100</score> */

// json对象
const o = {
    a:1,
    'b':1,
    "c":1,
    // d:1,
}
const str = JSON.stringify(o)
console.log(str)
console.log(JSON.parse(str))

const o1 = {
    a:{
        b:[{
            c:{
                name:1
            }
        }]
    }
}

const o2 = JSON.parse(JSON.stringify(o1)) // 深拷贝 
const o3 = Object.assign({},o1)           // 浅拷贝




