// 推荐使用commonJS 语法
const {resolve,join} = require("path")

module.exports = {
    mode:"development",
    // entry:"./src/index.js",
    // entry:["./src/index.js"],
    entry:{
        home:"./src/home.js",
        about:"./src/about.js"
    },
    output:{
        // filename:"output.js", // 默认值 main.js
        // filename:"[name].js", // []可以看作`${}` 而name是内置变量，name id hash chunkhash 
        // filename:"[id].js",   // 注：当mode是开发模式development，id和name 是一样
                                 //            生产模式production，id 代表 生成的文件名称是数字.js
        // filename:"[hash].js", // [hash]针对整个项目来讲是唯一
        // filename:"[chunkhash].js",
        filename:"[name].js",
        // 相对路径中将/和.替换成下划线 src/common.js =》 src_common_js
        // 天津市地税月度稽查报表 - tjdsmonthjctype01.js
        chunkFilename:"[name].[chunkhash:8].js",    //  专门定义动态加载的chunk文件名字    
                                                    //  所谓动态加载：没有在entry中定义入口文件，但又自动生成chunk文件的
        clean:true,                                 //  不会删除文件夹，但会将文件夹中的文件删除掉再创建   
                                                    //   在webpack V4 没有的，在V4版本中，需要下载cleanXXXplugin 
        // path:__dirname+"/build"                  //   必须是绝对路径
        // path:resolve(__dirname,"./output"),
        path:resolve(__dirname,"output-[hash:6]"),  //   文件夹命名时 不能使用chunkhash
        // path:join(__dirname,"output"),
    }
}