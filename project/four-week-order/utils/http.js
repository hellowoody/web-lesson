const baseUrl = "http://192.168.31.182:3000"

export const assetsUrl = "http://192.168.31.182:3000/assets/"

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
          switch (res.data.code) {
            case "03":
              wx.removeStorageSync('userInfo')
              wx.removeStorageSync('hasUserInfo')
              wx.removeStorageSync('tokenId')
              wx.switchTab({
                url: '/pages/profile/profile'
              })
              reject(res.data.data)
              break;
            case "02":
              reject(res.data.data)
              break;
            default:
              resolve(res)
              break;
          }
        }else{
          reject("请求失败")
        }
      },
      fail:e => reject(e.errMsg)
    })
  })
}