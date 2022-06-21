import fs from "fs";
import {dirname,resolve} from "path";
import {fileURLToPath} from "url"

const filename = fileURLToPath(import.meta.url)
const __dirname = dirname(filename)

export const get = (filename) => {
    switch (filename) {
        case "food":
            return food()
        case "homeTopList":
            return homeTopList()
        default:
            break;
    }
}

const food = () => {
    const filepath = resolve(__dirname,"food.json")
    try {
        const content = fs.readFileSync(filepath,"utf-8")
        return JSON.parse(content)
    } catch (error) {
        return error
    }
}

const homeTopList = () => {
    const filepath = resolve(__dirname,"homeTopList.json")
    try {
        const content = fs.readFileSync(filepath,"utf-8")
        return JSON.parse(content)
    } catch (error) {
        return error
    }
}