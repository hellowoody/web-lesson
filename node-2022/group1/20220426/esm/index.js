import {fileURLToPath} from "url";
import {dirname} from "path"
// D:\\a\index.js
const __filename = fileURLToPath(import.meta.url)
// D:\\a
const __dirname = dirname(__filename)

console.log("__filename:",__filename)
console.log(__dirname)