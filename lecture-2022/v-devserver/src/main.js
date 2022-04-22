import "@/css/common.css"
import txt from "./1.txt"

function component(){
    const el = document.createElement("div");

    el.innerHTML = "hello webpack " + txt

    return el
}

document.body.appendChild(component())

if (import.meta.webpackHot) {
    console.log("===============================")
    import.meta.webpackHot.accept(() => console.log('Accepting the updated printMe module!'));
    console.log("===============================")
}