/*
    1.commonjs语法
        require               导入
        module.exports        导出   module.exports.xxx = xxx,module.exports = xxx 都支持
        exports（推荐）        导出  只能这样导出 exports.xxx = xxx 

    2.package.json 是 nodejs标志性的配置文件

        type： 一般type不用写，因为type默认值就是type：“commonjs”

        scripts： 可以让我们自定义命令的名称，npm run xxx
*/