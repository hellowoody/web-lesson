// import "./css/common.css" // 相对路径
import "@/css/common.css"    // 绝对路径
/*
    用相对路径一旦你把当前文件移动层级，那么需要修改当前页面中所有的相对路径
    
    用绝对路径，只要引用目标文件不改变位置，那么无论当前页面移动到哪，
    都不需要修改该页面中的已有的路径
*/  

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