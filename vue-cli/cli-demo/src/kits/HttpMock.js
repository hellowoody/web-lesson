const baseUrl = "http://127.0.0.1:8080/api"

export const Http = (api,param) => {
    let url = baseUrl + api
    console.log(url,param)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                data:[
                    {
                        id:0,
                        name:"aaa"
                    },
                    {
                        id:1,
                        name:"bbb"
                    },
                    {
                        id:2,
                        name:"ccc"
                    },
                ]
            })
        },1000)
    })
}