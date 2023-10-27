export const getArray = key => {
    const item = localStorage.getItem(key) // string
    return item === null ? [] : item.split(",")
}

export const setArray = (key,value) => {
    const arr = getArray(key)
    // 去掉重复搜索的内容
    const idx = arr.indexOf(value)
    if(idx >= 0){
        arr.splice(idx,1)
    }
    arr.unshift(value)
    // localStorage.setItem(key, arr.join(","))
    // localStorage.setItem(key, arr.toString())
    localStorage.setItem(key, arr)
}

export const removeItem = key => localStorage.removeItem(key)

export const getItem = key => {
    return localStorage.getItem(key) ? localStorage.getItem(key) : ''
}

export const setItem = (key, value) => localStorage.setItem(key, value)