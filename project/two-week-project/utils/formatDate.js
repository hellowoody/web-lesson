// ESM模块管理
export function format(d){
  // year
  const year = d.getFullYear()
  // month
  const month = d.getMonth() + 1
  // date
  const date = d.getDate()
  // hour
  const hour = d.getHours()
  // min
  const min = d.getMinutes()
  // sec
  const second = d.getSeconds()
  return `${year}-${month}-${date} ${hour}:${min}:${second}`
}