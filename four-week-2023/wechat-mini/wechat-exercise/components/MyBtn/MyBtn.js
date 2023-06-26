Component({
  properties:{
    btnName:{
      type:String,
      value:"默认btn"
    },
    targetUrl:String,
    num:Number,
    arr:Array
  },
  methods:{
    navto(){
      this.triggerEvent("jump",{
        url:this.data.targetUrl
      })
    }
  },
  data:{

  },
  created(){
    console.log(1000)
    console.log(this.data)
    console.log(typeof this.data.num)
  }
})