import axios from "axios"

const protocal = "http"
const ip = "0.0.0.0"
const port = 3000

const baseURL = `${protocal}://${ip}:${port}`

const instance = axios.create({
    baseURL,
    timeout:12000, //12s 
    headers:{
        "Content-Type":"application/json"
    }
})

const instanceFormData = axios.create({
    baseURL,
    timeout:12000, //12s 
    headers:{
        "Content-Type":"multipart/form-data"
    }
})

export const restHttp = (api,param) => {
    return new Promise((resolve,reject) => {
        instance.post(api,param)
            .then(res => resolve(res.data))
            .catch(e => reject(e))
    })
}

export const formDataHttp = (api,param) => {
    return new Promise((resolve,reject) => {
        instanceFormData.post(api,param)
            .then(res => resolve(res.data))
            .catch(e => reject(e))
    })
}

export const gql = param => new Promise((resolve,reject) => {
                                instance.post("/gql",param)
                                    .then(res => resolve(res.data))
                                    .catch(e => reject(e))
                            })