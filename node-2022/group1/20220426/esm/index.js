import {fileURLToPath} from "url";
import {dirname} from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log("__filename:",__filename)
console.log(__dirname)