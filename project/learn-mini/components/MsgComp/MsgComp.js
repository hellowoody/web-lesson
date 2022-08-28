Component({
  properties: {
    p1:String,  // 这个组件可以接收一个名字叫p1的参数
    p2:Number,
    p3:Boolean,
    p4:{
      type:String,
      value:"默认值default"
    },
    p5:{
      type:Array,
      value:[1,2,3]
    },
    count:{
      type:Number,
      value:0
    }
  },
  created(){
    console.log("p1的类型：",typeof(this.properties.p1) )
    console.log("p2的类型：",typeof(this.properties.p2) )
    console.log("p3的类型：",typeof(this.properties.p3) )
  },
  methods: {
    increase(){
      this.triggerEvent("handleAdd")  // 第一个参数是事件名称
    },
    decrease(){
      this.triggerEvent("handleSub")
    },
  }
})
