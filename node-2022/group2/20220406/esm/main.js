/*
    1.package.json 中的type如果是module，那么不能再用commonjs语法
    2.ESM中导入或加载的文件必须写后缀名，而且后缀名必须是js
    3.ESM语法：
        import            导入
        export            导出
        export default    默认导出 （一个文件中最多使用一次）
*/
import "./a.js"
