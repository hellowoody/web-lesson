import axios from 'axios'

const instanceGithub = axios.create({
    baseURL:"https://api.github.com",
    timeout:10000,
    headers:{
        'Content-Type' : 'application/json',
        'Authorization':'bearer '+"b128a0498e3aec05a44cac15a05f48e0276adebf"
    }
})

instanceGithub.interceptors.request.use(function(config){
    return config
},function(e){
    return Promise.reject(e)
})

instanceGithub.interceptors.response.use(resp => {
    if(resp.status === 200){
        return Promise.resolve(resp)
    }
},e => Promise.reject(e))

export const Http = (api,param) => {
    return new Promise((resolve,reject)=>{
        instanceGithub.post(api,param)
            .then(res => resolve(res))
            .catch(e => reject(e))
    })
}

const instance= axios.create({
    baseURL:"http://localhost:3000/api",
    timeout:5000,
    headers:{
        'Content-Type' : 'application/json',
    }
})

instance.interceptors.request.use(function(config){
    return config
},function(e){
    return Promise.reject(e)
})

instance.interceptors.response.use(resp => {
    if(resp.status === 200){
        return Promise.resolve(resp)
    }
},e => Promise.reject(e))

export const HttpNew = (api,param) => {
    return new Promise((resolve,reject)=>{
        instance.post(api,param)
            .then(res => resolve(res))
            .catch(e => reject(e))
    })
}