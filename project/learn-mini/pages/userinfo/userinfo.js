Page({
  onLoad(options){
    // console.log("上一个页面传的参数:",options.name)
  },
  data:{
    msg:"hello",
    aa:0,
    bb:0,
    sumRes:0
  },
  getSumRes(){
    this.setData({
      sumRes:parseInt(this.data.aa,10)+parseInt(this.data.bb,10)
    })
  }
})