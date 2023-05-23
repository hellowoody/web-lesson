// import xx from "xxx.js"
import "./css/common.css"

function component(){
    const div = document.createElement("div")
    div.innerHTML = "<h1>hello webpack loader</h1>"
    return div
}

document.body.appendChild(component())
