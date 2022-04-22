import "@/css/common.css"

function component(){
    const el = document.createElement("div");

    el.innerHTML = "hello webpack" + name

    return el
}

document.body.appendChild(component())
