import {graphql, buildSchema } from 'graphql'

//schema 架构图 总述 概述
/*
//声明用什么方式 操作数据
type Query {
  hello:String //定义可被查询属性的类型
}
*/
let schema = buildSchema(`
  type Query {
    hello: String,
    goods:[Good]
  }
  type Good {
    id:Int,
    name:String,
    price:Float,
    type:String
  }
`);

/*
解释可被查询的属性
*/
var root = { 
  hello: function(){
    return 'Hello world!' 
  },
  goods:function(){
    let arr = [
      {
        id:1,
        name:'乔1',
        price:1000,
        type:'03'
      },
      {
        id:2,
        name:'乔2',
        price:1000,
        type:'03'
      }
    ]
    return arr
  }
};

let p : string = `
  {
    goods(count:10){
      name,
      price,
      type
    }
  }
`

let res = graphql(
  schema,
  p,
  root
)

res.then((res)=>{
  console.log(JSON.stringify(res))
})
