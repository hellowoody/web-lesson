import "./css/common.css"
import img_png from "@/img/2.png"
import img_gif from "@/img/3.gif"
import "./a.js"

const h1 = document.createElement("h1")
h1.innerHTML = "回顾"
document.body.appendChild(h1)

const div = document.createElement("div")
div.id = "d01"
document.body.appendChild(div)

const arr = [img_png,img_gif]
for(let i = 0; i < 2 ; i++){
    const img = document.createElement("img")
    img.src = arr[i]
    document.body.appendChild(img)
}

// ESM
if(import.meta.webpackHot){
    console.log("start=========")
    // 支持非入口js文件的热替换
    import.meta.webpackHot.accept("./a.js",() => {
        console.log("*******************")
        console.log("*******************")
        console.log("*******************")
    })
    console.log("end=========")
}

// commonJS
// if (module.hot) {
//     console.log("start=========")
//     module.hot.accept('./a.js', function() {
//         console.log("*******************")
//         console.log("*******************")
//         console.log("*******************")
//     })
//     console.log("end=========")
// }