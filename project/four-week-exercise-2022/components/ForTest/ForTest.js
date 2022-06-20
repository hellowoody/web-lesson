Component({
  data:{
    arr:[
      {id:1,name:"张三"},
      {id:2,name:"李四"},
      {id:3,name:"王武"},
    ]
  },
  methods:{
    switch(e){
      const length = this.data.arr.length
      for (let i = 0; i < length; ++i) {
        const x = Math.floor(Math.random() * length)
        const y = Math.floor(Math.random() * length)
        const temp = this.data.arr[x]
        this.data.arr[x] = this.data.arr[y]
        this.data.arr[y] = temp
      }
      this.setData({
        arr: this.data.arr
      })
    },
    addArr(){
      this.data.arr = [{id:4,name:"赵六"}].concat(this.data.arr)
      this.setData({
        arr: this.data.arr
      })
    },
    changeItem(e){
      console.log(e.target.dataset.idx)
      console.log(e.detail.value)
      this.data.arr[e.target.dataset.idx].name = e.detail.value
      this.setData({
        arr: this.data.arr
      })
    }
  }
})
