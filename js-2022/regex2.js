const regex = /(\d{4})-(\d{1,2})-(\2)/
const regex2 = /(?:\d{4})-(\d{1,2})-(\d{1,2})/


console.log(regex.exec("2023-03-03"))
console.log(regex2.exec("2023-03-03"))
