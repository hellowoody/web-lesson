import axios from "axios";

const ip = "127.0.0.1";
const port = 3100;
export const baseURL = `http://${ip}:${port}`;
export const ImgUrl = baseURL + "/assets/upload/"  // http://127.0.0.1:3100/assets/upload/

// instance Promise
const instance = axios.create({
    baseURL,
    timeout:10000, //10s 超时时间
    headers:{
        // 这是报文的格式
        "Content-Type":"application/json",
        // "Content-Type":"application/x-www-form-urlencoded",
    }
})

instance.interceptors.request.use((config) => config,(e) => Promise.reject(e));

instance.interceptors.response.use((resp) => {
    if(resp.status === 200){
        return Promise.resolve(resp)
    }else{
        return Promise.reject(resp)
    }
}, e => {
    if(e.response.status){
        return Promise.reject(e.response)
    }
});

export const Gql = (param) => {
    return new Promise((resolve,reject) => {
        // http://127.0.0.1:3100/gql
        instance.post("/gql",param)
            .then(res => {
                resolve(res.data)
            })
            .catch(e => reject(e))
    })
}

export const Http = (api,param) => {
    return new Promise((resolve,reject) => {
        instance.post("/api"+api,param)
            .then(res => {
                resolve(res.data)
            })
            .catch(e => {
                reject(e)
            })
    })
}