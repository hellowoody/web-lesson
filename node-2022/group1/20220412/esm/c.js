/*
    ESM
    如果同时使用export和export default，不需要担心顺序问题
    并且我们不需要担心“重名”的问题
*/ 

export default {
    name:"我是c文件",
    arr:[1,2,3]
}

export const name = "我是c文件 by 命名导出"

export const num = 1000

export const flag = true