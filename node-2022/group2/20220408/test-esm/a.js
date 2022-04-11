console.log("加载a.js")
export let count = 0;
export let msg = "初始化"

export const add = (who) => {
    count++
    console.log(`${who}调用的我修改count`)
}

export const updateMsg = () => msg = "修改msg"
console.log("加载完毕a.js")