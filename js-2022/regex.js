const regex = /(\d{4})-(\d{1,2})-(\d{1,2})/
const regex2 = /<div>.*?<\/div>/
const regex3 = /<div>.*<\/div>/

const regex4 = /<div>[\s\S]*?<\/div>/
const regex5 = /<div>[\s\S]*<\/div>/

console.log(regex.exec("2023-03-13"))
console.log(regex.exec("2023-3-13"))
console.log(regex.exec("abc2023-3-139000"))
const html = `
    <div>123</div><div>abc</div><div>一二三</div>
`
const html2 = `
    <div>123</div>
    <div>abc</div>
    <div>一二三</div>
`
console.log(regex2.exec(html))
console.log(regex3.exec(html))
console.log("*****************")
console.log(regex4.exec(html))
console.log(regex5.exec(html))