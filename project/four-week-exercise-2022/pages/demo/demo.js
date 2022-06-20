import {sub,sum} from "../../utils/tools.js"
const {formatDate} = require("../../utils/kits.js")

Page({
  onLoad(query){
    console.log("query:",query)
    this.setData({
      params:query
    })
  },
  data:{
    params:{},
    sumRes:0,
    sumRes2:0,
    subRes:0,
    currentDate:formatDate(),
    inputVal:"",
    varA:0,
    varB:0,
    a:0,
    A:0
  },
  getSum(){
    // console.log(this.data.sumRes)  // 0
    this.setData({
      sumRes:sum(1,2)
    })
  },
  getSub(){
    this.setData({
      subRes:sub(1,2)
    })
  },
  getSum2(){
    console.log(this.data.varA,this.data.varB)
    this.setData({
      sumRes2:parseFloat(this.data.varA)+parseFloat(this.data.varB)
    })
  },
  changeVar(){
    this.setData({
      a:100
    })
  }
})