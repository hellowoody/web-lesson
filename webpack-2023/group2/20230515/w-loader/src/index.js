// import "./css/common.css"
import "@/css/common.css"

const comp = () => {

    const div = document.createElement("div")

    div.innerHTML = "<h1>hello webpack loader</h1>"

    return div
}

document.body.appendChild(comp())