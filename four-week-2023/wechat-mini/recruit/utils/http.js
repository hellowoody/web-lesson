// const BaseUrl = "http://笔记本的局域网ip:3000"
const BaseUrl = "http://127.0.0.1:3000"
// cmd
// ipconfig
// ipconfig -all
// mac/linux ifconfig 
// 查看电脑网卡的IPv4 地址

export const fetch = (api,params,method) => {
  return new Promise((resolve,reject) => {
    wx.request({
      url: BaseUrl+api,
      data:params,
      method:method ? method : "POST",
      success(res){
        resolve(res)
      },
      fail(e){
        reject(e)
      }
    })
  })
}