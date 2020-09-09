const baseUrl = "http://127.0.0.1:8080/api"

let resData = {
    "code":"",
    "msg":"",

    "data":{}
}
// import axiox from "axiox";

export const Http = (api,param)=>{
    // let url = baseUrl+api
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let r = Math.random()
            if(r>0.1 && r<0.9){
                resData.code = "ok"
                resData.msg = "注册成功"
                resolve(resData)
            }else{
                resData.code = "fail"
                resData.msg = "该邮箱已被注册"
                reject(resData.msg)
            }
        },1000)
    })
}