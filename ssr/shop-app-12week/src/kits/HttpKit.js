// export const mockHttp = () => {
//     return new Promise(function(resolve,reject){
//         // 模拟网络的延时
//         setTimeout(() => {
//             resolve(["abc1","123","汉堡1","衣服2","可乐3"])
//         },1000)
//     })
// }

// export const myHttp = () => {
//     // fetch返回的是Promise对象
//     // fetch的问题：比较偏底层，封装的方法不是很全。
//     return fetch("http://localhost:3000/search",{
//         method:"post"
//     })
// }

// axios 是更加智能更加方便的fetch，可以认为它就是jq中的ajax
// 但axios是第三方的，需要安装

import axios from "axios";

const ip = "127.0.0.1";
// const ip = "192.168.31.182";
const port = 3000;
export const baseURL = `http://${ip}:${port}`;

const instance = axios.create({
    baseURL,
    timeout:12000, // 超时时间：12s
    headers:{
        "Content-Type":"application/json",
        // "Content-Type":"application/x-www-form-urlencoded",
    }
})

// axios 可以增加拦截器
// instance.interceptors.request.use(callback_success,callback_fail)
// instance.interceptors.request.use((config) => {
//     console.log("请求成功",config)
//     // 请求成功时 不要忘记return
//     return config
// },(e) => {
//     console.log("请求失败",e)
//     // 请求失败时，不需要return 可以直接reject
//     Promise.reject(e)
// })

// instance.interceptors.response.use(callback_success,callback_fail)
// instance.interceptors.response.use((resp) => {
//     console.log(resp)
//     if(resp.status === 200){
//         return Promise.resolve(resp)
//     }else{
//         console.log("状态码:",resp.status)
//         return Promise.reject(resp)
//     }
// },(e) => {
//     if(e.response.status){
//         return Promise.reject(e.response)
//     }
// })

export const restHttp = (api,param) => {
    return new Promise((resolve,reject) => {
        instance.post(api,param)
            .then(res => resolve(res.data))
            .catch(e => reject(e))
    })
}

export const gql = param => {
    // http://localhost:3000/gql
    return new Promise((resolve,reject) => {
        instance.post("/gql",param)
            .then(res => resolve(res.data))
            .catch(e => reject(e))
    })
}