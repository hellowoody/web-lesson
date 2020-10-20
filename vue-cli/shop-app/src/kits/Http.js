import axios from 'axios';

export const baseUrl = "http://127.0.0.1:3000";
export const ImgUrl = baseUrl + "/uploads/"

const instance = axios.create({
    baseURL:baseUrl,
    timeout:10000, //超时时间
    headers:{
        // 'Content-Type':'application/x-www-form-urlencoded'
        'Content-Type':'application/json'
    }
})

instance.interceptors.request.use( config => config ,e => Promise.reject(e))

instance.interceptors.response.use( resp => {
    if (resp.status === 200) {
        return Promise.resolve(resp)
    }else{
        return Promise.reject(resp)
    }
},e =>{
    if (e.response.status) {
        return Promise.reject(e.response)
    }
})

export const Http = (api,param)=>{
    return new Promise((resolve,reject)=>{
        instance.post("/api"+api,param)
            .then(res => {
                resolve(res.data)
            })
            .catch(e => {
                reject(e)
            })
    })
}

export const HttpGql = (param)=>{
    return new Promise((resolve,reject)=>{
        instance.post("/gql",param)
            .then(res => {
                resolve(res.data)
            })
            .catch(e => {
                reject(e)
            })
    })
}

// let resData = {
//     "code":"",
//     "msg":"",
//     "data":{}
// }

// export const Http = (api,param)=>{
//     let url = baseUrl+api
//     console.log(url,param)
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let r = Math.random()
//             if(r>0.1 && r<0.9){
//                 switch(api) {
//                     case "/register":
//                         resData.code = "ok"
//                         resData.msg = "注册成功"
//                         break;
//                     case "/login":
//                         resData.code = "ok"
//                         resData.msg = "登录成功"
//                         resData.data = {
//                             token : "123456",
//                             user:{
//                                 userid:"abc@mail.com",
//                                 username:"张三"
//                             }
//                         }
//                         break;
//                     default:
//                 } 
//                 resolve(resData)
//             }else{
//                 resData.code = "fail"
//                 resData.msg = "该邮箱已被注册"
//                 reject(resData.msg)
//             }
//         },1000)
//     })
// }