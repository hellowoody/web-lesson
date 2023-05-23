import "@/css/index.css"
import {msg} from "./components/Home"
import {msg as txt} from "./components/About"

const h1 = document.createElement("h1")

h1.innerText = "hello webpack plugin " + msg + txt

document.body.appendChild(h1)

