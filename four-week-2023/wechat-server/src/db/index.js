import {readFileSync, writeFileSync} from "fs"
import {dirname,resolve} from "path"
import {fileURLToPath} from "url"
// commonjs __dirname path.resolve
// esm 没有 __dirname
const filename = fileURLToPath(import.meta.url) // 当前文件的路径
const __dirname = dirname(filename)             // 当前文件所在目录的绝对路径

export const get = (filename) => {
    let file = ""
    switch (filename) {
        case "StationList":
            file = filename + ".json"
            break;
        case "UserLikeStation":
            file = filename + ".json"
            break;
        case "User":
            file = filename + ".json"
            break;
        default:
            break;
    }

    // const res = readFileSync(绝对路径,charset)
    
    try {
        const res = readFileSync(resolve(__dirname,file),"utf-8")
        return JSON.parse(res)
    } catch (error) {
        return error
    }
}



export const update = (filename,data) => {
    try {
        const res = writeFileSync(resolve(__dirname,filename+".json"),JSON.stringify(data))
        return JSON.parse(res)
    } catch (error) {
        return error
    }
}