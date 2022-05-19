import "@/css/common.css"

function comp(){
    const p = document.createElement("p")
    p.innerHTML = "hello plugin"
    return p
}

document.body.appendChild(comp())

console.log(1000)