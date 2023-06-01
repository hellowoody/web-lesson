export const mockFetch = (p) => new Promise((resolve,reject) => {
    setTimeout(() => resolve(p),1000)
})