import "./css/common.css"
import "./a.js"


document.body.innerHTML = `
    <h1>hello world!!!</h1> 
    <button onclick="add()">insert</button>
`



if(import.meta.webpackHot){
    console.log("start==========")
    // hmr 检测当前页面 - 入口页面
    import.meta.webpackHot.accept()
    // hmr 检测第一个参数对象的页面
    import.meta.webpackHot.accept("./a.js",() => {
        console.log("***********")
    })
    console.log("end==========")
}


// if (module.hot) {
//     console.log("start==========")
//     // hmr 检测当前页面 - 入口页面
//     module.hot.accept(() => {
//         console.log(">>>>>>>>")
//     })
//     // hmr 检测第一个参数对象的页面
//     module.hot.accept("./a.js",() => {
//         console.log("***********")
//     })
//     console.log("end==========")
// }