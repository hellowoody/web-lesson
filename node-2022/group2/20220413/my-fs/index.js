import fs,{readFileSync} from "fs";

let res1 = "空";
try {
    res1 = fs.readFileSync("./a1.txt","utf-8")
} catch (e) {
    // console.log(2000,e)
}

console.log("a.txt:",res1)

console.log("===========================")

const res2 = readFileSync("./b.txt","utf-8")

console.log("b.txt:",res2)