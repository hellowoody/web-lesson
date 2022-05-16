/*
    webpack 只能处理/“读懂” js 文件

    类似 html css png jpeg ttf mp3 ts jsx 等等这些文件 webpack不认识的
    
    webpack中有一个“翻译官” loader： 将上面这些文件转义/“翻译”成js文件/js代码

*/

/*
    如果你的路径配置的是绝对路径，
    那么当前这个文件改到任何目录 都不会受影响
*/ 
// import "./css/common.css"  // 相对路径
import "@/css/common.css"     //  绝对路径
import {sum} from "./components/math"

function comp(){
    const p = document.createElement("p")
    p.innerHTML = "hello loader" + sum(10,2)
    return p
}

document.body.appendChild(comp())