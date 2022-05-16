// import "./css/common.css" // 相对路径
import "@/css/common.css"    // 绝对路径 

function comp(){
    const p = document.createElement("p")
    p.innerHTML = "hello loader"
    return p
}

/*
create
<style>
    * {
        color:blue;
    }
</style>

注入到html标签中
*/

document.body.appendChild(comp())