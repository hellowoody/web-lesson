const baseUrl = "http://127.0.0.1:8080/api"

let resData = {
    "code":"",
    "msg":"",
    "data":{}
}

export const Http = (api,param)=>{
    let url = baseUrl+api
    console.log(url,param)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let r = Math.random()
            if(r>0.1 && r<0.9){
                switch(api) {
                    case "/register":
                        resData.code = "ok"
                        resData.msg = "注册成功"
                        break;
                    case "/login":
                        resData.code = "ok"
                        resData.msg = "登录成功"
                        resData.data = {
                            token : "123456",
                            user:{
                                userid:"abc@mail.com",
                                username:"张三"
                            }
                        }
                        break;
                    default:
                } 
                resolve(resData)
            }else{
                resData.code = "fail"
                resData.msg = "该邮箱已被注册"
                reject(resData.msg)
            }
        },1000)
    })
}