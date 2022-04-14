import fs,{readFileSync} from "fs";

let res1 = "空";
try {
    res1 = fs.readFileSync("./还猪格格12.txt","utf-8")
} catch (e) {
    console.log("e:",e)
}
console.log("res1:",res1)

console.log("=================================")

const res2 = readFileSync("./还猪格格2.txt","utf-8")
console.log("res2:",res2)