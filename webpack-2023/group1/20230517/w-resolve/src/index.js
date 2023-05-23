// import "./css/index.css"; // 相对路径
import "@/css/index.css";    // 绝对路径
// import {msg} from "@/components/content/a.js"
import {msg} from "@/components/content/a"
// import {msg as txt} from "@/components/content/b.vue"
import {msg as txt} from "@/components/content/b"

const h1 = document.createElement("h1")
h1.innerText = "hello loader" + msg + txt
document.body.appendChild(h1)

