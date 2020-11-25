console.log("promise test js");

const p = new Promise(function(resolve,reject){
    setTimeout(()=>{
        const res = {
            code : ""
        }
        /*
        http post res
        */
        res.code = 500
        if(res.code === 200){
            resolve(1000)
        }else{
            reject(2000)
        }
    },1000)
})


p
.then((res)=>{
    /*授权是否成功*/
    console.log(res)
    return new Promise(diyajax1()) 
})
.then((res)=>{
    /*请求权限*/
    console.log(res)
    return new Promise(diyajax1()) 
})
.then((res)=>{
    /*请求菜单*/
    console.log(res)
})
.catch(function(err){
    console.log(err)
})



// $.ajax({
//     url:"http:127.0.0.1/login",
//     method:"post",
//     data:JSON.stringify({id:1,pwd:"123"}),
//     header:{},
//     success:function(res){
//         /*
//             成功操作
//             res拿到roleid 再去请求权限东西
//         */
//         diyajax(function(res1){
//             diyajax1(function(res2){
            
//             },function(err2){
    
//             })
//         },function(err1){

//         })
//     },
//     error:function(){
//         /*
//             失败操作
//         */
//     }
// })


