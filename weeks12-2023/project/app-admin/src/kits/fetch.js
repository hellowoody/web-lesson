import axios from 'axios'

const ip = "127.0.0.1"
// const ip = "192.168.1.20"

const port = 3000

export const baseURL = `http://${ip}:${port}` // http://127.0.0.1:3000

// 将导入axios的对象，创建一个单例 （单独的实例）
const instance = axios.create({
    baseURL,
    timeout: 12000, // 12s
    headers:{
        'Content-Type': 'application/json'
    }
})

const instanceFormData = axios.create({
    baseURL,
    timeout: 12000, // 12s
    headers:{
        'Content-Type': 'application/form-data'
    }
})

export const gql = (p) => {
    return new Promise((resolve, reject) => {
        instance.post("/gql", p)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}

export const post = (api,p) => {
    return new Promise((resolve, reject) => {
        instance.post(api, p)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}

export const postFormData = (api,p) => {
    return new Promise((resolve, reject) => {
        instanceFormData.post(api, p)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}