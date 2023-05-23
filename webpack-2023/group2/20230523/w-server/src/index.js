import "./common.css"
import "./m.js"

document.body.innerHTML = `
    <h1>hello webpack server 333</h1>
    <button onclick="add()">insert</button>
`

// esm
if(import.meta.webpackHot){
    console.log("这个文件适配的hmr")
    import.meta.webpackHot.accept((err) => {
        console.log("本次热替换失败，原因：",err)
    })

    import.meta.webpackHot.accept("./m.js",(err) => {
        console.log("本次热替换失败，原因：",err)
    })
}
