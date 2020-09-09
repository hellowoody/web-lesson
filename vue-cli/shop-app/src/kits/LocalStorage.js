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

export const clearItem = (key)=>{
    localStorage.removeItem(key)
}

export const setCacheVal = (key,val)=>{
    localStorage.setItem(key,val)
}

export const getCacheVal = (key)=>{
    return localStorage.getItem(key)
}

export const clearCache = ()=>{
    localStorage.clear()
}
