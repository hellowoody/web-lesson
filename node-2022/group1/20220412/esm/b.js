/*
    ESM的命名导出  export
    export 在一个文件中出现n次
    命名导出的内容只能用 import {} from "相对路径" 导入
    但是不能import xxx from "相对路径" 这种方式
*/ 
// exports.name = “我是b文件”
export const name = "我是b文件"

export const arr = [1,2,3]