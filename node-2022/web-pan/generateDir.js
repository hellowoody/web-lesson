import {listNestedFiles} from "./listDir.js";
import fs from "fs"
import {dirname, resolve} from "path"
import {fileURLToPath} from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const generateDir = (dir) => {
    listNestedFiles(dir,(err,res) => {
        if(err) {
            console.error(err);
            process.exit(1)
        }
    
        // const data = util.inspect(res, {depth: null})
        const data = JSON.stringify(res,null,2)
        // console.log(data)
        fs.writeFile(resolve(__dirname,"./dir.json"),data,e => e ? console.error(e) : console.log("写入成功"))
    })
}