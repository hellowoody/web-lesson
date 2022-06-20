const baseUrl = "http://localhost:3000"

export const fetch = (api,data) => {

  return new Promise((resolve,reject) => {
    wx.request({
      url:baseUrl + api,
      method:"POST",
      header:{
        "content-type":"application/json;charset=UTF-8"
      },
      data,
      success: res => {
        if(res.statusCode === 200){
          resolve(res)
        }else{
          reject("请求失败")
        }
      },
      fail:e => reject(e.errMsg)
    })
  })
}