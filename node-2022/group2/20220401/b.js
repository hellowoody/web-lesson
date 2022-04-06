console.log("我是B文件")

const obj_b = {
    a_name:"zhang"
}

// 1.module.exports 也可以使用命名导出
module.exports.a_name = "张"
module.exports.a_className = "1班"
module.exports.a_score = 99
/*
    2.module.exports 可以直接使用等号
      注意：一旦使用等号方式直接导出,那么会覆盖之前的所有命名导出的内容
*/
// 3.module.exports 直接使用等号最好只写一次，因为nodejs只会认可最后一次的module.exports
module.exports = obj_b
// module.exports = () => "b中的函数"
// 4.如果你在前面使用module.exports = xxx这种，那么你可以在它之后继续使用命名导出
module.exports.a_name = "李四"



