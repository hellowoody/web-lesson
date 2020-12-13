export const getArray = (key:string) : string[] => {
    let val = localStorage.getItem(key)
    return val === null ? [] : val.split(',')
}

export const setArray = (key:string,val:any) => {
    let arr = getArray(key)
    if (arr.indexOf(val) < 0) {
        arr.push(val)
        localStorage.setItem(key,arr.toString())
    }
}

export const clearItem = (key:string) => {
    localStorage.removeItem(key)
}

export const setCacheVal = (key:string,val:any) => {
    localStorage.setItem(key,val)
}

export const getCacheVal =  (key:string) : string => {
    return localStorage.getItem(key)
}

export const clearCache = () => {
    localStorage.clear()
}
