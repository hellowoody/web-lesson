console.log("a.js file")

const name = "我是a.js文件"
// exports.diyname = xxx
// diyname 是你起的名字
// xxx 可以是string ，number ， boolean ， object{}, function, array
exports.name = "我是a.js文件，这才是正确的导出方式"
exports.score = 100
exports.status = true
exports.obj = {
    a:1,
    b:2,
    c:3
}
exports.add = (a,b) => a+b
exports.arr = [1,2,3,4,5,6] 


// exports = xxx 这么写不算错，但是没有意义，不推荐这么写
// exports = 1000  // 不推荐这么写