Component({
  properties:{
    num:Number,
    foodId:Number
  },
  methods:{
    increase(){
      this.triggerEvent("countEvent",{
        num:this.properties.num + 1,
        foodId:this.properties.foodId
      })
    },
    decrease(){
      this.triggerEvent("countEvent",{
        num:this.properties.num - 1,
        foodId:this.properties.foodId
      })
    }
  }
})

