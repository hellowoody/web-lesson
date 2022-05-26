window.add = () => {
    const p = document.createElement("p")
    p.innerHTML = "段落"
    document.body.appendChild(p)
}


if(import.meta.webpackHot){
    console.log("===== 开始了热替换hmr =====")

    // 让线头文件 index.js 开始hmr热替换
    import.meta.webpackHot.accept((err) => {
        console.log(">>>>>",err)
    })
}