export const getArray = function(key:string):string[]{
    let val = localStorage.getItem(key);       // val type is string  "a,b,c"
    return val === null ? [] : val.split(",")  // ["a","b","c"]
}

export const setArray = (key:string,val:any) => {
    const arr = getArray(key);      // ["a","b","c"]
    const index= arr.indexOf(val);  // 校验原数组中是否含有本次查询的val，如果有会把所在位置的索引返回来
    if(index >= 0){
        arr.splice(index,1);        // 如果存在原数组中，用splice进行删除
    }
    arr.unshift(val);               // 在数组最前面插入新值
    localStorage.setItem(key,arr.toString());
}

export const clearItem = (key:string) => {
    localStorage.removeItem(key)
}

export const getCacheVal = (key:string) : string => {
    return localStorage.getItem(key)
}

