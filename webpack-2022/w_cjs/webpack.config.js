// commonjs
/*
    [id].js，在mode是development时效果和[name].js一样
             在mode是production时会生成一个数值名称文件，如 123.js

*/
module.exports = {
    entry:"./src/index.js",
    mode:"development",
    output:{
        filename:"[name].js",
        clean:true // default false  
    }
}