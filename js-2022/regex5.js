const str = `
first line1
second line2
last line3
`

const regex = /^\w+/mg

console.log(regex.exec(str))
console.log(regex.exec(str))
console.log(regex.exec(str))

const regex2 = /\w+$/mg

console.log(regex2.exec(str))
console.log(regex2.exec(str))
console.log(regex2.exec(str))