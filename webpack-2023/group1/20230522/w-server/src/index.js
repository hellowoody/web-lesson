import "./common.css"
import "./m.js"

document.body.innerHTML = `
    <h1>hello webpack server</h1>
    <button onclick="add()">insert </button>
`


if(import.meta.webpackHot){
    console.log("===== hmr ok了 ========")
    import.meta.webpackHot.accept(error => {
        console.log("hmr 替换失败xxxxx",error)
    })

    import.meta.webpackHot.accept("./m.js",error => {
        console.log("hmr 替换失败xxxxx",error)
    })
}