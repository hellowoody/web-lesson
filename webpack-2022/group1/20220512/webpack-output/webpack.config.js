// commonjs
/*
    [id].js，在mode是development时效果和[name].js一样
             在mode是production时会生成一个数值名称文件，如 123.js

*/
module.exports = {
    // entry:"./src/home.js",
    entry:{
        home:"./src/home.js",
        about:"./src/about.js",
    },
    mode:"development",
    output:{
        // filename:"[name].js",
        // filename:"[id].js",
        // filename:"[hash].js" // !important  hash是这一次构建生成的hash值，也就是多个chunk都是同一个hash
        filename:"[name].[chunkhash:6].js",
        chunkFilename:"[name].123.js",  // 可以修改动态加载文件的名字 
        clean:true // default false  
    }
}