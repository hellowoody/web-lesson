
import fs from "fs"
import {join,dirname} from "path";
import {fileURLToPath} from "url"

// console.log("import.meta.url:",import.meta.url)
const __filename = fileURLToPath(import.meta.url)
// console.log("__filename:",__filename)
const __dirname = dirname(__filename)
// console.log("__dirname:",__dirname)

const new_path = join(__dirname,"/package.json")
fs.readFile(new_path,"utf-8",(err,data) => {
    if(err) return console.log(err)
    console.log("data:",data)
})