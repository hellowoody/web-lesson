import "./css/common.css"
import "./a.js"

const div = document.createElement("div")
div.innerHTML = `
    <h1>webpack hmr</h1>
    <button onclick="insertRow()">新增</button>
`
document.body.appendChild(div)
// console.log(a)
console.log("import.meta.webpackHot:",import.meta.webpackHot)
console.log("module.hot",module.hot)


// ESM
if(import.meta.webpackHot){
    console.log("===== 开启hmr模式了 =====")

    // 第一种，如果你想让当前这个js文件支持hmr，accept这个只能接受一个参数，而这个参数就是处理错误的回调函数
    import.meta.webpackHot.accept((err) => {
        console.log("********",err)
    })

    // 第二种，如果你想外部文件支持hmr，accept可以接受3个参数，
    //  第一个参数 外部文件的路径
    //  第二个参数 是hmr生效之后的回调函数
    //  第三个参数 和第一种情况一样，处理错误的回调函数

    import.meta.webpackHot.accept("./a.js",() => {
        console.log(">>>>>>> a.js hmr 成功了")
    },(err) => {
        console.log(">>>>>>> ",err)
    })

}


