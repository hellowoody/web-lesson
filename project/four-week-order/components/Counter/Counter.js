Component({
  properties: {
    foodId:Number,
    num:Number
  },
  methods:{
    increase(){
      if(this.properties.num < 9){
        this.triggerEvent("countEvent",{
          num:this.properties.num + 1,
          foodId:this.properties.foodId
        })
      }else{
        wx.showToast({
          title: '已达到上限',
          icon:"none"
        })
      }
    },
    decrease(){
      this.triggerEvent("countEvent",{
        num:this.properties.num - 1,
        foodId:this.properties.foodId
      })
    }
  }
})
