/*

Commonjs cjs
__dirname

导出：
    全局/默认导入:   module.exports
    命名导入（命名）: exports

导入： require


ES module esm
nodejs的api 手动获得__dirname

导出：
    全局/默认导入:   export default
    命名导入（命名）: export

导入： import


*/

// exports.msg = "this is a cjs module"
export const msg = "this is a esm module"