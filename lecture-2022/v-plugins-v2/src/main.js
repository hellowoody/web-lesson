import "@/css/common.css"
import txt from "./1.txt"

function component(){
    const el = document.createElement("div");

    el.innerHTML = "hello webpack" + txt

    return el
}

document.body.appendChild(component())
