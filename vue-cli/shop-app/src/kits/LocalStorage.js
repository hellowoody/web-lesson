//loccalstorage 本身支持 字符串
//封装的目的：为了可替换
export const getArray = (key)=>{
    let val = localStorage.getItem(key)
    return val === null ? [] : val.split(',')
}

export const setArray = (key,val)=>{
    let arr = getArray(key)
    arr.push(val)
    localStorage.setItem(key,arr.toString())
}
