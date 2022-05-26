window.insertRow = () => {
    const p = document.createElement("p")
    p.innerHTML = "新段落 111"
    document.body.appendChild(p)
}


// // ESM
// if(import.meta.webpackHot){
//     console.log("===== 开启hmr模式了 =====")

//     // 第一种，如果你想让当前这个js文件支持hmr，accept这个只能接受一个参数，而这个参数就是处理错误的回调函数
//     import.meta.webpackHot.accept(() => {

//     })

// }

