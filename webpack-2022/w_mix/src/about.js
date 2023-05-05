
exports.m1 = "hello m1"

/*
    webpack 中自己实现了一套识别commonjs和esm的语法，所以在webpack中用那个都行

    甚至可以混用。

    举一个例子：
        当混用时，用cjs语法导出，用esm导入时，webpack为了兼容两种不同的包管理的语法
        当cjs使用module.exports导出时，
        webpack会使用__webpack_require__.n 方法将cjs导出的内容判断是否有“default”属性，目的是为了让esm导入的语法识别

*/
module.exports = {a:1,b:2}
