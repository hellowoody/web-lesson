
Component({

  properties: {
    name:String,
    arr:{
      type:Array,
      value:[1,2,3]
    }
  },

  methods:{
    increase(){
      this.triggerEvent("handleIncrease")
    },
    decrease(){
      this.triggerEvent("handleDecrease")
    }
  }
})
