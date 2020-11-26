import axios from 'axios';

const instanceGithub = axios.create({
    baseURL:"https://api.github.com",
    timeout:10000, //超时时间
    headers:{
        'Content-Type' : 'application/json',
        'Authorization':'bearer '+"2e779e62e16d6196ffb6aa2531955ea71cb7bc2f"
    }
})

instanceGithub.interceptors.request.use( config => config ,e => Promise.reject(e))

instanceGithub.interceptors.response.use( resp => {
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

export const HttpGql = (param)=>{
    return new Promise((resolve,reject)=>{
        instanceGithub.post("/graphql",param)
            .then(res => {
                resolve(res.data)
            })
            .catch(e => {
                reject(e)
            })
    })
}