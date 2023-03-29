
const s1 = "tomorrow"
const s2 = "brown"
const s3 = "row"
const s4 = "rowdy"
const s5 = "row!"

console.log(/\brow\b/.exec(s1))
console.log(/\brow\b/.exec(s2))
console.log(/\brow\b/.exec(s3))
console.log(/\brow\b/.exec(s4))

console.log("***************")

console.log(/\brow/.exec(s1))
console.log(/\brow/.exec(s2))
console.log(/\brow/.exec(s3))
console.log(/\brow/.exec(s4))

console.log("***************")

console.log(/row\b/.exec(s1))
console.log(/row\b/.exec(s2))
console.log(/row\b/.exec(s3))
console.log(/row\b/.exec(s4))
console.log(/row\b/.exec(s5))