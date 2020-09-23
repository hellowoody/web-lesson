/*
本地缓存
优点：除非手动或者浏览器设置里清空缓存被激活，否则一直存在
注意：1.loccalstorage 本身支持 字符串
     2.本身不支持双向绑定
*/
//loccalstorage 本身支持 字符串
//封装的目的：为了可替换
export const getArray = (key)=>{
    let val = localStorage.getItem(key)
    return val === null ? [] : val.split(',')
}

export const setArray = (key,val)=>{
    let arr = getArray(key)
    let ifinsert = true
    for(let v of arr){
        if (v === val) {
            ifinsert = false
            break
        }
    }
    if (ifinsert) {
        arr.push(val)
        localStorage.setItem(key,arr.toString())
    }
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
