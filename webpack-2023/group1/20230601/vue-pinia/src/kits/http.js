export const mockFetch = (p) => {
    return new Promise((resolve,reject) => {
        // 模拟网络延时
        setTimeout(() => resolve(p),1000)
    })
}