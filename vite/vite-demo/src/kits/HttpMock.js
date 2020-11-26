const baseUrl = "http://mockurl:8080";

export const Http = (api,param)=>{
    let url = baseUrl+api
    console.log(url,param)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([
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
                {
                    id:3,
                    name:"ddd"
                },
                {
                    id:4,
                    name:"eee"
                },
                {
                    id:5,
                    name:"fff"
                },
                {
                    id:0,
                    name:"aaa"
                },
                {
                    id:0,
                    name:"aaa"
                },
            ])
            // let r = Math.random()
            // if(r>0.1 && r<0.9){
            //     switch(api) {
            //         case "/register":
            //             resData.code = "ok"
            //             resData.msg = "注册成功"
            //             break;
            //         case "/login":
            //             resData.code = "ok"
            //             resData.msg = "登录成功"
            //             resData.data = {
            //                 token : "123456",
            //                 user:{
            //                     userid:"abc@mail.com",
            //                     username:"张三"
            //                 }
            //             }
            //             break;
            //         default:
            //     } 
            //     resolve(resData)
            // }else{
            //     resData.code = "fail"
            //     resData.msg = "该邮箱已被注册"
            //     reject(resData.msg)
            // }
        },1000)
    })
}