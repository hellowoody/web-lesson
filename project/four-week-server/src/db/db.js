import fs from "fs";
import {dirname,resolve} from "path";
import {fileURLToPath} from "url"

const filename = fileURLToPath(import.meta.url)
const __dirname = dirname(filename)

export const get = (filename) => {
    let file = ""
    switch (filename) {
        case "food":
            file = "food.json"
            break;
        case "homeTopList":
            file = "homeTopList.json"
            break;
        case "user":
            file = "user.json"
            break;
        case "session":
            file = "session.json"
            break;
        case "userAddress":
            file = "userAddress.json"
            break;
        case "cart":
            file = "cart.json"
            break;
        case "order":
            file = "order.json"
            break;
        default:
            break;
    }
    const filepath = resolve(__dirname,file)
    try {
        const content = fs.readFileSync(filepath,"utf-8")
        return JSON.parse(content)
    } catch (error) {
        return error
    }
}

export const update = (filename,list) => {
    let file = ""
    switch (filename) {
        case "user":
            file = "user.json"
            break;
        case "session":
            file = "session.json"
            break;
        case "userAddress":
            file = "userAddress.json"
            break;
        case "cart":
            file = "cart.json"
            break;
        case "order":
            file = "order.json"
            break;
        default:
            break;
    }

    const filepath = resolve(__dirname,file)
    try {
        fs.writeFileSync(filepath,JSON.stringify(list),{flag:"w"})
    } catch (error) {
        console.log(error)
        throw(error)
    }
}

