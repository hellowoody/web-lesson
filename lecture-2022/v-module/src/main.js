import "@/css/common.css"
import {name} from "./a.js"


function component(){
    const el = document.createElement("div");

    el.innerHTML = "hello webpack" + name

    return el
}

document.body.appendChild(component())
