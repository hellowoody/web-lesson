/*
    1.使用插件时需要注意什么

        A.和loader不同的点：不仅需要安装插件，还需要require引用，因为是构造器，所以首字母大写
        B.webpack配置文件的options名字，也就是key值
            配置loader时是：module
            配置plugin时是：plugins 【】

        C.配置loader时，use是个数组，webpack按倒序一个一个拿出进行翻译
          配置plugin时是，plugins就是一个数组，不所谓顺序，观察者模式（发布-订阅模式）

        D.插件引入后 需要用new修饰符进行创建实例，并把实例放进plugins的数组中 new Xxx()

        E.有的插件也有loader的功能，MiniCssExtractPlugin.loader

    2.如何设置别名

        resolve:{
            alias:{
                "别名":“路径”，
                "别名":xxx，
                "别名":[]，
            }
        }

    3.导入模块时可以省略后缀名么
    
        extensions的数组是要求顺序，正序一个一个拿出来“试一下”

        resolve:{
            extensions:[".js",".json",".wasm","新的可以省略的后缀名"], // 默认值 .js .json .wasm
        }
*/
// JavaScript设计出了json 
// json
// json对象
// 序列化 反序列化
// o 反序列化 出的对象
const o = {
    a:1,
    "b":2,
    'c':3,
    // d:0
}

// o 序列化成 文本字符串
const json_str = JSON.stringify(o)
console.log(json_str)
console.log(JSON.parse(json_str))
