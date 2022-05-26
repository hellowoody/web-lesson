import "./css/common.css"
import "./a.js"


document.body.innerHTML = `
    <h1>hello world</h1> 
    <button onclick="add()">新增 </button>
`
console.log(1000)

if(import.meta.webpackHot){
    console.log("===== 开始了热替换hmr =====")

    // 让当前文件 index.js 开始hmr热替换
    import.meta.webpackHot.accept((err) => {
        console.log(">>>>>",err)
    })

    import.meta.webpackHot.accept("./a.js",() => {
        console.log("*********** a.js文件被更改")
    },(err) => {
        console.log(">>>>>",err)
    })
}