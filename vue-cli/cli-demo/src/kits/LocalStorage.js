/*
本地缓存的封装实现
"historysearch":"乔丹篮球鞋,T恤,连衣裙"
*/

export const getArray = (key) => {
    const res = localStorage.getItem(key)
    return res === null ? [] : res.split(",")
}

export const setArray = (key,val) => {
    /*
    1.getArray 返回一个数组
    2.用数组push新的item
    3.数组to字串，以逗号分隔
    */
    const arr = getArray(key)
    if(arr.indexOf(val) < 0){
        arr.push(val)
        localStorage.setItem(key,arr.toString())
    }
}

export const clearItem = (key) => {
    localStorage.removeItem(key)
}