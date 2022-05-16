// commonjs
/*
    [id].js，在mode是development时效果和[name].js一样
             在mode是production时会生成一个数值名称文件，如 123.js

*/
module.exports = {
    entry:{
        home:"./src/home.js",
        about:"./src/about.js",
    },
    mode:"development",
    output:{
        filename:"[name].js",
        chunkFilename:"[name].[chunkhash:8].js",  // 可以修改动态加载文件的名字 
        clean:true                  // default false  
    }
}