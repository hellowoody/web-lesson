Page({
  data:{
    val:123,
    count:100
  },
  // parameter 形参
  // argument  实参
  onLoad(options){
    // console.log("options:",options)
  },
  // changeVal(){
  //   // 1.想获取data中的任何属性
  //   console.log(this.data.val)
  //   // 2.如果想改变this.data中的属性，注意不能直接用等号赋值
  //   this.setData({
  //     val:this.data.val+1
  //   })
  // },
  inputVal(e){
    // console.log(e.detail.value)
    this.setData({
      val:e.detail.value
    })
  },
  increase(){
    this.setData({
      count:this.data.count+1
    })
  },
  decrease(){
    this.setData({
      count:this.data.count-1
    })
  },
})